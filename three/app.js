const express = require('express');
const app = express();
const controller = require('./controller/AppController');


//Middleware
const Logger = (req, res, next) => {
    console.log("Request Received for query: ", req.query.q);
    next();
};

// Main Function
const searchForMovies = (req, res) => {
    const query = req.query.q || "";
    (new controller).fetch(query)
    .then(result => {
        res.status(200).send({status: true, data: result.data});
    }).catch(err => {
        console.log("Error:", err);
        res.status(200).send({status: false, message: "No data found"});
    });

};

// Routing
app.get(
    '/search',
    Logger,
    searchForMovies
);


// Running the application
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log('App Server listening on port: ', PORT);
});
