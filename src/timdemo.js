var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330; // IST offset UTC +5:30

var ISTTime = new Date(
  currentTime.getTime() + (ISTOffset + currentOffset) * 60000
);

// ISTTime now represents the time in IST coordinates
var yearIST = ISTTime.getFullYear();
var monthIST = ISTTime.getMonth() + 1;
if (monthIST < 10) {
  monthIST = "0" + monthIST;
}
var dayIST = ISTTime.getDay() - 1;
if (dayIST < 10) {
  dayIST = "0" + dayIST;
}
var hoursIST = ISTTime.getHours();
if (hoursIST < 10) {
  hoursIST = "0" + hoursIST;
}
var minutesIST = ISTTime.getMinutes();
if (minutesIST < 10) {
  minutesIST = "0" + minutesIST;
}
var secondsIST = ISTTime.getSeconds();
if (secondsIST < 10) {
  secondsIST = "0" + secondsIST;
}

console.log(
  yearIST +
    "-" +
    monthIST +
    "-" +
    dayIST +
    "T" +
    hoursIST +
    ":" +
    minutesIST +
    ":" +
    secondsIST.toFixed(3) +
    "Z"
);
