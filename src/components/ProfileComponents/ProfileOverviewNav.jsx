import { useState } from "react";
import { FaArrowLeft, FaArrowLeftLong } from "react-icons/fa6";

import DesktopProfileOptions from "./DesktopProfileOptions";
import optionIcon from "../../assets/profile_images/option-icon.svg";
import MobileProfileOptions from "./MobileProfileOptions";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useProfile } from "Hooks/profile/useProfile";
import { useGetAllAccounts } from "Hooks/profile/useGetAllAccounts";

const ProfileOverviewNav = ({ type }) => {
  const [desktopProfileOptions, setDesktopProfileOptions] = useState(false);
  const [mobileProfileOptions, setMobileProfileOptions] = useState(false);

  const { id: usernameID } = useParams();

  const navigate = useNavigate();

  const { profileData } = useProfile();

  const isOthers = profileData?.data?.data?.user?.username !== usernameID;

  const handleDesktopProfileOptions = () => {
    setDesktopProfileOptions(true);
  };

  const handleMobileProfileOptions = () => {
    setMobileProfileOptions(true);
  };

  return (
    <nav className="flex justify-between items-center">
      {mobileProfileOptions && (
        <MobileProfileOptions
          mobileProfileOptions={mobileProfileOptions}
          setMobileProfileOptions={setMobileProfileOptions}
        />
      )}
      <div className="flex items-center gap-[12px]">
        {isOthers ? (
          <div className="flex gap-4 items-center">
            <FaArrowLeftLong
              onClick={() => navigate(-1)}
              className="cursor-pointer text-[18px]"
            />
          </div>
        ) : null}
        <span className="text-[#000] text-center text-[18px] lg:text-[20px] font-semibold">
          {type} Profile
        </span>
      </div>

      {isOthers ? null : (
        <div className="relative">
          <button>
            <img
              src={optionIcon}
              alt="Option"
              onClick={handleDesktopProfileOptions}
              className="w-[24px] h-[24px] hidden lg:block"
            />
          </button>

          <div onClick={handleMobileProfileOptions} className="lg:hidden">
            <BsThreeDots className="text-[25px] cursor-pointer" />
          </div>

          {/* DESKTOP VERSION */}
          {desktopProfileOptions && (
            <DesktopProfileOptions
              setDesktopProfileOptions={setDesktopProfileOptions}
            />
          )}
        </div>
      )}
    </nav>
  );
};

export default ProfileOverviewNav;
