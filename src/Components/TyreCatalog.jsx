import React, { useState } from "react";
import TyreCard from "../Components/TyreCard";
import PaymentModes from "../Components/PaymentModes";

const TyreCatalog = () => {
    const allTires = [
        {
            size: "145/80 R12",
            price: 3136,
            tubeless: false,
            popularity: 1,
            vehicleType: "Car",
        },
        {
            size: "145/80 R13",
            price: 3562,
            tubeless: true,
            popularity: 2,
            vehicleType: "Car",
        },
        {
            size: "155/65 R13",
            price: 3401,
            tubeless: true,
            popularity: 3,
            vehicleType: "Bike",
        },
        {
            size: "165/70 R14",
            price: 4500,
            tubeless: true,
            popularity: 5,
            vehicleType: "SUV",
        },
        {
            size: "175/65 R15",
            price: 5000,
            tubeless: false,
            popularity: 4,
            vehicleType: "Car",
        },
        {
            size: "185/70 R14",
            price: 5200,
            tubeless: true,
            popularity: 6,
            vehicleType: "SUV",
        },
        {
            size: "195/60 R15",
            price: 5400,
            tubeless: true,
            popularity: 7,
            vehicleType: "Car",
        },
        {
            size: "205/55 R16",
            price: 6000,
            tubeless: false,
            popularity: 8,
            vehicleType: "SUV",
        },
        {
            size: "215/60 R17",
            price: 6500,
            tubeless: true,
            popularity: 9,
            vehicleType: "Car",
        },
        {
            size: "225/50 R18",
            price: 7000,
            tubeless: true,
            popularity: 10,
            vehicleType: "SUV",
        },
        {
            size: "235/55 R19",
            price: 7500,
            tubeless: false,
            popularity: 11,
            vehicleType: "Truck",
        },
        {
            size: "245/60 R20",
            price: 8000,
            tubeless: true,
            popularity: 12,
            vehicleType: "Truck",
        },
        {
            size: "255/65 R21",
            price: 8500,
            tubeless: true,
            popularity: 13,
            vehicleType: "SUV",
        },
        {
            size: "265/70 R22",
            price: 9000,
            tubeless: false,
            popularity: 14,
            vehicleType: "Truck",
        },
        {
            size: "275/75 R23",
            price: 9500,
            tubeless: true,
            popularity: 15,
            vehicleType: "Truck",
        },
    ];
    const [visibleTires, setVisibleTires] = useState(4);
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("mostPopular");
    const [vehicleType, setVehicleType] = useState("all");

    const handleFilterChange = (e) => setFilter(e.target.value);
    const handleSortChange = (e) => setSort(e.target.value);
    const handleVehicleTypeChange = (e) => setVehicleType(e.target.value);

    const filteredTires = allTires
        .filter((tire) => {
            if (filter === "tubeless") return tire.tubeless;
            if (filter === "tube") return !tire.tubeless;
            return true;
        })
        .filter((tire) => {
            if (vehicleType !== "all") return tire.vehicleType === vehicleType;
            return true;
        })
        .sort((a, b) => {
            if (sort === "mostPopular") return b.popularity - a.popularity;
            if (sort === "priceLowToHigh") return a.price - b.price;
            if (sort === "priceHighToLow") return b.price - a.price;
            return 0;
        });

    const handleViewMore = () => {
        setVisibleTires((prev) => prev + 4);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 mt-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Tyre Catalog</h1>
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mt-4 space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                        <select
                            value={filter}
                            onChange={handleFilterChange}
                            className="px-4 py-2 rounded bg-gray-300 text-gray-700 w-full md:w-auto"
                        >
                            <option value="all">Filter By</option>
                            <option value="tubeless">Tubeless</option>
                            <option value="tube">Tube Type</option>
                        </select>
                        <select
                            value={sort}
                            onChange={handleSortChange}
                            className="px-4 py-2 rounded bg-gray-300 text-gray-700 w-full md:w-auto"
                        >
                            <option value="mostPopular">Most Popular</option>
                            <option value="priceLowToHigh">
                                Price: Low to High
                            </option>
                            <option value="priceHighToLow">
                                Price: High to Low
                            </option>
                        </select>
                        <input
                            type="text"
                            placeholder="FOR EX: DL01AB1111"
                            className="px-4 py-2 rounded bg-white border border-gray-300 w-full md:w-auto"
                        />
                        <select
                            value={vehicleType}
                            onChange={handleVehicleTypeChange}
                            className="px-4 py-2 rounded bg-gray-300 text-gray-700 w-full md:w-auto"
                        >
                            <option value="all">Select Vehicle Type</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTires.slice(0, visibleTires).map((tire, index) => (
                    <TyreCard
                        key={index}
                        size={tire.size}
                        price={tire.price}
                        tubeless={tire.tubeless}
                    />
                ))}
            </div>

            {visibleTires < filteredTires.length && (
                <div className="mt-8 flex justify-center">
                    <button
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )}
            <PaymentModes />
        </div>
    );
};

export default TyreCatalog;
