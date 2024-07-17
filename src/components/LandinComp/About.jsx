import React from "react";
import support from "../../assets/support.png";
import { Link } from "react-router-dom";

const AboutLanding = () => {
  return (
    <div className="">
      <div className="about-container">
        <p className="colored-text font-semibold">About 2geda</p>
        <h3 className="heading-tertiary">Know more about 2geda</h3>
        <div className="md:grid md:grid-cols-2 gap-6 items-center mt-8 lg:w-[80%] md:w-[90%] mx-auto">
          <div className="flex items-center justify-center">
            <div className="mt-6 bg-[#4b0289] gap-4 rounded-xl lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] md:w-[250px] md:h-[250px] mr-8 md:mr-0 relative z-10">
              <img
                src={support}
                alt="support"
                className="absolute top-10 left-10 rounded-xl lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
              />
            </div>
          </div>

          <div className="mt-16">
            <p className="lg:text-[18px] md:text-[17px] text-[16px]  text-[#fff]">
              At 2GEDA, we're not just a social network; we're a global
              community fostering connections and meaningful interactions.
              Serving as your all-in-one platform, we're the marketplace for
              local commerce, the stage for events, the curator of music, and
              your go-to for polls and live prizes. Join us on 2GEDA, where
              connectivity meets a world of possibilities.
            </p>
            <Link to="/Signup">
              <button className="bg-[#4b0289] hover:bg-purple-700 transition duration-300 text-[#fff] lg:w-[50%] md:w-[50%] px-8 py-3 text-[16px] lg:text-[16px] md:text-[16px] rounded w-full">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
