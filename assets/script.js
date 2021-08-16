let url = "https://api.openweathermap.org/data/2.5/weather";
let searchBtn = $("#search");
// let mainContainer = $("#mainContainer");

let key = "apikey";
let apikey = "5ff1358d690bc090170fefc4f83ac907";


// on click to generate resulats

searchBtn.click(weatherResults)
const userInput = document.querySelector(".input_text")
//function to call all functions
function weatherResults(e){
    let city = userInput.value;
    console.log(city)
    renderLatLon(city);
};

async function renderLatLon(userInput){

let weatherApi = url + "?q=" + userInput + "&appid=" + apikey;
let res = await fetch(weatherApi)
let data = await res.json()
console.log(data);
};

// Generate cards
// Put info in cards
// stop crying