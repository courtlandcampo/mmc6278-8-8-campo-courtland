var form = document.querySelector('form')
var input = document.querySelector('input')
var weather = document.querySelector('#weather')

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
    input.value = ""
})

.catch(function(err){
    console.log(error)
    document.getElementById('weather').textContent = "Location not found"
})
}

function weatherResult(weatherO) {
    weather.innerHTML = ""
}

