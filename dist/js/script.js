function getWeatherData() {
    const api_key = "ad0e820e032a459cb6b103742232006";
    const location = document.getElementById('locationInput').value;
    const url = "https://api.weatherapi.com/v1/forecast.json?key=" + api_key + "&q=" + location + "&days=1&aqi=no&alerts=no";
    const config = {method: "GET"};

    fetch(url, config)
    .then(response => response.json())
    .then(result => {
        displayWeatherData(result);
    })
    .catch(result => console.log(result));
}

function displayWeatherData(data) {
    const country = data.location.country;
    const latitude = data.location.lat;
    const longitude = data.location.lon;
    const timezone = data.location.tz_id;

    const temp_c = data.current.temp_c;
    const temp_f = data.current.temp_f;

    const condition = data.current.condition.text;
    const condition_photo = data.current.condition.icon;

    const humidity = data.current.humidity;

    const sunrise = data.forecast.forecastday[0].astro.sunrise;
    const sunset = data.forecast.forecastday[0].astro.sunset;

    var content = '<h4 class="mt-5">Weather Result</h4>';
    content += '<table class="table table-bordered table-sm border border-secondary">';
    content += '<tr><td class="bg-body-secondary">Weather:</td><td><img src="' + condition_photo + '"></td></tr>';
    content += '<tr><td class="bg-body-secondary">Condition:</td><td>' + condition + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Country:</td><td>' + country + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Latitude:</td><td>' + latitude + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Longitude:</td><td>' + longitude + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Time Zone:</td><td>' + timezone + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Temperature (Celsius):</td><td>' + temp_c + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Temperature (Fahrenheit):</td><td>' + temp_f + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Humidity:</td><td>' + humidity + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Sunrise:</td><td>' + sunrise + '</td></tr>';
    content += '<tr><td class="bg-body-secondary">Sunset:</td><td>' + sunset + '</td></tr>';
    content += '</table>';

    document.getElementById("weatherResult").innerHTML = content;
}
