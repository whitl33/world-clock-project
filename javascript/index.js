function updateTime(){
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement =  sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format(" h:mm:ss [<small>]A[</small>]");


let bristolElement = document.querySelector("#bristol");
let bristolDateElement = bristolElement.querySelector(".date");
let bristolTimeElement = bristolElement.querySelector(".time");
let bristolTime = moment().tz("Europe/London");
bristolDateElement.innerHTML = moment().format("MMMM Do YYYY");
bristolTimeElement.innerHTML = bristolTime.format(" h:mm:ss [<small>]A[</small>]");

}
updateTime();
setInterval(updateTime, 1000);

