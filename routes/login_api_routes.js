const db_queries = require("../config/db_queries")
const passport = require("../config/passport");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.status(200)
            .json({ username: req.user.username, full_name: req.user.full_name });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/register", function (req, res) {
        db_queries.create_member(req.body)
            .then(function (member_response) {
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
