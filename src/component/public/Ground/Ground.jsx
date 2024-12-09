import { lazy, useState } from "react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import GroundCard from "../Feature/GroundCard.jsx";
import { FilterRating, PriceSlider } from "./FilterLists.jsx";

const Ground = () => {
  const grounds = [
    {
      price_per_hour: "1500",
      name: "Court A",
      location: "Downtown",
      availability: "Tomorrow",
      rating: 4,
    },
    {
      price_per_hour: "1505",
      name: "Court B",
      location: "Midtown",
      availability: "Today",
      rating: 3,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "R1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
    {
      price_per_hour: "1500",
      name: "Court C",
      location: "Uptown",
      availability: "Next Week",
      rating: 5,
    },
  ];

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full h-auto">
      <div className="subHeader flex justify-start lg:justify-end items-center px-4 py-4 md:px-8 bg-gray-100 space-x-8 font-medium text-sm">
        {/* <div className="result text-xs md:text-sm">
          <p className="text-gray-700">15 result found</p>
        </div> */}
        <div className="Sortoptions flex justify-between items-center text-xs md:text-sm text-gray-700">
          <div className="block md:hidden  " onClick={``}>
            FilterBy
          </div>
          <div className=" rounded-lg px-4">
            <select name="#" className="bg-transparent rounded-full" id="#">
              <option value="F">Sort by: Featured</option>
              <option value="Hl">Price: High to low</option>
              <option value="LH">Price: low to high</option>
            </select>
          </div>
        </div>
      </div>
      <div className="main-content w-full h-full flex">
        {/* right side Filter */}
        <div className="filterBy h-[600px] text-gray-500 w-[20%] hidden md:flex shadow-lg justify-center  ">
          <div className="w-full flex flex-col  space-y-5 px-6 py-8">
            {/* Category filter */}
            <div className="category flex flex-col space-y-2 ">
              <h1 className="text-left font-semibold text-base">Category</h1>
              <div className="category-type flex flex-col justify-start  ">
                <div className="input">
                  <input type="checkbox" />
                  Indoor
                </div>
                <div className="input">
                  <input type="checkbox" />
                  Outdoor
                </div>
              </div>
            </div>
            {/* Rating filter */}
            <div className="rating flex flex-col">
              <h1 className="text-left font-semibold text-base">Rating</h1>
              <div className="rating-options">
                <FilterRating />
              </div>
            </div>
            {/* Price Slider */}
            <div className="Price flex flex-col">
              <h1 className="text-left font-semibold text-base">Price</h1>
              <div className="price-slider">
                <PriceSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="grounds h-full w-[100%] md:w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6  gap-y-8 px-10 py-8">
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
      </div>
    </div>
  );
};

export default Ground;
