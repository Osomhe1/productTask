import Header from "../typography/txtHeader";
import Stacked from "../shared/Stacked";
import { ModalContext } from "Context/ModalContext";
import { FiArrowLeft } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { useContext, useState, useEffect, useRef } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineReport } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { GoMegaphone } from "react-icons/go";
const SellHeader = ({
  title,
  hide,
  hideArr,
  clickBack,
  brad,
  dots,
  cname,
  dangerClick,
  titleCol,
  purpose,
  isDelete,
  setIdeletetype,
}) => {
  const { isOpen, closeModal, cartContent } = useContext(ModalContext);

  const handleClose = () => {
    isOpen && closeModal();
  };
  const [hideNav, SetNav] = useState(false);

  const action = () => {
    SetNav(true);
  };

  return (
    <>
      <Stacked
        pt={2.5}
        // styles={styleBt}
        bg="#ffff"
        pl={3}
        pr={3}
        pb={1}
        ai="center"
        jc="space-between"
        d="row"
        cname={cname}
        styles={{
          borderBottom: brad || "2px solid #d9d9d9",
          position: "sticky",
          top: 0,
          zIndex:
            title === "Product Information" || "My orders" ? "990" : "999",
          display: cartContent === "ordercompleted" && "none",
        }}
      >
        <FiArrowLeft
          className={`${hideArr ? "invisible" : "visible"}`}
          onClick={() => {
            // go-back
            clickBack ? clickBack() : window.history.back();
            // window.history.back();
          }}
          fontSize="25px"
          stroke="rgba(0, 0, 0, 0.6)"
        />
        <Header fs="20px" fw="700" cl={titleCol || "#000000"} title={title} />

        {/* show-on-condtition */}
        <div className={`${hide ? "invisible" : "visible"} mobile_btns_dot`}>
          {dots === "caution" && (
            <div onClick={() => dangerClick()}>
              <CgDanger fontSize="25px" />
            </div>
          )}
          {dots && dots !== "caution" ? (
            <div className="action_nav" onClick={action}>
              <BiDotsVerticalRounded fontSize="20px" />
            </div>
          ) : !dots && dots !== "caution" ? (
            <div onClick={handleClose}>
              <LiaTimesSolid fontSize="25px" stroke="rgba(0, 0, 0, 0.6)" />
            </div>
          ) : null}
        </div>
        {hideNav ? (
          <AbsoluteNav
            nav={hideNav}
            config={SetNav}
            isuse={purpose}
            clikcedif={isDelete}
            deltype={setIdeletetype}
          />
        ) : null}
      </Stacked>
    </>
  );
};

const AbsoluteNav = ({ nav, config, isuse, clikcedif, deltype }) => {
  const { isOpen, openModal, setModalContent } = useContext(ModalContext);

  const showReview = (payload) => {
    nav && config(false);
    console.log("Shared");
    setModalContent(payload);
    !isOpen && openModal();
  };

  const optionsRef = useRef(null);

  useEffect(() => {
    const closeOptions = (e) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        config(false);
      }
    };
    optionsRef
      ? document.addEventListener("mousedown", closeOptions)
      : document.removeEventListener("mousedown", closeOptions);

    return () => {
      document.removeEventListener("mousedown", closeOptions);
    };
  }, [nav, config]);

  const Location = useLocation();
  const searchparams = new URLSearchParams(Location.search);
  const productid = searchparams.get("id");
  return (
    <div
      ref={optionsRef}
      className="absolute top-[5rem] right-12 bg-[#ffff] rounded-lg flex flex-col py-3 px-2 gap-y-4 shadow-lg "
    >
      {/* share-modal-button */}

      {isuse === "producetdetails" ? (
        <>
          <div
            className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-3 px-2 rounded-lg select-none"
            onClick={() => showReview("sharemodal")}
          >
            <CiShare2 fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Share product</span>
          </div>
          {/* report-seller */}
          <div className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-3 px-2 rounded-lg select-none">
            <MdOutlineReport fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Report seller</span>
          </div>
          {/* report-item */}
          <div className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-3 px-2 rounded-lg select-none">
            <MdOutlineReport fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Report thie item</span>
          </div>
        </>
      ) : isuse === "managestoredetails" ? (
        <>
          {/* managestoreproduct-popup */}
          <div
            className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-3 px-2 rounded-lg select-none"
            onClick={() => showReview("sharemodal")}
          >
            <CiShare2 fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Share product</span>
          </div>
          {/* Delete-item */}
          <div
            className="flex flex-row gap-x-2 items-center cursor-pointer hover:bg-[#d9d9d9] p-y-3 px-2 rounded-lg select-none"
            onClick={() => {
              config(false);
              deltype("del");
              clikcedif(productid);
            }}
          >
            <MdDelete fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Delete Item</span>
          </div>
          {/* promote-item */}
          <button className="flex flex-row gap-x-4 items-center cursor-pointer hover:bg-[#d9d9d9] py-2 px-2 rounded-lg select-none ">
            <GoMegaphone fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Promote Item</span>
          </button>
        </>
      ) : null}
    </div>
  );
};
export default SellHeader;
