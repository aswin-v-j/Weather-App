const apiKey = "cff8a65e5f1bd024c651b3a1e9652cd4";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbutton = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {

    const response = await fetch(apiurl+city+`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";
    }
    else{
        var data = await response.json();
    }
    
    
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed +" Km/h";
    // searchBox.innerHTML = "";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="./images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="./images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="./images/drizzle.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";
}
searchbutton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    
},false);


