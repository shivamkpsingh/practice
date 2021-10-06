import React from "react";
import MyDrawer from "../Drawer/MyDrawer";
import "./Navbar.css";
import Notification from "./Notification";

const Navbar = () => {
  return (
    <div className="Navbar shadow-xl sticky top-0 z-50 bg-white">
      <div className="navTop flex  justify-between items-center  p-2 mt-2  lg:px-10 sm:flex-row">
        <img
          src={process.env.PUBLIC_URL + "../images/logo.png"}
          alt="logo"
          className="w-12 sm:w-24 md:w-36"
        />
        <div className="navbarSearch ml-2 w-full sm:w-3/5 ">
          <div className="search flex items-center border sm:py-1 rounded-full px-1">
            <img
              src={process.env.PUBLIC_URL + "../images/loca.png"}
              alt="location"
              className="bg-white w-4 sm:w-8 p-1 sm:p-2 rounded-full"
            />
            <input
              type="text"
              placeholder="Search Anything"
              className="border-none outline-none w-full flex-1 text-center"
            />
            <img
              src={process.env.PUBLIC_URL + "../images/navtabla.png"}
              alt=""
              className=" bg-white w-4 sm:w-8  p-1 sm:p-2 rounded-full"
            />
          </div>
        </div>
           <div className="md:hidden">
             <button className="bg-red-400 ml-5 py-1 text-white rounded-sm px-4">Login</button>
           </div>
        <div className="login">
          <div className=" hidden md:flex  items-center justify-between">
            <a href="/a" className="mx-4 relative inline-block notification">
              <img src={process.env.PUBLIC_URL + "../images/noti.png"} alt=""  className=""/>
              <div className=" hidden noticontent  right-0 absolute  w-64  -m-1 bg-white shadow-2xl border h-full z-10">
                <Notification/>
              </div>
            </a>
            <a href="/b" className="mx-4">
              <img src={process.env.PUBLIC_URL + "../images/like.png"} alt="" />
            </a>
            <a href="/c" className="mx-4">
              <img src={process.env.PUBLIC_URL + "../images/cart.png"} alt="" />
            </a>
            <button className="flex items-center">
              <h2 className=" text-lg "> Login</h2>
              <img
                src={process.env.PUBLIC_URL + "../images/logarr.png"}
                alt="login"
                className="ml-2 w-6"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MyDrawer/>
      </div>
      <div className="navbarBottom  justify-between text-center md:px-20  xl:px-72 mt-2 pb-4 hidden md:flex ">
        <a href="/a">Her Products</a>
        <a href="/b">His Products</a>
        <a href="/c">Kiddo Product</a>
        <a href="/d">Her Product</a>
        <a href="/e">His Product</a>
        <a href="/f">Kiddo Product</a>
      </div>
      
    </div>
  );
};

export default Navbar;
