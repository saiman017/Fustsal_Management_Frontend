import React from "react";
import GroundCard from "./GroundCard";

const FeaturedGrounds = () => {
  const grounds = [
    {
      price_per_hour: "$50/hr",
      name: "Court A",
      location: "Downtown",
      availability: "Tomorrow",
      rating: 4,
    },
    {
      price_per_hour: "$45/hr",
      name: "Court B",
      location: "Midtown",
      availability: "Today",
      rating: 3,
    },
    {
      price_per_hour: "$60/hr",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
  ];

  return (
    <div className=" w-full py-10 px-4 md:px-12 lg:px-20 my-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured Grounds
      </h2>
      <p className="text-center text-sm md:text-base mb-14 text-gray-600">
        Popular fustal ground for last months.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10">
        {grounds.map((ground, index) => (
          <GroundCard
            key={index}
            price_per_hour={ground.price_per_hour}
            name={ground.name}
            location={ground.location}
            availability={ground.availability}
            rating={ground.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrounds;
