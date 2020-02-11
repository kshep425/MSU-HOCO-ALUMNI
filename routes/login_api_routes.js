// Requiring our models and passport as we've configured it
const express = require("express");
const app = express();
const db_queries = require("../config/db_queries")
const passport = require("../config/passport");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
module.exports = function(app){

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
                res.json(req.user.username, req.user.full_name);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db_queries.create_member(req.body)
        .then(function(member_response){
            console.log(member_response)
        })
        .then(function () {
            res.redirect(307, "/api/login");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
    });

    // Route for logging user out
    app.get("/api/logout", function (req, res) {
        req.logout();
        res.send("You have logged out")
        //res.redirect(307, "/api/login");
    });

}