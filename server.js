const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
var bodyParser = require('body-parser');


const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB db connection established successfully");
})


app.use(cors());
app.use(express.json());



// include session 
app.use(session({
    name: "session",
    secret: "1234-4321",
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({extended:true}));



app.use('/events', eventsRouter);
app.use('/', usersRouter);

if(process.env.NODE_ENV === 'production' ) {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});