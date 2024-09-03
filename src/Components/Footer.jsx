import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Footer Logo and Description */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">TyrePlex</h2>
                        <p className="text-gray-400">
                            Providing high-quality tyres and excellent services
                            to ensure your vehicle’s optimal performance and
                            safety.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <p className="text-gray-400 mb-2">
                            1234 Tyre St, Car City, CA 12345
                        </p>
                        <p className="text-gray-400 mb-2">
                            Phone: +1 (555) 123-4567
                        </p>
                        <p className="text-gray-400">
                            Email: info@tyreplex.com
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                            >
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                            >
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                            >
                                <FaLinkedinIn className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-gray-400">
                        © 2024 TyrePlex. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
