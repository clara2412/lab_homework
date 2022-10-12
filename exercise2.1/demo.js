var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand;
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
(hour >=12)? prepand = "PM" : prepand = "AM";
console.log("Today is:", dayList[day]);
console.log("Current time:",hour, prepand, ":", minute, ":", second);


