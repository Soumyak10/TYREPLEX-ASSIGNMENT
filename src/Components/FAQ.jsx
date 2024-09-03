import React, { useState } from "react";
import {
    FaQuestionCircle,
    FaSearch,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

const FAQSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isQuestionVisible, setIsQuestionVisible] = useState(null);

    const toggleQuestionVisibility = (index) => {
        setIsQuestionVisible(isQuestionVisible === index ? null : index);
    };

    return (
        <section className="mt-12 bg-gray-100 py-8 px-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Frequently Asked Questions
            </h2>

            <div className="flex justify-center mb-4">
                <div className="relative w-2/3">
                    <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Search for a question..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute top-3 right-4 text-gray-500" />
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    className={`bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 ease-in-out ${
                        !searchQuery ? "hidden" : ""
                    }`}
                >
                    Ask
                </button>
            </div>

            <div className="mt-6 space-y-4">
                {/* First FAQ */}
                <div
                    className="bg-white p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => toggleQuestionVisibility(1)}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FaQuestionCircle className="text-red-500 mr-2" />
                            <h3 className="font-semibold text-lg">
                                What is the warranty on tyres?
                            </h3>
                        </div>
                        {isQuestionVisible === 1 ? (
                            <FaChevronUp className="text-gray-500" />
                        ) : (
                            <FaChevronDown className="text-gray-500" />
                        )}
                    </div>
                    {isQuestionVisible === 1 && (
                        <p className="mt-2 text-gray-600">
                            Most tyres come with a warranty that covers
                            manufacturing defects. The duration of the warranty
                            depends on the brand and type of tyre.
                        </p>
                    )}
                </div>

                {/* Second FAQ */}
                <div
                    className="bg-white p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => toggleQuestionVisibility(2)}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FaQuestionCircle className="text-red-500 mr-2" />
                            <h3 className="font-semibold text-lg">
                                How often should I replace my tyres?
                            </h3>
                        </div>
                        {isQuestionVisible === 2 ? (
                            <FaChevronUp className="text-gray-500" />
                        ) : (
                            <FaChevronDown className="text-gray-500" />
                        )}
                    </div>
                    {isQuestionVisible === 2 && (
                        <p className="mt-2 text-gray-600">
                            Tyres should be replaced every 5-6 years, or sooner
                            if you notice signs of wear like reduced tread
                            depth, cracks, or bulges. Regular inspection is
                            essential for safety.
                        </p>
                    )}
                </div>

                {/* Third FAQ */}
                <div
                    className="bg-white p-4 rounded-lg shadow cursor-pointer"
                    onClick={() => toggleQuestionVisibility(3)}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FaQuestionCircle className="text-red-500 mr-2" />
                            <h3 className="font-semibold text-lg">
                                How do I know the correct tyre pressure?
                            </h3>
                        </div>
                        {isQuestionVisible === 3 ? (
                            <FaChevronUp className="text-gray-500" />
                        ) : (
                            <FaChevronDown className="text-gray-500" />
                        )}
                    </div>
                    {isQuestionVisible === 3 && (
                        <p className="mt-2 text-gray-600">
                            The correct tyre pressure can be found in your
                            vehicle’s manual or on a sticker inside the driver's
                            door. Regularly check the pressure to maintain
                            optimal performance and safety.
                        </p>
                    )}
                </div>
            </div>
            <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold">
                    Have a question about Tyres?
                </h3>
                <p className="text-gray-600">
                    Get an answer in 24 hours from our experts.
                </p>
            </div>
        </section>
    );
};

export default FAQSection;
