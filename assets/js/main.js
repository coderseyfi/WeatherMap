//672fbee1c5a0cd0266c5dbab9753f661
let inpVal = document.querySelector('.search-inp')
let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchVal = inpVal.value
    if (searchVal != '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=672fbee1c5a0cd0266c5dbab9753f661`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                weatherInfo(data)

            })
            .catch((error) => console.log(error))
    }
})

const now = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString('az-AZ', options);
const dateElement = document.querySelector('.date');
dateElement.innerHTML = formattedDate;

function weatherInfo(data) {

    //destructring
    const {
        main: { humidity, pressure, temp },
        wind: { deg, speed },
        sys: { country, sunset, sunrise },
        weather: {
            0: {
                description,
                icon
            }
        }
    } = data



    let location = document.querySelector('.location-s')
    let ctry = document.querySelector('.country')
    let degree = document.querySelector('.degree')
    let wet = document.querySelector('.wet')
    let vis = document.querySelector('.visibility')
    let humidityY = document.querySelector('.humidity')
    let pressureW = document.querySelector('.pressure')
    let windSpeed = document.querySelector('.wind-speed')
    let gusts = document.querySelector('.gust')
    let sunsets = document.querySelector('.sunset')
    let sunrises = document.querySelector('.sunrise')
    let degs = document.querySelector('.deg')
    let iconElement = document.getElementById('sun-ico');

    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    iconElement.src = iconUrl;
    iconElement.alt = 'Weather Icon';

    console.log(iconElement)


    location.innerHTML = `${data.name}`
    ctry.innerHTML = `/${country}`

    wet.innerHTML = ` ${description}`
   
    vis.innerHTML = `Visibility: ${data.visibility / 1000}km`
    humidityY.innerHTML = `Humidity: ${humidity}%`
    pressureW.innerHTML = `Pressure: ${pressure}hPa`
    windSpeed.innerHTML = `Wind: ${speed}km/hr`
    gusts.innerHTML = `Timezone: ${data.timezone}`
    sunsets.innerHTML = `Sunset: ${sunset}`
    sunrises.innerHTML = `Sunrise: ${sunrise}`
    degs.innerHTML = `Deg: ${deg}`
    degree.innerHTML = `Temp: ${Math.floor(temp - 273.15)}<sup>o</sup>`

    inpVal.value = ''
}






