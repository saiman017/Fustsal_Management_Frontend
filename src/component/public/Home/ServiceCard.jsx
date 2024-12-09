import { useState } from "react";

const ServiceCard = ({ Icon, label, description }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="bg-slate-50  w-full shadow-md hover:shadow-xl transition-shadow  duration-300 rounded-lg cursor-pointer pt-20 pb-28 px-10  sm:pt-10 sm:pb-14 sm:px-8 md:pt-20 md:pb-28 md:px-10"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="w-11 h-11 flex justify-center items-center bg-red-400 rounded-full">
        <Icon size={24} className="text-white" />
      </div>
      <h1 className="mt-5 text-2xl md:text-3xl leading-normal font-semibold text-gray-800">
        {label}
      </h1>
      <p className="text-gray-500 mt-3 break-words text-lg leading-normal">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
