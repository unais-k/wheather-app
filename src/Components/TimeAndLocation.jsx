import React, { useState } from "react";
import { formatToLocalTime } from "../Services/WeatherService";

function TimeAndLocation({ resp: { dt, timezone, name, country } }) {
    const [time, setTime] = useState(null);

    const ti = formatToLocalTime(dt, timezone).then((data) => {
        setTime(data);
    });

    return (
        <div>
            <div className="flex flex-row justify-center my-6">
                <p className="text-white text-xl font-extralight">{time}</p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">{`${name},${country}`}</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
