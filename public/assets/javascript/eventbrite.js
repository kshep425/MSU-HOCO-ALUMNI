$(document).ready(() => {

    $("#event_submit_btn").on("click", (event) => {
        event.preventDefault();
        console.log("Submit Event Button clicked")
        let event_info = get_event_info()
        console.log(event_info)
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

    function get_event_info(){
        let event_info = {
            event_name: $("#event_name").val(),
            event_description: $("#event_description").val(),
            event_start: $("#event_start").val(),
            event_end: $("#event_end").val(),
            event_format: $("#event_format").val()
        };
        return event_info;
    };
})