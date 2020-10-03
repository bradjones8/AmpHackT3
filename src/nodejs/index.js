// JavaScript source code
const express = require('express');
const path = require('path');
const MONGODB_URI = 'mongodb+srv://dbAdmin:gdLLL1HQDsfP8M2D@cluster0.cfnx3.mongodb.net/<dbname>?retryWrites=true&w=majority';
const app = express();
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log("Mongoose connected!");
});
const Schema =  mongoose.Schema;
const userSchema = new Schema({
    id: Number,
    name: {
        first: String,
        last: String
    },
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

const data = {
    id: 1,
    name: {
        first: 'John',
        last: 'Doe'
    },
    email: 'john@doe.com',
    age: 30
};

const newUser =  User(data); //Instance of model

newUser.save((error) => {
    if (error) {
        console.log('Data did not save');
    } else {
        console.log('Data has been saved!');
    }
})

app.get('/api/getList', (req, res) => {
    
    User.find({})
        .then((data) => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
    res.json(data);

});


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items




// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
