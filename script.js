const apiKey = "3564f1a5424f388c3a748922aedd06d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon =  document.querySelector(".weather-icon");

async function checkweather(city){
    const response  = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/Hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "img/snow.png";
    }
}


searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
