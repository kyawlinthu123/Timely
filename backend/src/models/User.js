import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    // 🧠 Identity
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    profilePicture: {
      type: String,
    },

    // 📧 Email & Password
    email: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: function () {
        return this.authProvider === "local";
      },
      select: false,
    },

    // 🔐 Auth Type
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    googleID: {
      type: String,
      unique: true,
      sparse: true,
    },

    // 🧱 Role
    role: {
      type: String,
      enum: ["user", "pro", "premium", "admin"],
      default: "user",
    },

    // ✅ Verification & Security
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationCode: String,
    emailVerificationCodeExpires: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    // 🪪 Token list for session management
    tokens: [
      {
        token: { type: String, required: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

// 🔒 Password hashing middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
  next();
});

// 🔑 Compare password helper
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 🪄 Generate JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { id: this._id, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const User = mongoose.model("User", userSchema);
export default User;
