import React from "react";
import ReviewCard from "./ReviewCard"; // Import the ReviewCard component

const CustomerReviews = () => {
    // Create an array with 10 review objects
    const reviews = [
        {
            name: "John Doe",
            heading: "Fantastic Service!",
            review: "Great service, highly recommend!",
            rating: 5,
        },
        {
            name: "Jane Smith",
            heading: "Affordable and Quality",
            review: "Affordable prices and quality work.",
            rating: 4.5,
        },
        {
            name: "Alice Johnson",
            heading: "Exceptional Experience",
            review: "Very professional and fast service.",
            rating: 4.8,
        },
        {
            name: "Bob Brown",
            heading: "Highly Satisfied",
            review: "Excellent work and customer service.",
            rating: 4.7,
        },
        {
            name: "Charlie Davis",
            heading: "Top Notch",
            review: "The best service I have ever received.",
            rating: 5,
        },
        {
            name: "Dana White",
            heading: "Reliable",
            review: "Always reliable and on time.",
            rating: 4.6,
        },
        {
            name: "Ella Green",
            heading: "Great Value",
            review: "Good value for the price.",
            rating: 4.4,
        },
        {
            name: "Frank Black",
            heading: "Good Quality",
            review: "Quality work at affordable prices.",
            rating: 4.5,
        },
        {
            name: "Grace Lee",
            heading: "Very Happy",
            review: "Extremely happy with the results.",
            rating: 4.9,
        },
        {
            name: "Henry Adams",
            heading: "Will Return",
            review: "I will definitely come back.",
            rating: 4.8,
        },
    ];

    return (
        <section className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-4 pb-4">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            name={review.name}
                            heading={review.heading}
                            review={review.review}
                            rating={review.rating}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
