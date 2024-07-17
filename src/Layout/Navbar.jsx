import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
// import { IoIosNotifications } from "react-icons/io";
import GeneralSearch from "../components/Dashboard/GeneralSearch";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  

  const handleToggledIcon = () => {
 
    setIsToggled(true);
  };
  const handleCloseToggledIcon = () => {
    setIsToggled(false);
  };
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="/images/lo2.png" alt="" className="logo-img" />
        <p className="logo-text hidden lg:flex">2geda</p>
      </div>
      <div className="searc-profile">
        <div
          className={isToggled ? "mobile-searc nol" : "mobile-searc"}
          onClick={handleToggledIcon}
        >
          <BiSearch className="sea-icon " size={20} />
        </div>

        {isToggled && (
          <GeneralSearch handleCloseToggledIcon={handleCloseToggledIcon} />
        )}

        <div className="searc-container  nil" onClick={handleToggledIcon}>
          <div type="text" className="searc-inp" placeholder="">
            Search Anythings
          </div>
          <BiSearch className="sea-icon " size={20} />
        </div>
        <div className="notif-cont">
          {/* <div className="bell-count">99+</div> */}
          <BsBell className="bell" size={20} />
        </div>
        <div className="profile-container">
          <img
            src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
            alt=""
          />

          <div className="pro-text ban">My Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
