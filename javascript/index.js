function updateTime(){
let sydneyElement = document.querySelector("#sydney");
if (sydneyElement){
let sydneyDateElement =  sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format(" h:mm:ss [<small>]A[</small>]");
}

let bristolElement = document.querySelector("#bristol");
if(bristolElement){
let bristolDateElement = bristolElement.querySelector(".date");
let bristolTimeElement = bristolElement.querySelector(".time");
let bristolTime = moment().tz("Europe/London");
bristolDateElement.innerHTML = moment().format("MMMM Do YYYY");
bristolTimeElement.innerHTML = bristolTime.format(" h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event){
    let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {
     cityTimeZone = moment.tz.guess();
  }
    let cityName = cityTimeZone.replace('_'," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
 `<div class="city">
            <div>
                 <h2> ${cityName}</h2>
                <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss")}<small>
                ${cityTime.format("A")}</small>
             </div>
    </div>`;
               
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);