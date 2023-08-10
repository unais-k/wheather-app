import { DateTime } from "luxon";

const REACT_APP_API_KEY = "dcf168d54c4e3337bec149529a0e757e";
const REACT_APP_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (infoType, searchParams) => {
    // console.log(infoType, searchParams);
    const url = new URL(REACT_APP_BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: REACT_APP_API_KEY });
    return fetch(url).then((res) => res.json());
    // .then((data) => data);
};

export const FormatCurrentWeather = (data) => {
    if (data.coord) {
        const {
            coord: { lat, lon },
            main: { temp, feels_like, temp_min, temp_max, humidity },
            name,
            dt,
            sys: { country, sunrise, sunset },
            weather,
            timezone,
            wind: { speed },
        } = data;

        const { main: details, icon } = weather[0];
        return {
            lat,
            lon,
            temp,
            feels_like,
            temp_max,
            temp_min,
            humidity,
            name,
            dt,
            country,
            sunrise,
            sunset,
            timezone,
            details,
            icon,
            speed,
        };
    }
};

export const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    // daily = daily.slice(1, 6).map((d) => {
    //     return {
    //         temp: d.temp.day,
    //         title: formatToLocalTime(d.dt, timezone, "ccc"),
    //         icon: d.weather[0].icon,
    //     };
    // });

    // hourly = hourly.slice(1, 6).map((d) => {
    //     return {
    //         temp: d.temp.day,
    //         title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
    //         icon: d.weather[0].icon,
    //     };
    // });

    // return { timezone, daily, hourly };
};

export const GetFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(FormatCurrentWeather);

    // const { lat, lon } = formattedCurrentWeather;
    // const formattedForecastWeather = await getWeatherData("one call", {
    //     lat,
    //     lon,
    //     exclude: "current,minutely,alerts",
    //     // units: searchParams.units,
    // }).then(formatForecastWeather);
    return formattedCurrentWeather;
    // return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = async (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default GetFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
