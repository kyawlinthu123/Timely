import crypto from 'crypto';

export function generateResetToken () {
    // generate random token
    const raw = crypto.randomBytes(32).toString("hex");

    // hash and store it
    const hashed = crypto.createHash("sha256").update(raw).digest("hex");

    // set exp data as 30 mins
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000); 

    return { raw, hashed, expiresAt };
}