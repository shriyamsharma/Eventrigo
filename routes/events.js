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


module.exports = router;
