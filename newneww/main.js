let users = [
    {
        nameOfUser: "Cahid",
        password: "123",
    },
    {
        nameOfUser: "Nara",
        password: "123",
    },
    {
        nameOfUser: "Sabir",
        password: "123",
    },
    {
        nameOfUser: "Umud",
        password: "123",
    },
]

let signInBtn = $("#signInBtn")

signInBtn.click(function () {
    let email = $("#email").val()
    let password = $("#password").val()

    users.forEach(user => {
        if (user.nameOfUser === email && user.password === password) {
            alert("Correct Password")
            userFound = true
        }
    })
})

console.log();


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
    if ($("#email").val().length == 0) {
        $("#password").removeClass("is-valid")
        $("#password").addClass("is-invalid")
    } else {
        $("#password").removeClass("is-invalid")
        $("#password").addClass("is-valid")
    }
})