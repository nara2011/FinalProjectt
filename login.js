let btn = document.getElementById("btn")

btn.addEventListener("click", function () {

    let username = document.getElementById("inputUsername").value

    let inputPassword = document.getElementById("inputPassword").value

    if (username === "nara" && inputPassword == "123") {

        document.querySelector(".alert-success").style.display = "block"

        document.querySelector(".alert-danger").style.display = "none"

        window.location.href = "HomePage.html"
    }


    else {

        document.querySelector(".alert-danger").style.display = "block"
        document.querySelector(".alert-success").style.display = "none"
    }
})