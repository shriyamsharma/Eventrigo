const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUser(email, password);
  if (user) {
    req.session.user = user._id;
    res.json({
      message: 'You are successfully login',
      auth: true,
    });
  } else {
    res.json({
      message: 'Unable to login',
      auth: false,
    });
  } 
});

router.post('/signup', (req, res) => {
  const user = new User(req.body);
  req.session.user = user._id;
  user
    .save()
    .then((result) => {
      res.json({
        message: 'successfully created',
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: 'unable to create account',
        auth: false,
      });
    });
});

router.get('/haslogin', (req, res) => {
    if(req.session.user) {
        res.json({
            auth: true,
            message: "You are Login"
        })
    }
    return res.json({
        auth: false,
        message: "You are not login"
    })
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.json({
        auth: false,
        message: "Logout successful"
    });
});

module.exports = router;