import { DateTime } from "luxon";

const REACT_APP_API_KEY = "3d5deac07f169bd01172a4ba4cb4a7e8";
const REACT_APP_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (infoType, searchParams) => {
    // console.log(infoType, searchParams);
    const url = new URL(REACT_APP_BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: REACT_APP_API_KEY });
    console.log(url);
    return fetch(url).then((res) => res.json());
    // .then((data) => data);
};

export const FormatCurrentWeather = (data) => {
    console.log(data, "line 15");
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
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
        details,
        icon,
        speed,
    };
};

export const formatForecastWeather = (data) => {
    console.log(data, "line 47");
    let { timezone, daily, hourly } = data;
    console.log(timezone, daily, hourly);
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

    const { lat, lon } = formattedCurrentWeather;
    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        // units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export const formatToLocalTime = async (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
