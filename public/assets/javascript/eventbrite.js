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

<<<<<<< HEAD
// request({
//     method: 'POST',
//     url: 'https://www.eventbriteapi.com/v3/organizations/12345/events/',
//     body: eventbrite_body
// }, function (error, response, body) {
// });

=======
    $("#event_submit_btn").on("click", (event) => {
        event.preventDefault();
        console.log("Submit Event Button clicked")
        let event_info = get_event_info()
        console.log(event_info)
        $.ajax({
             url: "/api/submit_event",
             method: "POST",
             data: event_info,
        })
        .then((result) => {
             location.href = "/"
             console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
>>>>>>> 4d24e1e4d6fcf3198f794e076dcf157dc564b2ae

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

<<<<<<< HEAD
    // })
    // .catch((err) => {
    //     console.log(err)
    // })

})

            function get_event_info(){
                let event_info = {
                    event_name: $("#event_name").val(),
                    event_description: $("#event_description").val(),
                    event_start: $("#event_start").val(),
                    event_end: $("#event_end").val(),
                    event_format: $("#event_format").val()
                };
                return event_info;
}
=======
    function get_event_info(){
        let event_info = {
            event_name: $("#event_name").val(),
            event_description: $("#event_description").val(),
            event_start: get_event_time($("#event_start").val()),
            event_end: get_event_time($("#event_end").val()),
            event_format: $("#event_format").val()
        };
        return event_info;
    };

    function get_event_time(local_time){
        return {
            utc: "",
            timezone: "",
            local: local_time
        }
    }
})
>>>>>>> 4d24e1e4d6fcf3198f794e076dcf157dc564b2ae
