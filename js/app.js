const form = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="cityName"]')
const weather = document.querySelector('[data-js="weather"]')
const degrees = document.querySelector('[data-js="degrees"]')
const imgIcon = document.querySelector('[data-js="time-icon"]')
const img = document.querySelector('[data-js="time"]')
const card = document.querySelector('[data-js="city-card"]')


form.addEventListener('submit', async event =>{
    event.preventDefault()
    const inputValue = event.target.city.value
    if(!inputValue.trim()) return 

    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{WeatherText, Temperature, WeatherIcon, IsDayTime}] = await getCityWeather(Key)

    if(card.classList.contains('d-none')){
        console.log('ola');
        card.classList.remove('d-none')
    }

    setDataIntoDOM(cityName,LocalizedName)
    setDataIntoDOM(weather,WeatherText)
    setDataIntoDOM(degrees,Temperature.Metric.Value)
    setIconIntoDOM(imgIcon, WeatherIcon)
    setImgIntoDOM(img, IsDayTime)
})

const setDataIntoDOM = (element,data) => {
    element.innerHTML = data
}

const setIconIntoDOM = (element,icon) => {
    element.innerHTML = `<img src="../src/icons/${icon}.svg"/>`
}

const setImgIntoDOM = (element, IsDayTime) => {
    const img = IsDayTime ? 'day' : 'night'
    element.setAttribute('src', `../src/${img}.svg`)

}