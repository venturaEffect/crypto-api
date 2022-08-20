import React from "react";

const Currency = ({key, title, image}) => {

    return (
        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl text-white text-base text-center">
            <h1 className="currency-title">{title}</h1>
            <img src={image} />
        </div>
    )
}

export default Currency;