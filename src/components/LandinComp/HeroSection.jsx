import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HeroSection = () => {
  
    
  return (
    <div>
      <div className="top h-[70vh] md:h-[70vh] lg:h-[90vh]">
        <div className="mt-36 p-8">
          <h1 style={{ color: "#f4f4f4" }} className="text-center text-[16px] bg-[#4F0DA3] py-4 rounded-full px-10 w-fit mx-auto" >The Platform We Build Together</h1>
          <h3 className="heading-primary mt-8">
            Connect, Share, Discover, and Empower
          </h3>
          <p className="paragraph text-center text-[18px]" style={{ color: "#f4f4f4" }}>
            Unleash connections. Explore entertainment and empower knowledge on
            2geda
          </p>
          <div className="grid grid-cols-2 gap-4 mt-12 w-full justify-between">
              <Link
                to="/Signup"
                className="px-6 py-3 text-center bg-[#4F0DA3]  hover:bg-purple-700 transition duration-200 shadow-sm text-[#fff] md:text-[16px] text-[13px] no-underline rounded-xl"
              >
                Register Now
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.africa_tech_city.togeda"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border hover:border-2 transition duration-200 shadow-sm border-white text-center text-[#fff] md:text-[16px] text-[13px] no-underline rounded-xl"
              >
                Get the app
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
