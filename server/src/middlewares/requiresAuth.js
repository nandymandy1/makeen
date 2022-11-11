import passport from "passport";

export const requiresAuth = passport.authenticate("jwt", { session: false });
