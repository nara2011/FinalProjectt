let users = [
    {
        nameOfUser: "Cahid",
        password: "123",
        email:"cahid@email.com"
    },
    {
        nameOfUser: "Nara",
        password: "123",
           email:"nara@email.com"
    },
    {
        nameOfUser: "Sabir",
        password: "123",
           email:"sabir@email.com"
    },
    {
        nameOfUser: "Umud",
        password: "123",
           email:"umud@email.com"
    },
]

let signInBtn = $("#signInBtn")

signInBtn.click(function (){
    let nameOfUser = $("#name").val()
    let password = $("#password").val()
    let email = $("#email").val()

    users.forEach(user => {
        if(user.nameOfUser === email && user.password === password){
            alert("Correct Password")
            userFound = true
        }
    })
})

$("#email").change(function () {
    if ($("#email").val().length === 0) {
        $("#email").removeClass("is-valid")
        $("#email").addClass("is-invalid")
    } else {
        $("#email").removeClass("is-invalid")
        $("#email").addClass("is-valid")
    }
})

$("#password").change(function () {
    if ($("#password").val().length == 0) {
        $("#password").removeClass("is-valid")
        $("#password").addClass("is-invalid")
    } else {
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
    }
})

$("#name").change(function () {
    if ($("#name").val().length === 0) {
        $("#name").removeClass("is-valid")
        $("#name").addClass("is-invalid")
    } else {
        $("#name").removeClass("is-invalid")
        $("#name").addClass("is-valid")
    }
})

$("#surname").change(function () {
    if ($("#surname").val().length == 0) {
        $("#surname").removeClass("is-valid")
        $("#surname").addClass("is-invalid")
    } else {
        $("#surname").removeClass("is-invalid")
        $("#surname").addClass("is-valid")
    }
})

$("#Confirmpassword").change(function () {
    if ($("#Confirmpassword").val().length === 0) {
        $("#Confirmpassword").removeClass("is-valid")
        $("Confirmpassword").addClass("is-invalid")
    } else {
        $("#Confirmpassword").removeClass("is-invalid")
        $("#Confirmpassword").addClass("is-valid")
    }
})
