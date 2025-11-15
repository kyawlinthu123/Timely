import bcrypt from "bcryptjs";

// Hashing password before saving it to database
export async function hashPassword (plainPassword) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(plainPassword, salt);
};

// Comparing plain password and hashed password
export async function comparePassword (plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword,hashedPassword);
};