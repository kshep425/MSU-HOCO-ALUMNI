$(document).ready(() => {
    $("#register_btn").on("click", function (event) {
        event.preventDefault()
        const member_obj = {
            username: $("#username").val(),
            password: $("#password").val(),
            full_name: $("#full_name").val(),
            email: $("#email").val(),
            degree: [
                {
                    degree: $("#gradMajor1").val(),
                    year: $("#gradYear1").val()
                },
                {
                    degree: $("#gradMajor2").val(),
                    year: $("#gradYear2").val()
                },
                {
                    degree: $("#gradMajor3").val(),
                    year: $("#gradYear3").val()
                },
            ],
            street_address_1: $("#inputAddress").val(),
            street_address_2: $("#inputAddress2").val(),
            city: $("#inputCity").val(),
            state: $("#inputState option:selected").attr("value"),
            zip: $("#inputZip").val(),
            occupation: $("#inputOccupation").val(),
            member_type: $("input[name=member_type]:checked").attr("value"),
            member_marital_status: $("input[name=member_type]:checked").data("marital_status"),
            phone: $("#inputPhone").val(),
            prefix: $().val(),
            suffix: $().val()
        }
        register_member(member_obj)
        $("h1").text("Registration Submitted")
    })

    function register_member(message_body) {
        console.log(message_body)
        $.ajax({ url: "api/register", method: "POST", data: message_body })
            .then((result) => {
                location.href = "/"
            })
            .catch((err) => {
                console.log(err)
            })
    }

    $("#login_btn").on("click", function (event) {
        event.preventDefault()
        const member_obj = {
            username: $("#username").val(),
            password: $("#password").val(),
        }
        login(member_obj)
        $("h1").text("You are logged in")
    })

    function login(member_obj) {
        $.ajax({ url: "/api/login", method: "POST", data: member_obj })
            .then((result) => {
                location.href = "/"

            }).then(() => {
                $("h1").text("You are logged in!")
                $("p").text(result)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    $("#logout_btn").on("click", function (event) {
        event.preventDefault()
        $.ajax({ url: "/api/logout", method: "GET" })
            .then(result => console.log(result))
            .catch((err) => {
                console.log(err)
            })
    })

    $(function () {
        $('#datetimepicker1').datetimepicker();
    });

    $(function () {
        $('#datetimepicker3').datetimepicker({
            format: 'LT'
        });
    });
})
