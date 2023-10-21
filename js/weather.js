const APIkey = 'LjmHjtjBqVlrGd9LAvoMbFyjw4m3AcSC'
const domainAccuweather = `http://dataservice.accuweather.com/`


const getCityUrl = value => `${domainAccuweather}locations/v1/cities/search?apikey=${APIkey}&q=${value}`
const getWeatherUrl = value => `${domainAccuweather}currentconditions/v1/${value}?apikey=${APIkey}&language=pt-br`

const getCityData = city => requestAPIWeather(getCityUrl(city))
const getCityWeather = key => requestAPIWeather(getWeatherUrl(key))


const requestAPIWeather = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Impossivel fazer request')
        }
        return response.json()

    } catch (error) {
        console.log(error.message);
    }
}