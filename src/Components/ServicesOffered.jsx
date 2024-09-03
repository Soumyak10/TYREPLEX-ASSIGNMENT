import React from "react";
import { FaCar, FaBalanceScale, FaWrench } from "react-icons/fa"; // Import relevant icons

const services = [
    {
        name: "Tyre Fitting",
        icon: <FaCar className="text-blue-500 text-4xl" />,
    },
    {
        name: "Wheel Balancing",
        icon: <FaBalanceScale className="text-green-500 text-4xl" />,
    },
    {
        name: "Alignment",
        icon: <FaWrench className="text-red-500 text-4xl" />,
    },
];

const ServicesOffered = () => {
    return (
        <section className="mt-6 bg-gray-100 py-6">
            <h2 className="text-xl font-semibold text-center mb-6">
                Services Offered
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="w-full sm:w-1/2 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 cursor-pointer"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">
                            {service.name}
                        </h3>
                        <p className="text-gray-600">
                            We provide top-quality {service.name.toLowerCase()}{" "}
                            services to ensure your vehicle's optimal
                            performance and safety.
                        </p>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 ease-in-out cursor-pointer">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesOffered;
