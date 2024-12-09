import React, { useState } from "react";
import GroundImage from "../../../assets/Banner-03.jpg";
import GroundImage2 from "../../../assets/05-2.jpg";

const GroundDetails = () => {
  const [images, setImages] = useState({
    image1: GroundImage,
    image2: GroundImage2,
    image3: GroundImage2,
    image4: GroundImage,
  });

  const [activeImage, setActiveImage] = useState(images.image1);
  return (
    <div className=" mx-auto flex justify-start items-start  h-screen">
      <div className="grid md:grid-cols-2 gap-6 ">
        {/* Left - Image Section */}
        <div className="flex flex-col p-10  justify-start items-start">
          <div className="overflow-hidden">
            <div className="flex  duration-500">
              <img
                src={activeImage}
                alt="shoe image"
                className="w-full max-h-[500px]"
              />
            </div>
          </div>
          <div className="flex mt-4 w-full justify-center space-x-4">
            <div className="cursor-pointer ">
              <img
                src={images.image2}
                alt="shoe image"
                className="w-32  sm:h-[75px] md:h-[85px]"
              />
            </div>
            <div className="cursor-pointer ">
              <img
                src={activeImage}
                alt="shoe image"
                className="w-32 sm:h-[75px] md:h-[85px]"
              />
            </div>
            <div className="cursor-pointer ">
              <img
                src={activeImage}
                // onClick={setActiveImage(images.image3)}
                alt="shoe image"
                className="w-32 sm:h-[75px] md:h-[85px]"
              />
            </div>
            <div className="cursor-pointer ">
              <img
                src={activeImage}
                alt="shoe image"
                className="w-32 sm:h-[75px] md:h-[85px]"
              />
            </div>
          </div>
        </div>

        {/* Right - Content Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 capitalize">
            nike shoes
          </h2>
          <a
            href="#"
            className="bg-blue-500 text-white uppercase text-sm px-2 py-1 inline-block transition-opacity duration-300 hover:opacity-90"
          >
            Visit Nike Store
          </a>
          <div className="flex items-center space-x-1 text-yellow-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="text-gray-700 font-semibold ml-1">4.7 (21)</span>
          </div>

          <div className="space-y-1">
            <p className="text-gray-500 line-through">Old Price: $257.00</p>
            <p className="text-blue-500 font-semibold">
              New Price: $249.00 (5%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundDetails;
