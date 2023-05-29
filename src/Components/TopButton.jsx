import React from "react";

function TopButton() {
    const cities = [
        {
            id: 1,
            title: "London",
        },
        {
            id: 2,
            title: "New York",
        },
        {
            id: 3,
            title: "Amsterdam",
        },
        {
            id: 4,
            title: "Paris",
        },
        {
            id: 5,
            title: "Dubai",
        },
    ];

    return (
        <div className="flex items-center justify-around my-6">
            {cities?.map((res) => {
                return (
                    <button className="text-white text-lg font-medium" key={res.id}>
                        {res.title}
                    </button>
                );
            })}
        </div>
    );
}

export default TopButton;
