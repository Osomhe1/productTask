import React from "react";
import { IoMdMail, IoIosGlobe } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Businesses = ({  biz, handleBussinessClick }) => {
  return (
    <div  className="business-search-card">
      <div className="business-logo-con">
        <img
          src={biz?.cover_image || "images/pic2.png"}
          alt="business_cover_image"
        />
        <div className="business-name-loc">
          <div className="buss-nm capitalize">
            {biz?.business_name || "Default business name - Smith Tech Hub"}
          </div>
          <div className="buss-loc capitalize">
            {biz?.address ||
              "Default business name - 123 Main Street Los Angeles, CA 90001"}
          </div>
        </div>
      </div>
      <div className="buss-desc">
        {biz?.bio ||
          " Default business bio - Smith Tech Hub is your go-to Tech Community in today's evolving Tech World"}
      </div>
      <div className="touch-with-bx">
        <button
          className="touch-btn"
          onClick={() => (window.location.href = `mailto:${biz.user.email}`)}
        >
          <IoMdMail />
          <div className="touch-btn-txt text-[12px] lg:text-[14px]">Mail</div>
        </button>
        <button
          className="touch-btn"
          onClick={() =>
            (window.location.href = `tel:${biz.biz_phone_numbers[0]}`)
          }
        >
          <IoCallSharp />
          <div className="touch-btn-txt text-[12px] lg:text-[14px]">Call</div>
        </button>
        <button
          className="touch-btn"
          onClick={() => window.open(biz.website_link)}
        >
          <IoIosGlobe />
          <div className="touch-btn-txt text-[12px] lg:text-[14px]">View</div>
        </button>
      </div>
      <div className="claim-visit-page-btn">
        <button
          className="claim-visit-btn text-[12px] lg:text-[14px] bg-[#403f3f]"
          disabled
        >
          Claim business
        </button>
        <button
          className="claim-visit-btn visi-pae text-[12px] lg:text-[14px]"
          onClick={handleBussinessClick}
        >
          Visit page
        </button>
      </div>
    </div>
  );
};

export default Businesses;
