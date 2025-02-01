let url="https://api.openweathermap.org/data/2.5/weather?&units=metric";
let apikey="&appid=ef873d489d82e5f125d7df55db478270";

let displayCity=document.querySelector(".city-name");
let temperature=document.querySelector(".temp");
let humidty=document.querySelector("#humidity");
let wind=document.querySelector("#wind-speed");

let searchBtn=document.querySelector(".material-symbols-outlined");

let hide=document.querySelector(".weather");
hide.classList.add("hide");
let container=document.querySelector(".container");
let weatherContainer=document.querySelector(".weather");

searchBtn.addEventListener("click",()=>{
    let input=document.querySelector("#search-city");
    let city="&q=";
    city+=input.value;

    async function checkweather(){
        try{
            const response= await fetch(url+city+apikey);
            const weather=await response.json();

            displayCity.innerHTML=`${weather.name}`;
            temperature.innerHTML=`${Math.round(weather.main.temp)} °C`;
            humidity.innerHTML=`${weather.main.humidity}%`;
            wind.innerHTML=`${weather.wind.speed}km/h`;
        }    
        catch(e){
            weatherContainer.innerHTML="INVALID CITY";
            console.log("404 not found!");
        };
    };
    
    checkweather();
    hide.classList.remove("hide");

});