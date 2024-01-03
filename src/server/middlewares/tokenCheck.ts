import passport from "passport";
import { RequestHandler } from "express";
import { Payload } from "../types";

export const tokenCheck: RequestHandler = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err: Error, info: any, user: Payload) => {
        if (err) {
            return res.status(401).json({ message: "Banned lol", err });
        }

        if (info) {
            return res.status(401).json({ message: "Banned lol", info });
        }

        if (!user) {
            return res.status(401).json({ message: "Banned lol" });
        }

        req.user = user;
        next();
    })(req, res, next);
};
