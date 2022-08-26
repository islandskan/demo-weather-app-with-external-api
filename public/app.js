// VARIABLES DOM ELEMENTS
const dateEl = document.querySelector('#date');
const locationEl = document.querySelector('#location');

const iconEl = document.querySelector('#icon');
const temperatureEl = document.querySelector('#temperature');
const infoEl = document.querySelector('#info');
const cardEl = document.querySelector('.card');

// INITIAL VALUES
dateEl.textContent = '';
locationEl.textContent = '';
iconEl.textContent = '';
temperatureEl.textContent = '';
infoEl.textContent = '';
let weekday;
let currentMonth;
let currentDay;

// TIME VALUES

function getDate() {
    const d = new Date();
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const monthsOfYear = [
        'January',
        'Febuary',
        'Mars',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    weekday = daysOfWeek[d.getDay()];
    currentMonth = monthsOfYear[d.getMonth()];
    currentDay = d.getDate();
    dateEl.textContent = `${currentMonth} ${currentDay}, ${weekday}`;
}

// how to access the latitude and longitude and how to pass them as arguments into the url

async function getWeather(lat, lon) {
    const url = `/api?lat=${lat}&lon=${lon}`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
}

function displayWeather(data) {
    getDate();
    const weather = data.data[0];
    console.log(weather);
    locationEl.textContent = `${weather.city_name}, ${weather.country_code}`;
    temperatureEl.textContent = `${weather.app_temp}°C`;
    infoEl.textContent = `${weather.weather.description}`;
    setWeatherIcon(`${weather.weather.code}`);
}

function setWeatherIcon(data) {
    switch (data) {
        case '200':
        case '201':
        case '202':
        case '230':
        case '231':
        case '231':
        case '232':
        case '233':
            iconEl.textContent = 'thunderstorm';
            break;
        case '300':
        case '301':
        case '302':
        case '500':
        case '501':
        case '502':
        case '511':
        case '520':
        case '521':
        case '522':
            iconEl.textContent = 'rainy';
            break;
        case '600':
        case '601':
        case '602':
        case '610':
        case '611':
        case '612':
        case '621':
        case '622':
        case '623':
            iconEl.textContent = 'weather_snowy';
            break;
        case '700':
        case '711':
        case '721':
        case '731':
        case '741':
        case '751':
            iconEl.textContent = 'foggy';
            break;
        case '800':
            iconEl.textContent = 'clear_day';
            break;
        case '801':
        case '802':
            iconEl.textContent = 'partly_cloudy_day';
            break;
        case '803':
        case '804':
            iconEl.textContent = 'cloudy';
            break;
        case '900':
        default:
            iconEl.textContent = 'question_mark';
    }
}

function setBgColor(t) {
    let hour = t.getHours();
    console.log(hour);
    console.log(cardEl.className);
    switch (hour) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 22:
        case 23:
        default:
            cardEl.className += ' night';
            console.log(cardEl.className);
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            cardEl.className += ' morning';
            console.log(cardEl.className);
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            cardEl.className += ' daylight';
            console.log(cardEl.className);
            break;
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            cardEl.className += ' evening';
            console.log(cardEl.className);
            break;
    }
}

// CALL THE FUNCTIONS WHEN THE PAGE LOADS
window.addEventListener('load', () => {
    let latitude;
    let longitude;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            getWeather(latitude, longitude);
        });
    }
    cardEl.classList.add('fadeIn');
    const currentHour = new Date();
    setBgColor(currentHour);
});
