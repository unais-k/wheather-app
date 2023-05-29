import React from "react";
import { FiSearch } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

function Inputs() {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    type="text"
                    className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                    placeholder="Search for city...."
                />
                <FiSearch size={25} color="white" className="cursor-pointer hover:scale-125" />
                <TfiLocationPin size={25} color="white" className="cursor-pointer hover:scale-125" />
            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button className="text-xl text-white font-light" name="metric">
                    °C
                </button>
                <p className="text-lg text-white font-thin mx-1">|</p>
                <button className="text-xl text-white font-light" name="imperial">
                    °F
                </button>
            </div>
        </div>
    );
}

export default Inputs;
