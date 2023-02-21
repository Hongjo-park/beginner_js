const API_KEY = "fb91a2a4ba006d129aabb3451056a217";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(geoUrl)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const temp = parseInt(data.main.temp - 273.15);
            city.innerText = `  CITY : ${data.name}`;
            weather.innerText = `WEATHER : ${data.weather[0].main} / TEMP : ${temp}`;
        });

}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
