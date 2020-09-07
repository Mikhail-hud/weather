const api = {
    key: "ab5b268021d53faf4ba9e2f43f821a19",
    base: "https://api.openweathermap.org/data/2.5/"
}
  
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress','touchstart', search);

function search () {
    let int = searchbox.value;
    fetch(`${api.base}weather?q=${int}&appid=${api.key}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city').textContent = `${data.name}, ${data.sys.country}`;
            document.querySelector('.date').innerHTML = dateBuilder(now);
            document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)} &deg c`;
            document.querySelector('.tempfeel').innerHTML = `feels like ${Math.round(data.main.feels_like - 273)} &deg c`;
            document.querySelector('.weather').innerHTML = data.weather[0].description;
            document.querySelector('.status').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        })
        .catch(function () {
        });
}

var now = new Date();

function dateBuilder (d) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
      
    return `${day} ${date} ${month} ${year}`;
}


