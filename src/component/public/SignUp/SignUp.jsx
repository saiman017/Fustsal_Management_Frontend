import React from "react";
import logo from "../../../assets/logo.png";
import SignUpImage from "../../../assets/signup.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="  w-full min-h-screen flex justify-center items-center">
      <div className="signUp relative  w-full  max-w-[1024px] h-[700px] bg-white md:bg-gray-100 shadow-none md:shadow-2xl overflow-hidden flex mb-14 sm:mb-0">
        {/* left ride */}
        <div className="  h-full w-[45%]  items-center justify-center relative hidden md:flex  bg-green-800 ">
          <Link to={"/signUp"}>
            <img
              src={SignUpImage}
              alt="SignUp image"
              className=" w-3/4 absolute h-auto left-0 bottom-12 object-contain"
            />
          </Link>
        </div>
        {/* right side */}
        <div className=" w-full h-full flex items-center justify-center md:w-[55%] ">
          <form
            action=""
            className="w-full max-w-[480px] mb-10  flex flex-col justify-evenly space-y-3  p-2 md:p-0 text-sm md:text-base  "
          >
            <div className=" flex justify-center items-center">
              <Link to={"/"}>
                <img src={logo} alt="" className="w-28 h-24 " />
              </Link>
            </div>

            <div className="signUp-header text-left p-2 space-y-2 pb-1 sm:text-center sm:pb-6 md:pb-8">
              <h1 className="font-semibold  md:font-bold text-3xl">
                Create account
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base ">
                Please Register with Email and SignUp to continue
              </p>
            </div>

            <div className="signup-input space-y-3 ">
              <div className="flex justify-between gap-x-2">
                <div className="input-group flex flex-col w-[48%] ">
                  {/* <label htmlFor="" className="ml-1 font-medium">
                    First Name
                  </label> */}
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg "
                    style={{ fontWeight: "500", color: "black" }}
                  />
                </div>
                <div className="input-group flex flex-col w-[48%]  ">
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg "
                    style={{ fontWeight: "500", color: "black" }}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-x-2">
                <div className="input-group flex flex-col w-[48%] ">
                  <select
                    name="gender"
                    id="gender"
                    className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg text-gray-400 "
                    style={{ fontWeight: "500" }}
                  >
                    <option value="" c>
                      Gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
                <div className="input-group flex flex-col w-[48%]  ">
                  <input
                    type="date"
                    id="date_of_birth"
                    name="date_of_birth"
                    placeholder="Date of birth"
                    className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg  text-gray-400"
                    style={{ fontWeight: "500" }}
                  />
                </div>
              </div>

              <div className="input flex flex-col">
                {/* <label className="text-gray-700 font-semibold">Password</label> */}
                <input
                  type="number"
                  placeholder="Contact"
                  name="contact"
                  id="contact"
                  required
                  className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg"
                  style={{ fontWeight: "500", color: "black" }}
                />
              </div>

              <div className="input flex flex-col">
                {/* <label className="text-gray-700 font-semibold">Email</label> */}
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                  className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg "
                  style={{ fontWeight: "500", color: "black" }}
                />
              </div>
              <div className="password-input flex flex-col">
                {/* <label className="text-gray-700 font-semibold">Password</label> */}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  required
                  className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg"
                  style={{ fontWeight: "500", color: "black" }}
                />
              </div>

              <div className="input flex flex-col">
                {/* <label className="text-gray-700 font-semibold">Password</label> */}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg"
                  style={{ fontWeight: "500", color: "black" }}
                />
              </div>
            </div>
            <div className="termsAndConditions text-xs sm:text-sm flex items-center justify-start my-1">
              <input type="checkbox" />
              <p className="ml-1">
                I do accept all the{" "}
                <a href="#" className="text-blue-600">
                  Terms and Conditions
                </a>
              </p>
            </div>

            <div className="signUp-buttom flex justify-center pt-2">
              <button className="my-auto bg-black flex w-full p-2 rounded-md text-gray-300 justify-center">
                SignUp
              </button>
            </div>
            {/* <div className="forgot-rememberMe flex justify-between text-sm">
              <div className="rememberMe flex">
                <input type="checkbox" className="mr-1" />
                <p>Remember me</p>
              </div>

              <p>
                <a href="#">Forgot password ?</a>
              </p>
            </div> */}

            <div className="signup text-center pt-3">
              <p className="text-xs sm:text-sm text-gray-500">
                Already Have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
