import React from "react";
import Io2 from "../../assets/lo2.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-8 py-24">
      <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-6 md:gap-1 justify-between mx-auto w-[90%]">
        <div className="hidden flex-col justify-center items-center md:flex">
          <img
            src={Io2}
            alt="logo"
            className="logo hidden md:block"
            style={{ width: "70px" }}
          />
          <h2 className="text-[15px] mt-4">www.2geda.net</h2>
        </div>
        <div>
          <div>
            <p className="text-[16px] font-semibold">Quick Links</p>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-4">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", fontSize: "14px" }}
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", fontSize: "13px"  }}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", fontSize: "13px"  }}
              >
                Contact
              </ScrollLink>
              <Link
                to="/PrivacyPolicy"
                style={{ color: "black", cursor: "pointer", fontSize: "13px", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className=" mt-4 md:mt-0">
          <p className="text-[16px] font-semibold">Subscribe</p>
          <div className="grid grid-cols-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-8 py-2 text-[15px] col-span-4 md:col-span-5 rounded-l-lg outline-none"
            />
            <button className="px-6 py-6 bg-[#4b0289] col-span-2 md:col-span-1 rounded-r-lg flex items-center justify-center cursor-pointer">
              <FaArrowRight className="text-[#fff] text-[18px]"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
