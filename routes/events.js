const express = require('express');
const router = express.Router();
let Event = require('../models/event');


router.get('/', (req, res) => {
    Event.find() 
        .then(events => res.json(events))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const event = req.body.event;
    const city =  req.body.city;
    const date = Date.parse(req.body.date);

    const newEvent = new Event({
        name,
        email,
        phone,
        event,
        city,
        date
    });

    newEvent.save() 
    .then(() => res.json('Event added'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// //sign up form
// app.get("/register", function(req, res){
//     res.render("register");
// });

// //handle sin up
// app.post("/register", function(req, res){
//     // res.send("Register POST Route");

//     req.body.username
//     req.body.password
//     User.register(new User({username: req.body.username}), req.body.password, function(err, user){
//         if(err) {
//             console.log(err);
//             return res.render("register");
//         }
//         passport.authenticate("local")(req, res, function(){
//             res.redirect("/login");
//         });
//     });
// });

// //LOGIN ROUTES

// //render login form
// app.get("/login", function(req, res){
//     res.render("login");
// });

// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/secret",
//     failureRedirect: "/login"
// }),function(req, res){

// });

// //LOGOUT ROUTES

// app.get("/logout", function(req, res){
//     req.logOut();
//     res.redirect("/");
// });

// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect("/login");
// }


module.exports = router;