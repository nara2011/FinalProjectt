$("#animateBtn").click(function () {
    $("#myCar").animate({ left: "1680px" }, "slow")
    setTimeout(() => {
        $("#myCar2").css("display", "block")
        setTimeout(() => {
            $("#myCar2").animate({ left: "1680px" }, "slow")
        }, 2000);
    }, 1000);
});