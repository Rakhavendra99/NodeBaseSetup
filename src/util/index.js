
import crypto from "crypto"
export const parseDataUsingGet = (req) => req.query;

export const parseDataUsingPost = (req) => req.body;

export const getUserIdfromToken = (req) => req.user.details.id;

export const encryptPass = (password) => {
    return crypto.createHash("sha256").update(password, "utf8").digest("hex");
}
