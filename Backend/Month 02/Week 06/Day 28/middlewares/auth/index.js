const passport = require("passport"); // Import passport
const LocalStrategy = require("passport-local").Strategy; // Import LocalStrategy
const bcrypt = require("bcrypt"); // Import bcrypt (excrypt and comparePassword)
const JWTstrategy = require("passport-jwt").Strategy; // Import JWT Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt; // Import ExtractJWT
const { user } = require("../../models"); // Import user model

exports.signup = (req, res, next) => {
  passport.authenticate("signup", { session: false }, (err, user, info) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If user is false
    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

// If user call this passport
passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email", // usernameField is come from req.body.email
      passwordField: "password", // passwordField is come from req.body.password
      passReqToCallback: true, // enable to read req.body/req.params/req.query
    },
    async (req, email, password, done) => {
      try {
        let userSignUp = await user.create(req.body);
        return done(null, userSignUp, {
          message: "User can be created",
        });
      } catch (e) {
        return done(null, false, {
          message: "User can't be created",
        });
      }
    }
  )
);

exports.signin = (req, res, next) => {
  passport.authenticate("signin", { session: false }, (err, user, info) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }
    // If user is false
    if (!user) {
      return res.status(401).json({
        message: info.message,
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

// If user call this passport
passport.use(
  "signin",
  new LocalStrategy(
    {
      usernameField: "email", // usernameField is come from req.body.email
      passwordField: "password", // passwordField is come from req.body.password
      passReqToCallback: true, // enable to read req.body/req.params/req.query
    },
    async (req, email, password, done) => {
      try {
        let userSignIn = await user.findOne({ email });
        // If userSignIn is not exists
        if (!userSignIn) {
          return done(null, false, {
            message: "Email not found",
          });
        }
        // Compare the password that we've inputed
        let validate = await bcrypt.compare(password, userSignIn.password);
        // If password wrong
        if (!validate) {
          return done(null, false, {
            message: "Wrong password",
          });
        }
        return done(null, userSignIn, {
          message: "User can sign in",
        });
      } catch (e) {
        return done(null, false, {
          message: "User can't sign in",
        });
      }
    }
  )
);
