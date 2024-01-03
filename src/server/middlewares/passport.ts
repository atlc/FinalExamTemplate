import passport from "passport";
import LocalStrategy from "passport-local";
import JwtStrategy from "passport-jwt";
import { Express } from "express";
import config from "../config";

export const configurePassport = (app: Express) => {
    passport.use(
        new LocalStrategy.Strategy(
            {
                usernameField: "email",
            },
            (email, password, done) => {
                // DB lookup user by email
                // check if they exist
                // if user exists, use bcrypt to check pw match
                // if so, delete user.password && done(null, user);
                // else done("No user lmao", false);
            }
        )
    );

    passport.use(
        new JwtStrategy.Strategy(
            {
                secretOrKey: config.jwt.secret,
                jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
            },
            (payload, done) => {
                done(null, payload);
            }
        )
    );

    app.use(passport.initialize());
};
