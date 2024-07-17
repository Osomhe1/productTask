import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import EachStatus from "../Commons/EachStatus";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const images = [
  "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
  "https://1.bp.blogspot.com/-SRfm7uawCzI/XEeaeZkTp1I/AAAAAAAAX0s/0bZ0jwlbVtgHke6igAsXJInLs-Z32UBjwCLcBGAs/s1600/3%2Bcamera%2Btricks%2BNO%2BONE%2Bwill%2Bsuspect%2521.jpg",
  "images/pic3.png",
  "https://cdn-s-www.bienpublic.com/images/4AFF773E-4799-4A4F-8609-93C26E4883D6/NW_raw/les-compagnons-de-la-loucholle-comptent-quatre-intronises-de-plus-au-sein-de-leur-confrerie-photo-pierre-aubrun-1652788419.jpg",
  "images/pic2.png",
  "https://3.bp.blogspot.com/-km-24oMrcqo/Wv3Kj82uFtI/AAAAAAAAWBQ/Tw8RBvpyaBU3dtpIcyp1Opr4nKgzrufEACLcBGAs/s1600/STREET%2BPHOTOGRAPHY%2Bwith%2BPeter%2BMcKinnon.jpg",
  "https://1.bp.blogspot.com/-SRfm7uawCzI/XEeaeZkTp1I/AAAAAAAAX0s/0bZ0jwlbVtgHke6igAsXJInLs-Z32UBjwCLcBGAs/s1600/3%2Bcamera%2Btricks%2BNO%2BONE%2Bwill%2Bsuspect%2521.jpg",
  "images/pic3.png",
];

const StatusModal = ({ handleCloseMainContainerClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let interval;
    if (currentIndex < images.length - 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className="postFormModal-container status-modal-container">
      <div className="status-nav">
        <AiOutlineClose
          className="cls-post"
          onClick={handleCloseMainContainerClick}
        />
        <div className="logo-container status-nav-logo">
          <img src="images/lo2.png" alt="" className="logo-img" />
          <div className="logo-text">2geda</div>
        </div>
      </div>
      <div className="all-status-container">
        <div className="owner-status-cont">
          <div className="add-status-m">
            <FaPlus />
          </div>
          <div className="life-style-cont">
            <div className="life-style">Your lifestyle</div>
            <div className="advi-style">Share an event or happening.</div>
          </div>
        </div>
        <div className="all-the-sticker-status">
          <div className="the-sticker-status-cont">
            <div className="th-sticker-status">
              <div className="sticker-pic">
                <img src="images/pic2.png" alt="" />
              </div>
              <div className="sticker-name-s">You</div>
              <div className="new-time">
                <span>25 m</span>
              </div>
            </div>
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
            <EachStatus />
          </div>
        </div>
      </div>

      <div className="connect-profile-view-box">
        <div className="cont-view-connect">
          <div
            className={`arrr-ctrl ${currentIndex === 0 ? "disable" : ""} flex`}
            onClick={handlePrevious}
          >
            <AiOutlineLeft />
          </div>
          <div className="image-bx-cont">
            <div className="indicator-bx">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`ind-con ${
                    index === currentIndex ? "actv-life loading-indicator" : ""
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex all-ma-box">
              <img src={images[currentIndex]} alt="" />
            </div>
          </div>
          <div
            className={`arrr-ctrl flex ${
              currentIndex === images.length - 1 ? "disable" : ""
            }`}
            onClick={handleNext}
          >
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
