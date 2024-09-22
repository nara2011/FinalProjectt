let users = JSON.parse(localStorage.getItem("users")) || []

let loginBtn = document.getElementById("loginBtn")


console.log(users);

loginBtn.addEventListener("click", function () {
    let emailInput = document.getElementById("emailInput")
    let passwordInput = document.getElementById("passwordInput")
    users.forEach(user => {
        if (user.email === emailInput.vaue && user.password === passwordInput.value) {
            alert("Вы зашли успешно")
            window.location.href="../homePage2/index.html"
        } 
    });
})