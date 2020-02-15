$(document).ready(()=>{
    $("#register_btn").on("click", function(event){
      event.preventDefault()
      const member_obj = {
          username:$("#username").val(),
          password: $("#password").val(),
          full_name:$("#full_name").val(),
          email: $("#email").val()
      }
      register_member(member_obj)
      $("h1").text("Registration Submitted")
    })

    function register_member (message_body){
        console.log(member_obj)
        $.ajax({url: "api/register", method: "POST", data: message_body})
        .then((result)=>{
            location.href="/"
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    $("#login_btn").on("click", function(event){
        event.preventDefault()
        const member_obj = {
            username:$("#username").val(),
            password: $("#password").val(),
        }
        login(member_obj)
        $("h1").text("You are logged in")
      })

      function login(member_obj){
        $.ajax({url: "/api/login", method: "POST", data: member_obj})
        .then((result)=>{
            location.href="/"

        }).then(()=>{
            $("h1").text("You are logged in!")
            $("p").text(result)
        })
        .catch((err)=>{
            console.log(err)
        })
      }

      $("#logout_btn").on("click", function(event){
        event.preventDefault()
        $.ajax({url: "/api/logout", method: "GET"})
        .then(result => console.log(result))
        .catch((err)=>{
            console.log(err)
        })
      })
})