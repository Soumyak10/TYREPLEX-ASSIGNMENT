import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-lg font-bold">Tyreplex</div>

                {isMobile && (
                    <button
                        onClick={handleMenuToggle}
                        className="md:hidden flex items-center p-2"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes size={24} />
                        ) : (
                            <FaBars size={24} />
                        )}
                    </button>
                )}

                <nav
                    className={`md:flex ${
                        isMobile
                            ? isMobileMenuOpen
                                ? "fixed inset-0 bg-gray-800 z-50 p-8"
                                : "hidden"
                            : "block"
                    } md:relative`}
                >
                    {isMobile && isMobileMenuOpen && (
                        <button
                            onClick={handleMenuToggle}
                            className="absolute top-4 right-4 text-white"
                        >
                            <FaTimes size={24} />
                        </button>
                    )}

                    <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-12 md:mt-0 md:p-0 p-4 text-left">
                        <li className="group relative">
                            <a href="#" className="hover:text-gray-300">
                                Car Tyres
                            </a>
                            <ul className="md:absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 rounded shadow-lg">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        SUV Tyres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Sedan Tyres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Hatchback Tyres
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:text-gray-300">
                                Bike Tyres
                            </a>
                            <ul className="md:absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 rounded shadow-lg">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Sports Bike Tyres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Cruiser Tyres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Scooter Tyres
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:text-gray-300">
                                Tyre Pressure
                            </a>
                            <ul className="md:absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 rounded shadow-lg">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Pressure Monitors
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Pressure Gauges
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:text-gray-300">
                                Commercial Tyres
                            </a>
                            <ul className="md:absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 rounded shadow-lg">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Truck Tyres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Bus Tyres
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Van Tyres
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:text-gray-300">
                                Accessories
                            </a>
                            <ul className="md:absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 rounded shadow-lg">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Car Accessories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Bike Accessories
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <a href="#" className="hover:text-gray-300">
                                More
                            </a>
                            <ul className="md:absolute left-0 hidden group-hover:block bg-gray-700 mt-2 py-2 rounded shadow-lg">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        Tyre Care Tips
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-600"
                                    >
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </li>

                        {isMobile && (
                            <li className="mt-4">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300 flex items-center"
                                >
                                    Login
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>

                {!isMobile && (
                    <a href="#" className="text-white hover:text-gray-300">
                        <FaUserCircle size={24} />
                    </a>
                )}
            </div>
        </header>
    );
};

export default Header;
