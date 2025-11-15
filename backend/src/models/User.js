import mongoose from "mongoose";
import {
  comparePassword,
  hashPassword,
} from "../services/auth/passwordService";
import { generateJWT } from "../services/auth/tokenService";
import { generateVerificationCode } from "../services/auth/verificationService";
import { generateResetToken } from "../services/auth/resetTokenService";
import { createSession } from "../services/auth/sessionService";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [20, "Username cannot exceed 20 characters"],
      validate: {
        validator: function (v) {
          return /^[a-z0-9_]+$/.test(v);
        },
        message: "Username can only contain letters, numbers, and underscores",
      },
    },
    profilePicture: { type: String, default: ""},
    email: { 
    type: String, 
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
    validator: function(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    },
    message: "Please provide a valid email"
  }
}
    password: {
  type: String,
  required: function () {
    return this.authProvider === "local";
  },
  minlength: [8, "Password must be at least 8 characters"],
  select: false,
  validate: {
    validator: function(v) {
      // Only validate if password exists (for Google auth)
      if (!v) return true;
      // Require: uppercase, lowercase, number
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(v);
    },
    message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
  }
}
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    googleId: { type: String, sparse: true },
    role: {
      type: String,
      enum: ["user", "premium", "admin"],
      default: "user",
    },
    isEmailVerified: { type: Boolean, default: false },
    verificationCode: { type: String, select: false },
    verificationCodeExpires: Date,
    resetToken: { type: String, select: false},
    resetTokenExpires: Date
  },
  { timestamps: true }
);

// Indexes for performance
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });
userSchema.index({ 'sessions.token': 1 });
userSchema.index({ verificationCode: 1 });
userSchema.index({ resetToken: 1 });

// Hashing password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await hashPassword(this.password);

  if (this.isModified("sessions") && this.sessions.length > 10) {
    this.sessions = this.sessions.slice(-10);
  };

  next();
});

// Comparing plain text password user entered to the one in database
userSchema.methods.comparePassword = function (plainPassword) {
  return comparePassword(plainPassword, this.password);
};

// This is for generating a verification code to verify user's email
userSchema.methods.createVerificationCode = function () {
  const { raw, hashed, expiresAt } = generateVerificationCode();
  this.verificationCode = hashed;
  this.verificationCodeExpires = expiresAt;
  return raw;
};

// This is for when user needs to reset their password
userSchema.methods.createResetToken = function () {
  const { raw, hashed, expiresAt } = generateResetToken();
  this.resetToken = hashed;
  this.resetTokenExpires = expiresAt;
  return raw;
};

// remove sensitive fields
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.sessions;
  delete obj.verificationCode;
  delete obj.verificationCodeExpires;
  delete obj.resetToken;
  delete obj.resetTokenExpires;
  return obj;
};

const User = mongoose.model("User", userSchema);

export default User;
