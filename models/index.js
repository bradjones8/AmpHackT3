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


const postSchema = new Schema({
    postId: Number,
    //id of person needing aid
    needsAidId: Number,
    //id of person giving aid
    aidId: Number,
    //name of person needing aid
    needsAidName: {
        first: String,
        last: String
    },
    //name of person giving aid
    aidName: {
        first: String,
        last: String
},
    title: String,
    postDesc: String,
    postResponse: String,
    upVotes: Number,
    downVotes: Number

});
const Post = mongoose.model('Post', postSchema);

app.get('/makepost', (req, res) => {
    postData = {
        postId: 1,
        //id of person needing aid
        needsAidId: 1,
        //id of person giving aid
        aidId: null,
        //name of person needing aid
        needsAidName: {
            first: 'Jane',
            last: 'Doe'
        },
        //name of person giving aid
        aidName: {
            first: '',
            last: ''
        },
        title: "Walk to Schoolbus",
        postDesc: "I am in need of a local volunteer who can help walk my son to the bus stop.",
        postResponse: "",
        upVotes: null,
        downVotes: null
        

    };

    const newPost = Post(postData); //Instance of post model
    //saves instance of post model
    newPost.save((error) => {
        if (error) {
            console.log('Data did not save');
        } else {
            console.log('Post has been saved!');
        }
    })

    //prints all post json data to response
    Post.find({})
        .then((ourdata) => {
            console.log('Data: ', ourdata);
            res.json(ourdata);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
    


});

app.get('/guestgetpost', (req, res) => {
    //prints all post json data to response
    Post.find({})
        .then((ourdata) => {
            console.log('Data: ', ourdata);
             res.json(ourdata);
        })
        .catch((error) => {
            console.log('error: ', error);
        });

});


 app.get('/addresponse', (req, res) =>  {


    const targetPostId = 1;
    const targetPostResponse = 'Yes, this is something I can assist you with.';
    const helperId = 1;
    const helperName = {
        first: 'Patrick',
        last: 'Goldberg'
    };



     Post.updateOne({ postId: targetPostId }, { aidName: helperName, aidId: helperId, postResponse: targetPostResponse }, function (
         err,
         result
     ) {
         if (err) {
             res.send(err);
         } else {
             res.json(result);
         }
     });

});



// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
