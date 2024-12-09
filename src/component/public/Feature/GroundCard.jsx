import React, { useState } from "react";
import HeroImage from "../../../assets/Banner-03.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

const GroundCard = ({
  price_per_hour,
  name,
  location,
  description,
  availability,
  opening_time,
  closing_time,
  rating,
  type,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="bg-slate-50  shadow-md hover:shadow-xl transition-shadow p-4 sm:p-3 md:p-5 duration-300 rounded-lg cursor-pointer "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="ground-image relative bg-gray-100">
        <img
          src={HeroImage}
          className="h-50 object-fit  mb-4 w-full rounded-none"
          alt="Ground image"
        />
        <button
          className={`absolute bottom-0  bg-black text-gray-300  w-full flex justify-center items-center h-[22%] text-base md:text-lg font-medium rounded-tr-lg transition-all duration-500 ${
            isHover
              ? " translate-y-0 opacity-100"
              : "translate-y-[10%] opacity-0"
          }`}
        >
          Book Now
        </button>
      </div>
      <div className="ground-description text-sm md:text-base">
        <div className="rating-price mt-4 mb-2 flex items-center justify-between">
          <div className="price text-green-600 text-base md:text-lg font-semibold">
            Rs {price_per_hour}
            <span className="text-sm">/hr</span>
          </div>
          <div className="rating flex items-center">
            {/* Display rating as stars using react-icons */}
            {Array.from({ length: 5 }, (_, i) =>
              i < rating ? (
                <FaStar key={i} className="w-4 h-3 md:h-4 text-yellow-500" />
              ) : (
                <FaRegStar
                  key={i}
                  className="w-4 h-3  md:h-4 text-yellow-500"
                />
              )
            )}
          </div>
        </div>

        {/* Description  */}
        <div className="ground-details mb-4">
          <div className="mb-1  text-gray-500">{name}</div>
          <div className=" text-gray-500">{location}</div>
          <div className=" text-gray-500">
            Next Availability: {availability}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundCard;
