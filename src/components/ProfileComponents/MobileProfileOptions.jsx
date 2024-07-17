import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/profile_images/2geda.png";
import EditProfile from "../Modals/EditProfile";
import RequestVerification from "../Modals/RequestVerification";
import ManageAdvert from "../Modals/ManageAdvert";
import Gadget from "../Modals/Gadget";
import { useModal } from "../../Hooks/useModal";
import ModalContainer from "../Modals/ModalContainer";
import ChangePasswordModal from "../Modals/ChangePasswordModal";
import EditBusinessProfile from "../BusinessProfileComponents/EditBusinessProfile";
import { useOpenModal } from "Hooks/useOpenModal";
import { BiLogOut } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "Context/ModalContext";
import toast from "react-hot-toast";
import { useProfile } from "Hooks/profile/useProfile";

const MobileProfileOptions = ({
  mobileProfileOptions,
  setMobileProfileOptions,
  type,
}) => {
  const { modal } = useModal();
  const { handleClick } = useOpenModal();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { setIsAuthenticated } = useContext(ModalContext);

  const {profileData} = useProfile()
  const username = profileData?.data?.data?.user?.username

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("2gedaUserInfo");
    queryClient.removeQueries();
    setIsAuthenticated(false);
    navigate("/");
    toast.success("Successfully Logged Out");
  };

  const pageRef = useRef(null);

  const handleGetRef = () => {
    if (pageRef && pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleGetRef();
  }, []);



  return (
    <div
      className={`profileOptionsMobile ${
        mobileProfileOptions ? "profileOptionsMobileActive z-40" : ""
      }`}
    >
      <div className="profileOptionsMobile_top" ref={pageRef}>
        <div>
          <img src={logo} alt="LOGO" />
        </div>

        <button onClick={() => setMobileProfileOptions(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.1027 12.0036L19.3277 5.78801C19.4473 5.64229 19.5084 5.45729 19.4991 5.269C19.4899 5.08071 19.4109 4.90259 19.2776 4.76929C19.1443 4.63599 18.9662 4.55704 18.7779 4.54779C18.5896 4.53854 18.4046 4.59966 18.2589 4.71926L12.0433 10.9443L5.82766 4.71926C5.68193 4.59966 5.49694 4.53854 5.30865 4.54779C5.12036 4.55704 4.94224 4.63599 4.80894 4.76929C4.67564 4.90259 4.59669 5.08071 4.58744 5.269C4.57819 5.45729 4.63931 5.64229 4.75891 5.78801L10.9839 12.0036L4.75891 18.2193C4.61807 18.3615 4.53906 18.5535 4.53906 18.7536C4.53906 18.9538 4.61807 19.1458 4.75891 19.288C4.90226 19.4266 5.09387 19.5041 5.29328 19.5041C5.49269 19.5041 5.6843 19.4266 5.82766 19.288L12.0433 13.063L18.2589 19.288C18.4023 19.4266 18.5939 19.5041 18.7933 19.5041C18.9927 19.5041 19.1843 19.4266 19.3277 19.288C19.4685 19.1458 19.5475 18.9538 19.5475 18.7536C19.5475 18.5535 19.4685 18.3615 19.3277 18.2193L13.1027 12.0036Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
        </button>
      </div>

      <div className="middle">
        <ul className="profileOptions_lists">
          {/* Account Setting */}
          <li
            onClick={() => {
              setMobileProfileOptions(false)
              navigate(`/${username}/edit-profile`)
            }}
            data-modal="setting"
            className="clickModalOpen"
          >
            Account Settings
          </li>
          {modal.setting && (
            <ModalContainer type="setting">
              {pathname === "/business-profile" ? (
                <EditBusinessProfile />
              ) : (
                <EditProfile />
              )}
            </ModalContainer>
          )}

          {/*  Manage Business Modal */}
          {/* <li>
            <Link to="/manage-business">Manage Businesses</Link>
          </li> */}

          {/* Rewards Modal */}
          {/* <li>
            <Link to="/rewards">Rewards</Link>
          </li> */}

          

          {/*  Manage Advert */}
          {/* <li
            onClick={handleClick}
            data-modal="manageadvert"
            className="clickModalOpen"
          >
            Manage Adverts
          </li> */}
          {modal.manageadvert && (
            <ModalContainer type="manageadvert">
              <ManageAdvert />
            </ModalContainer>
          )}

          {/* Gadget */}
          <li
            onClick={() => {
              setMobileProfileOptions(false)
              navigate(`/${username}/gadgets`)
            }}
            data-modal="gadgets"
            className="clickModalOpen"
          >
            Phone IMEI/ Gadget serial no
          </li>
          {modal.gadgets && (
            <ModalContainer type="gadgets">
              <Gadget />
            </ModalContainer>
          )}

          {/* Change password */}
          <li
            onClick={() => {
              setMobileProfileOptions(false)
              navigate(`/${username}/change-password`)
            }}
            data-modal="password"
            className="clickModalOpen"
          >
            Change password
          </li>
          {modal.password && (
            <ModalContainer type="password">
              <ChangePasswordModal />
            </ModalContainer>
          )}

          {/* Request Verification */}
          <li
            onClick={() => {
              setMobileProfileOptions(false)
              navigate(`/${username}/verify`)
            }}
            data-modal="requestVerification"
            className="clickModalOpen"
          >
            Request Verification
          </li>
          {modal.requestVerification && (
            <ModalContainer type="requestVerification">
              <RequestVerification />
            </ModalContainer>
          )}
        </ul>

        {/* <div className="mid_user">
          <Link to="/">Sign in another account</Link>

          <div>
            
          </div>

          <p>Faith Awolewa omowumi</p>
        </div> */}
      </div>

      <div className="flex gap-3 items-center">
        <BiLogOut size={24} className="text-rose-500"/>
        <span className="text-rose-500 text-[16px] cursor-pointer" onClick={handleLogout}>Logout</span>
      </div>
    </div>
  );
};

export default MobileProfileOptions;