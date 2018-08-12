/**
 * # Auth API
 * @description This is the API for passport authentication
 * @author Philip Wisner & Daniel Kelly
 */

//REQUIRE MODULES
/* jshint ignore:start */
const passport = require('passport');
const utils = require('../../middleware/requestHandler');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const models = require('../../datasource/schemas');
const User = models.User;
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');


const localLogin = (req, res, next) => {
  console.log('inside local login');
  passport.authenticate('local-login', {
      // failureRedirect: '/#/auth/login',
      // failureFlash: true,
      // passReqToCallback: true,
      //failwithError: true,
  },
function(err, user, info) {
  console.log('info', info);
  if (err) {
    return next(err);
  }

  if (!user) {return utils.sendResponse(res, info);}
  req.logIn(user, function(err) {
    if (err) { return next(err); }
    return utils.sendResponse(res, user);
  });
}
)(req, res, next);
};

const localSignup = (req, res, next) => {
 console.log('in localsignup :', req.body);
  passport.authenticate('local-signup', {
      // successRedirect: '/',
      // failureRedirect: '/#/auth/signup',
  },
  function (err, user, info) {
    console.log('info', info);
    if (err) {
      console.log('err: ', err);
      return next(err);
    }

    if (!user) {
      if (info.message && info.user && info.message === 'Can add existing user') {
        return utils.sendResponse(res, info);
      }
      console.log('user: ', user);
      return utils.sendResponse(res, info);
    }
    return utils.sendResponse(res, user);
    // console.log('user', user);
    // req.logIn(user, function (err) {
    //   if (err) {
    //     return next(err);
    //   }
    //   return utils.sendResponse(res, user);
    // });
  }
)(req, res, next);
};

const googleAuth = (req, res, next) => {
  passport.authenticate('google', {
     scope:["https://www.googleapis.com/auth/plus.login",
     "https://www.googleapis.com/auth/plus.profile.emails.read"
   ]
  })(req,res,next);
};

const googleReturn = (req, res, next) => {
  passport.authenticate('google', {
    failureRedirect: "/#/login",
    successRedirect: "/"
  })(req, res, next);
};

const logout = (req, res, next) => {
  console.log('LOGGING OUT!');
  req.logout();
  res.redirect('/');
};


const getResetToken = function(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buf) => {
      if (err) {
        return reject(err);
      }
      const token = buf.toString('hex');
      return resolve(token);
    });
  });
};

const sendResetLinkEmail = function(token, user, template) {

  return new Promise((resolve, reject) => {
    const smtpTransport = nodemailer.createTransport('SMTP', {
      service: 'SendGrid',
      auth: {
        user: '!!! YOUR SENDGRID USERNAME !!!',
        pass: '!!! YOUR SENDGRID PASSWORD !!!'
      }
    });
  });
};

const forgot = async function(req, res, next) {
  console.log('in forgot', req.body.email);
  let token;
  let user;
  let savedUser;

  try {
    token = await getResetToken(20);
    console.log('token', token);
    user = await User.findOne({ email: req.body.email });
      if (!user) {
        const msg = {
          info: 'There is no account associated with that email address'};
        return utils.sendResponse(res, msg);
      }

      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000;
      await user.save();
      console.log('req.headers', req.headers);
      const msg = {
        to: req.body.email,
        from: 'djk8552@gmail.com',
        subject: 'Request to reset your EnCoMpass password',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.'
        'Please click on the following link, or paste this into your browser to complete the process: http://${req.headers.host}/#/auth/reset/${token}
        If you did not request this, please ignore this email and your password will remain unchanged.`
      };
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      await sgMail.send(msg);
      console.log('after sgmail send');
      return utils.sendResponse(res, {'info': `Password reset email sent to ${req.body.email}`});
  }catch(err) {
    return utils.sendError.InternalError(err, res);
  }
};

const validateResetToken = async function(req, res, next) {
  try {
    const user = await User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now()}});

    if (!user) {
      return utils.sendResponse(res, {info: 'Password reset token is invalid or has expired', isValid: false});
    }
    return utils.sendResponse(res, { info: 'valid token', isValid: true });

  }catch(err) {
    return utils.sendError.InternalError(err, res);
  }
};

const resetPassword = async function(req, res, next) {
  console.log('body', req.body);
  console.log('token', req.params.token);
  try {
    const user = await User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) {
      return utils.sendResponse(res, {
        info: 'Password reset token is invalid or has expired.'
      });
    }
      const hashPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12), null);
      user.password = hashPass;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      await user.save();
      console.log('user saved');
      req.logIn(user, (err) => {
        if (err) {
          return utils.sendError.InternalError(err, res);
        }
        return utils.sendResponse(res, user);
      });
  }catch(err) {
    console.log(err);
    return utils.sendError.InternalError(err, res);
  }
};

module.exports.logout = logout;
module.exports.localLogin = localLogin;
module.exports.localSignup = localSignup;
module.exports.googleAuth = googleAuth;
module.exports.googleReturn = googleReturn;
module.exports.forgot = forgot;
module.exports.validateResetToken = validateResetToken;
module.exports.resetPassword = resetPassword;
/* jshint ignore:end */