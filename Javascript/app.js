function showTime() {
    var date = new Date;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var d = date.getDate();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var meridiem = "AM";

    // Set Hours Meridiem
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (hour > 12) {
        hour = hour - 12;
        meridiem = "PM";
    }
    if (hour === 0) {
        hour = 12;
    }

    // Set Day
    if (day === 0)
        day = "Sunday";
    else if (day == 1)
        day = "Monday";
    else if (day == 2)
        day = "Tuesday";
    else if (day == 3)
        day = "Wednesday";
    else if (day == 4)
        day = "Thursday";
    else if (day == 5)
        day = "Friday";
    else if (day == 6)
        day = "Saturday";

    // Set Month
    if (month === 0)
        month = "JAN";
    else if (month == 1)
        month = "FEB";
    else if (month == 2)
        month = "MAR";
    else if (month == 3)
        month = "APR";
    else if (month == 4)
        month = "MAY";
    else if (month == 5)
        month = "JUN";
    else if (month == 6)
        month = "JUL";
    else if (month == 7)
        month = "AUG";
    else if (month == 8)
        month = "SEP";
    else if (month == 9)
        month = "OCT";
    else if (month == 10)
        month = "NOV";
    else if (month == 11)
        month = "DEC";

    // Get Element By Id
    var clock = document.getElementById('clock');
    var dateDiv = document.getElementById('date');
    var monthDiv = document.getElementById('month');
    var yearDiv = document.getElementById('year');
    var dayDiv = document.getElementById('day');

    // Set Time Format
    clock.innerText = hour + " : " + minutes + " : " + second + " " + meridiem;
    monthDiv.innerText = month;
    yearDiv.innerText = year;
    dateDiv.innerText = d;
    dayDiv.innerText = day;
}
showTime();
setInterval(showTime, 1000);