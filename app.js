var CountDownDate = new Date("September 25,2022 16:37:52").getTime();
console.log(CountDownDate);

var myFunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = CountDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / (1000));
    document.querySelector('.day').innerHTML = days;
    document.querySelector('.hour').innerHTML = hours;
    document.querySelector('.minute').innerHTML = minutes;
    document.querySelector('.second').innerHTML = seconds;
}, 1000);