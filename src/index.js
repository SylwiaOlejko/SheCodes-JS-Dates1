//Challenge 1
let currentTime = new Date();
console.log(currentTime);
//Challenge 2

console.log(currentTime.getMilliseconds());

//Challenge 3

console.log(currentTime.getDay());

//Challenge 4

console.log(currentTime.getFullYear());

//Challenge 5

console.log(currentTime.getMonth());

//Challenge 6/7
function Date(date){

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let currentMonth = months[date.getMonth()];
let currentDay = days[date.getDay()];
let currentYear = now.getFullYear();
let currentDate = date.getDate();



 let formatDate = `Today is , ${currentDay}  ${currentMonth} ${currentDate}, ${currentYear}`;

 return formatDate;
}

console.log(Date(currentTime));
