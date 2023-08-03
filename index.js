var images = {
    "Sunny": "sunny.png",
    "Clear": "moon.png",
    "Partly cloudy": "partCloudy.png",
    "Cloudy": "cloudy.png",
    "Overcast": "cloudy.png",
    "Mist": "fog.png",
    "Patchy rain possible": "rain.png",
    "Patchy snow possible": "snow.png",
    "Patchy sleet possible": "hail.png",
    "Patchy freezing drizzle possible": "freezeDrizz.png",
    "Thundery outbreaks possible": "thunder.png",
    "Blowing snow": "snow.png",
    "Blizzard": "blizzard.png",
    "Fog": "fog.png",
    "Freezing fog": "fog.png",
    "Patchy light drizzle": "rain.png",
    "Light drizzle": "rain.png",
    "Freezing drizzle": "fog.png",
    "Heavy freezing drizzle": "freezeDrizz.png",
    "Patchy light rain": "rain.png",
    "Light rain": "rain.png",
    "Moderate rain at times": "rain.png",
    "Moderate rain": "rain.png",
    "Heavy rain at times": "rain.png",
    "Heavy rain": "rain.png",
    "Light freezing rain": "rain.png",
    "Moderate or heavy freezing rain": "freezeDrizz.png",
    "Light sleet": "hail.png",
    "Moderate or heavy sleet": "hail.png",
    "Patchy light snow": "snow.png",
    "Light snow": "snow.png",
    "Patchy moderate snow": "snow.png",
    "Moderate snow": "snow.png",
    "Patchy heavy snow": "snow.png",
    "Heavy snow": "snow.png",
    "Ice pellets": "hail.png",
    "Light rain shower": "rain.png",
    "Moderate or heavy rain shower": "rain.png",
    "Torrential rain shower": "rain.png",
    "Light sleet showers": "hail.png",
    "Moderate or heavy sleet showers": "hail.png",
    "Light snow showers": "snow.png",
    "Moderate or heavy snow showers": "snow.png",
    "Light showers of ice pellets": "hail.png",
    "Moderate or heavy showers of ice pellets": "hail.png",
    "Patchy light rain with thunder": "thunder.png",
    "Moderate or heavy rain with thunder": "thunder.png",
    "Patchy light snow with thunder": "thunder.png",
    "Moderate or heavy snow with thunder": "thunder.png"
}

async function getapi(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        show_weather(data);
    }
    catch(err) {
        console.log(err)
    }
}

function show_weather(data) {
    var location = data.location.name;
    var temp = data.current.temp_c;
    var cond = data.current.condition.text;

    document.getElementById("location").innerHTML = location;
    document.getElementById("temp").innerHTML = temp + '&degC';
    document.getElementById("description").innerHTML = cond;
    document.getElementById("status-img").src = './img/' + images[cond];
}

q = 'Warsaw'
url = 'http://api.weatherapi.com/v1/current.json?key=31b839f77ee44650bfb92525230308&q='+q
getapi(url);

