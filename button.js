$("#addBtn").click(function () {
    $("#myUl").append("<li class='myLists'></li>");
    $(".myLists").html(
        "<p>New List</p>" + "<button class='myDeleteButtons'>Delete</button>"
    );
    document.querySelectorAll(".myDeleteButtons").forEach(element => {
        element.addEventListener("click", function () {
            element.parentElement.remove();
            console.log(element.parentElement);
        });
    });
});