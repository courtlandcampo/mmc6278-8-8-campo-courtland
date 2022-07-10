var form = document.querySelector('form')
var input = document.querySelector('input')
var weather = document.querySelector('#weather')

//weather error message
var notFound = document.createElement("h2")
notFound.textContent = "Location not found"

form.onsubmit = function(e){
    e.preventDefault()
    var userInput = input.value
    if (!userInput) {
        return
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=5e8fb7436a0e6f1c8b62aad1d8797764&q=' + userInput)
    
    .then(function(j) {
        return j.json()
    })

    .then(function(r){
        weatherResult(r)
    })

    .catch(function(err){
        weather.appendChild(notFound)
    })

    input.value = ""
}

function weatherResult(weatherObject) {
    weather.innerHTML = ""

    var br = document.createElement('br')


    // CITY NAME
    var cityName = document.createElement('h2')
    cityName.textContent = weatherObject.name + ", " + weatherObject.sys.country
    weather.appendChild(cityName)

    // MAP LINK
    var mapLink = document.createElement('a')
    var lat = weatherObject.coord.lat
    var long = weatherObject.coord.lon
    mapLink.href = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long
    mapLink.target = "_blank"
    mapLink.textContent = "Click to View Map"
    weather.appendChild(mapLink)

    //IMAGE ICON 
    var img = document.createElement('img')
    img.src = "http://openweathermap.org/img/wn/" + weatherObject.weather[0].icon + "@2x.png"
    
    weather.appendChild(img)
    weather.appendChild(br)

    // DESCRIPTION 
    var description = document.createElement('p')
    description.textContent =  weatherObject.weather[0].description
    img.alt = description.textContent
    
    weather.appendChild(description)
    weather.appendChild(br)

    // CURRENT TEMP 
    var temperature = document.createElement('p')
    temperature.textContent = "Current: " + weatherObject.main.temp + '\u00B0 F'
    weather.appendChild(temperature)


    // FEELS LIKE TEMP
    var feelsLike = document.createElement('p')
    feelsLike.textContent = "Feels Like: " + weatherObject.main.feels_like + '\u00B0 F'
    weather.appendChild(feelsLike)
    weather.appendChild(br)

    // LAST UPDATED TIME
    var lastUpdated = document.createElement('p')
    var date = new Date(weatherObject.dt * 1000)
    var timeString = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    })
    lastUpdated.textContent = "Last Updated: " + timeString
    weather.append(lastUpdated)
}












//////////////////////////////////////
/*let form = document.querySelector('form');
let input = document.querySelector('input');
let weather = document.getElementById('weather');




form.onsubmit = function(functionEvent) {
  functionEvent.preventDefault()
  var usersInput = input.value
  if(!usersInput) return
  fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=5e8fb7436a0e6f1c8b62aad1d8797764&q=' + usersInput)
  .then(function(resultJson) {
      return resultJson.json();
  })


  .then(function(result){
    weatherResult(result)
    input.value = "";
  })


  .catch(function(error) {
    console.log(error);
    document.getElementById('weather').innerHTML = "<p>Location not found.</p>"
  })
}


function weatherResult(weatherObject) {
  weather.innerHTML = "";

//LOCATION NOT FOUND 
if (weatherObject.Response === 'False') {
    weather.textContent = 'Location not found';
    return
}


var cityName = document.createElement('h2');
cityName.textContent = weatherObject.name + ", " + weatherObject.sys.country;
weather.appendChild(cityName);



var description = document.createElement('h3');
description.textContent = "Current Weather: " + weatherObject.weather[0].description;
weather.appendChild(description);



var img = document.createElement('img');
img.src = "http://openweathermap.org/img/wn/" + weatherObject.weather[0].icon + "@2x.png";
weather.appendChild(img);


var temperature = document.createElement('h3');
temperature.textContent = "Current: " + weatherObject.main.temp + " \xB0";
weather.appendChild(temperature);



var feelsLike = document.createElement('h3');
feelsLike.textContent = "Feels Like : " + weatherObject.main.feels_like + " \xB0";
weather.appendChild(feelsLike)
}*/
