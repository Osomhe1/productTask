import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

import MobileProfileOptions from "components/ProfileComponents/MobileProfileOptions";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export const ProfileHeader = ({ type, navigate }) => {
  const [mobileProfileOptions, setMobileProfileOptions] = useState(false);


  const handleMobileProfileOptions = () => {
    setMobileProfileOptions(true);
  };

  return (
    <>
      <div className="bg-[#4f0da3] w-full flex justify-between items-center h-[8vh] text-white px-8 lg:hidden">
          {/* {
            <div onClick={() => navigateHook(-1)}>
            </div>
          } */}

          <div className="flex items-center gap-4">
          {/* <FaArrowLeftLong className="text-[18px] mb-2 cursor-pointer" onClick={() => navigateHook(-1)}/> */}
          <h3>Profile</h3>

          </div>


        <div className="text-[20px]">{type}</div>

        <div onClick={handleMobileProfileOptions}>
          <BsThreeDots className="text-[25px] cursor-pointer" />
        </div>
      </div>

      {/* MOBILE VERSION */}
      <MobileProfileOptions
        mobileProfileOptions={mobileProfileOptions}
        setMobileProfileOptions={setMobileProfileOptions}
      />
    </>
  );
};
