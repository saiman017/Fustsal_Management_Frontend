import logoDescription from "../../../assets/logo.png";
function Footer() {
  return (
    <footer className="w-full  h-auto  bottom-0 px-4 sm:px-8 md:px-16 lg:px-20 py-4 bg-[#222222] text-gray-300 lg:text-lg mbs:text-base sm:text-base">
      <div className=" grid grid-cols-1 sm:grid-cols-2 mds:grid-cols-4 gap-6 mt-11 space-x-4">
        {/* Logo Description */}
        <div className="space-y-4 mds:col-span-1 ">
          <img className="w-52 h-16 " src={logoDescription} alt="Fustal Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatibus at, officia quidem suscipit necessitatibus
            reprehenderit modi error aperiam sunt!
          </p>
        </div>
        {/* Footer Links */}
        <div className="links   lg:mb-7 ">
          <h3 className=" mb-6 font-bold ">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Ground</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className=" font-bold mb-6">Contact Us</h3>
          <ul className="space-y-2">
            <li>Contact no:0518989 </li>
            <li></li>
            <li>Email: example@mail.com</li>
          </ul>
          font-extrabold
        </div>

        {/* Follow Us */}
        <div>
          <h3 className=" mb-6 font-bold">Get In Touch</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="">
              <i className="bx bxl-facebook bg-[#3B5998] text-[#fff] p-1  rounded-full"></i>
            </a>
            <a href="#" className="">
              <i className="bx bxl-instagram  bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-[#fff] p-1 rounded-full"></i>
            </a>
            <a href="#" className="">
              <i className="bx bxl-github  bg-[#181717] text-[#fff] p-1 rounded-full"></i>
            </a>
            <a href="#" className="">
              <i className="bx bxl-twitter  bg-[#1DA1F2] text-[#fff] p-1 rounded-full"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="w-[80% ] border-1 border-[#b7b7b7]  flex justify-center items-center my-14" />

      <div className="mb-3">
        <ul
          className="flex space-x-9 text-sm
         flex-wrap justify-center items-center  list-disc  "
        >
          <li className="ml-4">
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Poilicy</a>
          </li>
          <li>
            <a href="">Our Blog</a>
          </li>
        </ul>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 flex justify-center items-center text-sm  text-gray-300">
        &copy; 2014 Futsal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
