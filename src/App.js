import { useState } from "react";
import "./App.css";
import TemperatureAndPlace from "./Components/TemperatureAndPlace";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButton from "./Components/TopButton";
import { GetFormattedWeatherData } from "./Services/WeatherService";
import MapBoxComponent from "./Components/MapBox";
import { useEffect } from "react";

function App() {
    const [place, setPlace] = useState({ q: "berlin" });
    const [dataS, setDataS] = useState(null);
    const [units, setUnits] = useState("metric");
    const fetchWeather = async () => {
        if (place) {
            console.log(place, "place");
            console.log("new call");
            const response = await GetFormattedWeatherData({ ...place, units });
            // console.log(response, "ín apps");
            setDataS(response);
        } else {
            console.log("no Place");
        }
    };
    useEffect(() => {
        fetchWeather();
    }, [place]);

    return (
        <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-lg shadow-gray-400">
            <TopButton />
            <MapBoxComponent setState={setPlace} />
            {/* <Inputs /> */}
            {dataS && (
                <div>
                    <TimeAndLocation resp={dataS} />
                    <TemperatureAndPlace res={dataS} />
                </div>
            )}
            {/* <ForCast title="Hourly forecast" /> */}
            {/* <ForCast title="daily forecast" /> */}
        </div>
    );
}

export default App;
