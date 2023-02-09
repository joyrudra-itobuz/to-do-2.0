var currentdate = new Date();

let date = "" + currentdate.getDay();
let month = "" + currentdate.getMonth();
let year = "" + currentdate.getFullYear();
let hours = "" + currentdate.getHours();
let mins = "" + currentdate.getMinutes();
let secs = "" + currentdate.getSeconds();

let dateNow = "";
dateNow += date + month + year + hours + mins + secs;
console.log(dateNow);
