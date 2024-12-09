import HeroImage from "../../../assets/Banner-03.jpg";

function Hero() {
  return (
    <div className="w-full  min-h-[90vh] ">
      <div className="w-full grid min-h-[100vh] grid-cols-1 mds:grid-cols-2  px-6 sm:px-8 mds:px-28 mds:pb-28  ">
        {/* Description Section */}
        <div
          className="description space-y-5  flex justify-center items-center text-center mds:text-left py-4  px-10 md:py-0 md:px-0 
        mds:mb-8
        flex-col  mds:items-start order-2 mds:order-1"
        >
          <h1 className="text-4xl xl:text-5xl font-bold">
            Book Your Futsal Ground in Minutes
            <br />
            <span className="text-[#616161]">Hassle-Free, Anytime</span>
          </h1>
          <p>
            Whether you're planning a friendly match or a competitive game,
            easily find and reserve a futsal ground near you. No more waiting –
            play at your convenience!
          </p>
          <button className="book p-3 bg-slate-800 text-gray-50 hover:bg-slate-700 transition-all">
            Book Now
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="hero-image flex justify-center items-center order-1 mds:order-2 px-8 py-4 md:py-6 ">
          <img
            src={HeroImage}
            style={{}}
            className="w-[100%] md:w-[80%]  h-auto object-cover "
            alt="Hero Image"
            id="hero-img"
          />
        </div>
      </div>
    </div>

    // {Banner2}

    // <div
    //   className="w-full h-[90vh] mb-28 bg-cover bg-center flex justify-center items-center"
    //   style={{
    //     backgroundImage: `url(${HeroImage})`, // Corrected URL syntax
    //   }}
    // >
    //   <div className="flex justify-center mds:justify-start  items-center mds:items-start text-center mds:text-left w-full max-w-7xl ">
    //     <div className="description  ">
    //       <h1 className="text-4xl lg:text-5xl text-white font-bold  mb-6 ">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing.
    //         <span className="text-white"> Booking</span>
    //       </h1>
    //       <p className="text-white  mb-6">
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
    //         alias!
    //       </p>
    //       <button className="bg-black text-white py-2 px-6 hover:bg-[#1c1c1c] transition-all duration-300 ">
    //         Book Now
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
