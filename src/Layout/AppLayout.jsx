import { Outlet, useLocation } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Asidebar } from "./Asidebar";
import { Header } from "./Header";
import { useState } from "react";
import { Slider } from "./Slider";

export const AppLayout = () => {
  const [slider, setSlider] = useState(false);
  const { pathname } = useLocation();

  const handleSlider = () => {
    setSlider((slider) => !slider);
  };

  return (
    <div className="app_layout max-w-[1440px] mx-auto">
      <Header />
      <Asidebar />
      <main className="app_main mt-40">
        <Outlet />
      </main>

      {pathname !== "/" && (
        <button
          className={`w-[41px] h-[41px] rounded-full bg-[#4F0DA3] flex justify-center items-center fixed ${
            slider ? "left-[39%]" : "left-[1rem]"
          } top-8  text-white text-[20px] cursor-pointer lg:hidden z-[9999] shadow-lg `}
          onClick={handleSlider}
        >
          {slider ? (
            <RiArrowLeftSLine size={30} />
          ) : (
            <RiArrowRightSLine size={30} />
          )}
        </button>
      )}

      <Slider slider={slider} setSlider={setSlider} />
    </div>
  );
};
