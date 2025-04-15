var MonthNames = ['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
var DayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


setInterval(function () {
    var currentDate = new Date();
    var clockSec = document.getElementById("sec");
    var clockMin = document.getElementById("min");
    var clockHr = document.getElementById("hr");
    var clockDay = document.getElementById("day");
    var clockDate = document.getElementById("date");
    var clockMonth = document.getElementById("month");
    var clockAm = document.getElementById("am");

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    if (hours > 12) {
        hours = hours - 12
    }
    else if (hours == 0) {
        hours = 12
    }
    else {

        hours = hours;
    }



    if (hours < 10) {
        hours = "0" + hours;
    }


    if (minutes < 10) {
        minutes = "0" + minutes;
    }


    if (second < 10) {
        second = "0" + second;
    }




    clockSec.innerText = second;
    clockMin.innerText = minutes + ':';
    clockHr.innerText = hours + ':';
    clockDay.innerText = DayNames[currentDate.getDay()];
    clockDate.innerText = currentDate.getDate();
    clockMonth.innerText = MonthNames[currentDate.getMonth()];

    let totalHourse = new Date().getHours();

    if (totalHourse > 12) {
        clockAm.innerText = "pm"
    }
    else if(totalHourse < 12){
        clockAm.innerText = "am"
    }else{
        clockAm.innerText = "pm"
    }

}, 1000)









