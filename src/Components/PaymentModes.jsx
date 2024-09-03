import React from "react";
import {
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcPaypal,
    FaCcDiscover,
    FaGoogleWallet,
    FaApplePay,
} from "react-icons/fa";

const paymentModes = [
    { icon: <FaCcVisa />, name: "Visa", color: "text-blue-600" },
    { icon: <FaCcMastercard />, name: "Mastercard", color: "text-orange-600" },
    { icon: <FaCcAmex />, name: "American Express", color: "text-blue-400" },
    { icon: <FaCcPaypal />, name: "PayPal", color: "text-blue-800" },
    { icon: <FaCcDiscover />, name: "Discover", color: "text-red-600" },
    {
        icon: <FaGoogleWallet />,
        name: "Google Wallet",
        color: "text-green-500",
    },
    { icon: <FaApplePay />, name: "Apple Pay", color: "text-gray-800" },
];

const PaymentModes = () => {
    return (
        <section className="mt-12 bg-gray-100 py-6">
            <h2 className="text-xl font-semibold text-center mb-6">
                Payment Modes
            </h2>
            <div className="flex justify-center space-x-8">
                {paymentModes.map((mode, index) => (
                    <div key={index} className="relative group">
                        <div
                            className={`${mode.color} text-5xl hover:text-opacity-80 transition duration-300 ease-in-out`}
                        >
                            {mode.icon}
                        </div>
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 text-sm font-medium text-gray-700 transition duration-300 ease-in-out">
                            {mode.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PaymentModes;
