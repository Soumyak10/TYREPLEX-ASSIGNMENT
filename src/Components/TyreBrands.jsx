import React, { useRef } from "react";
import "../index.css";

// Tyre brand data with logos
const brands = [
    {
        name: "MRF",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Madras_Rubber_Factory_Logo.svg",
    },
    {
        name: "CEAT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/CEAT_Logo.svg",
    },
    {
        name: "Goodyear",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Goodyear_logo.svg",
    },
    {
        name: "Apollo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Apollo_Tyres_logo.svg",
    },
    {
        name: "Bridgestone",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bridgestone_logo.svg",
    },
    {
        name: "BirlaTyre",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Birla_tyres.jpg",
    },
];

const TyreBrands = () => {
    const containerRef = useRef(null);

    const scroll = (direction) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === "left" ? -500 : 500,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="mt-6 py-6 bg-gray-100">
            <h2 className="text-xl font-semibold text-black mb-4 text-center">
                Tyre Brands Offered
            </h2>
            <div className="relative">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out"
                >
                    &larr;
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out"
                >
                    &rarr;
                </button>

                {/* Brand Cards Container */}
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto space-x-6 pb-4 px-4 scrollbar-hidden "
                >
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="flex-shrink-0 w-64 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center hover:cursor-pointer "
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-28 h-auto mb-4 rounded-md"
                            />
                            <h3 className="text-lg font-bold text-black">
                                {brand.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TyreBrands;
