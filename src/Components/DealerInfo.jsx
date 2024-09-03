import React from "react";
import { FaStar, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa"; // Import additional icons
import CustomerReviews from "./CustomerReviews";

const DealerInfo = () => {
    const rating = 4.9;
    const starCount = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    const handleGetDirectionsClick = () => {
        window.open(
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.276773909989!2d77.3789929!3d28.6426711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bae0e73a15%3A0xc268cb9ed2106c69!2sCEAT%20Shoppe%2C%20Shree%20Hemkunt%20Tyres%20And%20Services!5e0!3m2!1sen!2sin!4v1725024875084!5m2!1sen!2sin",
            "_blank"
        );
    };

    return (
        <div className="p-4 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Left Side: Details */}
                    <div className="flex-1 pr-0 md:pr-8 mb-4 md:mb-0">
                        <div className="flex items-center mb-2 justify-between">
                            <h1 className="text-2xl font-bold">
                                SHREE HEMKUNT TYRES AND <br />
                                SERVICES
                            </h1>
                            <div className="flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" />
                                <p className="text-gray-500">Verified</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-2">
                            {/* Stars */}
                            {[...Array(starCount)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className="text-yellow-500"
                                />
                            ))}
                            {halfStar && (
                                <FaStar
                                    key="half"
                                    className="text-yellow-500"
                                    style={{ clipPath: "inset(0 50% 0 0)" }}
                                />
                            )}
                            {[...Array(5 - starCount - (halfStar ? 1 : 0))].map(
                                (_, index) => (
                                    <FaStar
                                        key={
                                            index +
                                            starCount +
                                            (halfStar ? 1 : 0)
                                        }
                                        className="text-gray-300"
                                    />
                                )
                            )}
                            <span className="ml-2 text-lg font-semibold">
                                ({rating})
                            </span>
                        </div>
                        <p className=" mb-4">
                            <FaMapMarkerAlt className="inline-block text-gray-500 mr-2" />
                            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA
                            KHAND-02 INDIRAPURAM,
                            <br />
                            Ghaziabad, Uttar Pradesh, 201014
                        </p>
                        <p className="text-gray-500 mb-4">
                            <FaClock className="inline-block text-gray-500 mr-2" />
                            Open - Monday to Sunday - 10:00AM to 8:00PM
                        </p>
                        <button
                            onClick={handleGetDirectionsClick}
                            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                        >
                            Get Directions
                        </button>
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img
                                src="https://c8.alamy.com/comp/S13TEA/a-mechanic-balances-a-wheel-at-a-tyre-shop-in-kuala-lumpur-malaysia-S13TEA.jpg"
                                alt=""
                                className="w-full h-60 object-cover rounded-lg"
                            />
                            <img
                                src="https://media.gettyimages.com/id/1489285831/photo/mechanic-changing-a-car-tire-and-talking-to-his-client-at-the-repair-garage.jpg?s=612x612&w=gi&k=20&c=6hcG3HO6tpZWLacEhQJQY5UKBCcT6JGrkmlFtxXvepM="
                                alt=""
                                className="w-full h-60 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <CustomerReviews />
            </div>
        </div>
    );
};

export default DealerInfo;
