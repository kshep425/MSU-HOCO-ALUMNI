// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const session = require("express-session")
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Requiring dotenv for syncing variable
require("dotenv").config();

// Sets up the Express App
// =============================================================

// Setting up port
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
//const api_routes = require("./routes/api_routes")
//app.use(api_routes);

require("./routes/login_api_routes")(app)
require("./routes/html_routes")(app)
require("./routes/event_routes")(app)

// Syncing our sequelize models and then starting our Express app
// =============================================================
const sync = JSON.parse(process.env.DB_SYNC) || true
db.sequelize.sync({ force: sync}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;