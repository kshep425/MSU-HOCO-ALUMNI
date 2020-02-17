$(document).ready(()=>{

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

        function get_event_info() {
            let event_info = {
                event_name: $("#event_name").val(),
                event_description: $("#event_description").val(),
                event_start: get_event_time($("#event_start").val()),
                event_end: get_event_time($("#event_end").val()),
                event_format: $("#event_format").val()
            };
            return event_info;
        };

        function get_event_time(local_time) {
            return {
                utc: "",
                timezone: "",
                local: local_time
            }
        }
    })
})
