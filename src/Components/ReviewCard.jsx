import React from "react";
import { FaUserCircle, FaStar } from "react-icons/fa"; // Import additional icons

const ReviewCard = ({ name, heading, review, rating }) => {
    const starCount = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Half star

    return (
        <div className="flex-shrink-0 w-80 bg-white p-4 rounded-lg ">
            <div className="flex items-start space-x-4">
                {/* Left Side: Person Icon */}
                <div className="flex-shrink-0">
                    <FaUserCircle className="text-gray-500 text-4xl" />
                </div>

                {/* Right Side: Review Content */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <div className="flex items-center mt-2">
                        {[...Array(starCount)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
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
                                    key={index + starCount + (halfStar ? 1 : 0)}
                                    className="text-gray-300"
                                />
                            )
                        )}
                    </div>
                    <p className="mt-2 text-gray-800 font-semibold">
                        {heading}
                    </p>
                    <p className="text-gray-600 mt-1">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
