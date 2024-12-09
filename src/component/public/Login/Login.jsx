import React from "react";
import logo from "../../../assets/logo.png";
import LoginImage from "../../../assets/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="  w-full min-h-screen flex justify-center items-center">
      <div className="login relative  w-full  max-w-[1024px] h-[640px] bg-white md:bg-gray-100 shadow-none md:shadow-2xl overflow-hidden flex">
        {/* left ride */}
        <div className="  h-full w-[55%]  items-center justify-center relative hidden md:flex  bg-gray-800 ">
          <Link to={"/"}>
            <img
              src={LoginImage}
              alt=""
              className=" w-3/4 absolute h-auto left-14 bottom-12 object-contain"
            />
          </Link>
        </div>
        {/* right side */}
        <div className=" w-full h-full flex items-center justify-center md:w-[45%] ">
          <form
            action=""
            className="w-full max-w-[300px] mb-20  flex flex-col justify-evenly text-sm sm:text-base space-y-4 "
          >
            <div className=" flex justify-center items-center">
              <img src={logo} alt="" className="w-24 h-24 " />
            </div>

            <div className="login-header text-left sm:text-center  pb-6 sm:pb-10">
              <h1 className="font-bold text-3xl ">Welcome Back!</h1>
              <p className="text-gray-500 text-sm">
                Please login to your account
              </p>
            </div>

            <div className="login-input space-y-3 ">
              <div className="email-input flex flex-col">
                {/* <label className="text-gray-700 font-semibold">Email</label> */}
                <input
                  type="email"
                  placeholder="Email"
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
                  required
                  className="border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1 focus:ring-[#fefefe] rounded-lg"
                  style={{ fontWeight: "500", color: "black" }}
                />
              </div>
            </div>

            <div className="login-buttom flex justify-center pt-2">
              <button className="my-auto bg-black flex w-full p-2 rounded-md text-gray-300 justify-center">
                Login
              </button>
            </div>
            <div className="forgot-rememberMe flex justify-between text-sm">
              <div className="rememberMe flex">
                <input type="checkbox" className="mr-1" />
                <p>Remember me</p>
              </div>

              <p>
                <Link to="#">Forgot password ?</Link>
              </p>
            </div>

            <div className="signup text-center pt-3">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/signUp" className="text-blue-600">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
