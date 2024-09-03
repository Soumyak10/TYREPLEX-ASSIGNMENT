import React from "react";

const TyreCard = ({ size, price, tubeless }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md relative bg-white  transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
            {/* Apollo Logo */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Apollo_Tyres_logo.svg"
                alt="Apollo Logo"
                className="w-20 h-8 mb-4 absolute top-4 left-4"
            />

            {/* Warranty Label */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold py-1 px-2 rounded">
                5 Year Warranty
            </div>

            {/* Title and Tire Details */}
            <h2 className="font-semibold text-lg mt-12">AMAZER 4G LIFE</h2>
            <p className="text-gray-500">{size}</p>

            {/* Reviews */}
            <div className="mt-2">
                <span className="text-sm text-white bg-green-600 px-1">★4</span>{" "}
                <span className="text-gray-500">(321 Reviews)</span>
            </div>
            <p className=" font-semibold text-xl">₹ {price}</p>

            {/* Offer */}
            <div className="mt-2">
                <span className="text-sm text-green-500">Offer available</span>
            </div>

            <p className="text-gray-400 text-sm">
                {tubeless ? "Tubeless" : "Tube Type"}
            </p>

            {/* Tire Image */}
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpbb_LuGFyvxaiJnoV27FcI4bZVX3g-uAVA&s"
                alt="Tire"
                className="w-24 h-32 mt-4 absolute bottom-4 right-4"
            />
        </div>
    );
};

export default TyreCard;
