import React from "react";
import Header from "../Components/Header";
import DealerInfo from "../Components/DealerInfo";
import TyreBrands from "../Components/TyreBrands";
import ServicesOffered from "../Components/ServicesOffered";
import Footer from "../Components/Footer";
import TyreCatalog from "../Components/TyreCatalog";
import FAQ from "../Components/FAQ";

const DealerPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <main className="container mx-auto p-4">
                <DealerInfo />
                <TyreBrands />
                <ServicesOffered />
                <TyreCatalog />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default DealerPage;
