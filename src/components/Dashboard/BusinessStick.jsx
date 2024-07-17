import { useState } from "react";

const BusinessStick = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hanleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="stick-cont">
      <div className="post-profile">
        <img
          src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
          alt=""
        />
        <div className="post-profile-details">
          <div className="post-profile-name"> Salem Lawal</div>
          <div className="autor-location">Lagos, Nigeria</div>
        </div>
      </div>
      <div className="stick-btn">
        <button
          className={isClicked ? "stickin " : " stick-btnn"}
          onClick={hanleClick}
        >
          {isClicked ? "Sticking" : "Stick"}
        </button>
      </div>
    </div>
  );
};

export default BusinessStick;
