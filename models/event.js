const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: 
    { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: Number, 
        required: true 
    },
    event: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
