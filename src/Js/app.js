var countDate = new Date("Dec 3, 2020 15:37:25");
var day = document.getElementById("days");
var hour = document.getElementById("hours");
var min = document.getElementById("minu");
var sec = document.getElementById("sec");


var timer = setInterval(function () {
    var current = new Date();

    var final = countDate.getTime() - current.getTime();


    var days = Math.floor(final / (1000 * 60 * 60 * 24));
    var hours = Math.round((final % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuites = Math.floor((final % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((final % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minuites;
    sec.innerHTML = seconds;

    if (final < 0) {
        clearInterval(timer);
        day.innerHTML = "00";
        hour.innerHTML = "00";
        min.innerHTML = "00";
        sec.innerHTML = "00";
    }
}, 1000);