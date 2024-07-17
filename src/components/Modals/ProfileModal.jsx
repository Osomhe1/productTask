import { AiOutlineClose } from "react-icons/ai";

const ProfileModalMenu = ({
  handleModalMenuClose,
  handleImelClick,
  handleManAdClick,
  handleEditProClick,
  handleRequestClick,
}) => {
  return (
    <>
      <div className="profile-menu-modal-container">
        <div className="clss-con flex" onClick={handleModalMenuClose}>
          <AiOutlineClose />
        </div>

        <div className="logo-menu-profil">
          <img src="images/lo2.png" alt="" />
        </div>

        <div className="all-menu-txt-all">
          <div className="each-menu-txt" onClick={handleEditProClick}>
            Account Settings
          </div>
          <div className="each-menu-txt">Manage Businesses</div>
          <div className="each-menu-txt">Saved Posts</div>
          <div className="each-menu-txt" onClick={handleRequestClick}>
            Request Verification
          </div>
          <div className="each-menu-txt" onClick={handleManAdClick}>
            Manage Adverts
          </div>
          <div className="each-menu-txt" onClick={handleImelClick}>
            Phone IMEI/ Gadget serial no
          </div>
        </div>
      </div>
      {/* <div className="modal-full-container">
        <EditProfile />
      </div> */}
    </>
  );
};

export default ProfileModalMenu;
