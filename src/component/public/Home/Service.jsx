import { RiSecurePaymentLine } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const servicesDetail = [
    {
      Icon: RiSecurePaymentLine,
      label: "Easy to Book",
      description: "Easy to book from anywhere for fast and simple booking.",
    },
    {
      Icon: RiSecurePaymentLine,
      label: "Secure Payment",
      description:
        "No worries about transactions with our secure payment system.",
    },
    {
      Icon: LuHelpingHand,
      label: "Love to Help You",
      description:
        "Our team is dedicated to assisting you every step of the way.",
    },
  ];

  return (
    <div className=" w-full  px-8 sm:px-4 md:px-12 lg:px-20 my-32">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
        Services
      </h2>
      <p className="text-center text-sm md:text-base mb-14 text-gray-600">
        Popular fustal ground for last months.
      </p>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-20 lg:gap-10">
        {servicesDetail.map((service) => (
          <ServiceCard
            key={service.label}
            Icon={service.Icon}
            label={service.label}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
