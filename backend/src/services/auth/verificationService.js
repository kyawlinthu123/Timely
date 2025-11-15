import crypto from 'crypto';

export function generateVerificationCode () {
    // generate 6 digits code
    const raw = Math.floor ( 100000 + Math.random() * 900000).toString();

    // hashing the generated code for storage
    const hashed = crypto.createHash("sha256").update(raw).digest("hex");

    // set expiration of the code as 10 minutes
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    return { raw, hashed, expiresAt };
}