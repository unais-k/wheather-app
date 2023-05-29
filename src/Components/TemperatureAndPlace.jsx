import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { TbWind } from "react-icons/tb";
import { HiOutlineSun } from "react-icons/hi";
import { TbSunset2 } from "react-icons/tb";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function TemperatureAndPlace() {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Cloudy </p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img className="w-20" src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p className="text-5xl"> 34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <CiTempHigh size={18} className="mr-1" />
                        Real fell:
                        <span className="font-medium ml-1">32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <IoWaterOutline size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <TbWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">3 km/h</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center space-x-2 justify-center text-sm py-3 text-white">
                <HiOutlineSun />
                <p className="font-light">
                    Rise: <span className="font-medium ml-1">06.45 AM</span>
                </p>
                <p className="font-light">|</p>
                <TbSunset2 />
                <p className="font-light">
                    Set: <span className="font-medium ml-1">07.15 PM</span>
                </p>
                <p className="font-light">|</p>
                <AiOutlineArrowUp />
                <p className="font-light">
                    High: <span className="font-medium ml-1">40°</span>
                </p>
                <p className="font-light">|</p>
                <AiOutlineArrowDown />
                <p className="font-light">
                    Low: <span className="font-medium ml-1">35°</span>
                </p>
            </div>
        </div>
    );
}

export default TemperatureAndPlace;
