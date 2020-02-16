// require("dotenv").config();
// //var eb_queries = require("../config/eventbrite/eb_queries")
// //var request = require('request');
// const eventbrite_url = "https://www.eventbriteapi.com/v3";
// const eventbrite_token = process.env.EB_TOKEN;
// const eventbrite_body =
// {
//     "Authorization": "Bearer " + eventbrite_token,
//     "Content-Type": "application/json"
// };
// // Eventbrite-API-Waypoint-Token
// let eventbrite_api_waypoint_token;
// let organization_id = process.env.EB_ORG_ID;

// request({
//     method: 'POST',
//     url: 'https://www.eventbriteapi.com/v3/organizations/12345/events/',
//     body: eventbrite_body
// }, function (error, response, body) {
// });


$("#event_submit_btn").on("click", (event)=>{
    event.preventDefault();
    console.log("Submit Event Button clicked")
    //console.log(message_body)
    // $.ajax({
    //     url: "api/register",
    //     method: "POST",
    //     body: eventbrite_body,
    //     data: message_body
    // })
    // .then((result) => {
    //     location.href = "/"
    //     console.log('Status:', response.statusCode);
    //     console.log('Headers:', JSON.stringify(response.headers));
    //     console.log('Response:', body);

    // })
    // .catch((err) => {
    //     console.log(err)
    // })

})