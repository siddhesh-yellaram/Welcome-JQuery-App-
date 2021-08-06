$("document").ready(function () {
    var banner = $("#banner")
    banner.append("<h1>Welcome to Jquery</h1>")
    banner.append("<button id='fadeBtn'>Click to Fade</button>")
    $("h1").css("color", "red")
    $('button').click(function () {
        $("h1").fadeOut(2000);
    })
})

console.log(window.jQuery)
console.log(window.$)
console.log(typeof ($))