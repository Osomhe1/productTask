import React from "react";
import wphone from "../../assets/wphone.png";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="py-16 bg-[#4b0289]">
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-12 justify-between items-center max-w-[90%] mx-auto">
        <div className="">
          <h3 className="md:text-[22px] lg:text-[26px] text-[20px] text-[#fff]">
            Experience 2GEDA Anywhere, Anytime
          </h3>
          <p className="text-slate-300 text-[15px] mt-8 md:text-[16px]">
            Connect seamlessly on 2GEDA - your social hub for local and global
            interactions. Download now to experience a world of connectivity,
            commerce, and community. Stay connected, stay informed, stay 2GEDA
          </p>
          <div className="w-full mt-10">
            <div className="grid grid-cols-2 gap-4 w-full justify-between">
              <a
                href="https://play.google.com/store/apps/details?id=com.africa_tech_city.togeda"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-center text-[#4b0289] md:text-[16px] text-[13px] no-underline rounded-xl"
              >
                Download 2geda
              </a>
              <Link
                to="/Signup"
                className="px-6 py-3 text-center border border-white md:text-[16px] text-[13px] no-underline rounded-xl"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        <img src={wphone} alt="support" className="w-full mt-12 md:mt-0 rounded md:w-[450px] mx-auto" />
      </div>
    </div>
  );
};

export default Download;
