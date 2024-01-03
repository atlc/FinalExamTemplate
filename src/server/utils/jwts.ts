import jwt from "jsonwebtoken";
import { Payload } from "../types";
import config from "../config";

export const signToken = (data: Payload) => {
    const token = jwt.sign(data, config.jwt.secret, { expiresIn: config.jwt.expiration });
    return token;
};
