import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Slider from "@mui/material/Slider";

const StarRating = ({ rating }) => {
  return (
    <div className="rating flex items-center space-x-1">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? (
          <FaStar
            key={i}
            className="w-4 h-3 md:h-4 text-yellow-500 cursor-pointer"
          />
        ) : (
          <FaRegStar
            key={i}
            className="w-4 h-3 md:h-4 text-yellow-500 cursor-pointer"
          />
        )
      )}
    </div>
  );
};

const FilterRating = () => {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div>
      {ratings.map((rating, index) => (
        <div key={index} className="mb-1">
          <StarRating rating={rating} />
        </div>
      ))}
    </div>
  );
};

function PriceSlider() {
  const [range, setRange] = React.useState([0, 3000]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  return (
    <div className="w-full space-y-4">
      <div className="price-input text-sm md:text-base">
        Rs. {range[0]} - Rs. {range[1]}
      </div>
      <div className="slider flex space-x-4 items-center">
        <Slider
          value={range}
          onChange={handleChanges}
          valueLabelDisplay="auto"
          min={0}
          max={3000}
          step={10}
        />{" "}
      </div>
    </div>
  );
}

export { FilterRating, PriceSlider };
