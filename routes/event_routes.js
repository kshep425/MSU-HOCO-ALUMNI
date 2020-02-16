require("dotenv").config();
var eb_queries = require("../config/eventbrite/eb_queries")
var request = require('request');
const eventbrite_url = "https://www.eventbriteapi.com/v3";
const eventbrite_token = process.env.EB_TOKEN;
const eventbrite_body =
{
    "Authorization": "Bearer " + process.env.EB_TOKEN,
    "Content-Type": "application/json"
};
// Eventbrite-API-Waypoint-Token
let eventbrite_api_waypoint_token;


// request({
//   method: 'POST',
//   url: 'https://www.eventbriteapi.com/v3/organizations/12345/events/',
//   body: eventbrite_body
// }, function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// });

module.exports = function (app) {

    // create event
    app.post("/api/submit_event", function (req, res) {
        console.log("Submit Event")
        console.log(req.body)
        console.log(req.user)
        res.send("Event submitted")
    })


    // get event by id
    app.get(eventbrite_url + "/series/:event_id/")


    app.post("https://private-anon-8bd13675e1-eventbriteapiv3public.apiary-mock.com/v3/organizations/organization_id/events/")

    // update event

    // cancel event


    // delete event

    // list events by organization id

    // retrieve formats

    // list formats

    // retrieve media

    // upload media

    // retrieve media upload

    // Order operations

    // GET Retrieve an Order by Order ID.

    // GET List Orders by Event ID. Returns a paginated response.

    // GET List Orders by User ID. Returns a paginated response.

    // Retrieve Ticket Buyer Settings by Event ID.

    // Update Ticket Buyer Settings by Event ID.

    // Retrive ticket class

    // Create ticket class

    // Update ticket class

    // Remove ticket class

    // Retrieve ticket group
    // Create ticket group
    // Update ticket group
    // Delete ticket group

    // Create Venue
    // Retrieve Venue
    // Update Venue
    // Delete Venue
}