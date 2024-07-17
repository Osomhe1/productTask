import { useEffect, useState } from "react";
import "./style.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const WelcomeComp = () => {
  const adTexts = [
    {
      id: "t1",
      text: "Unlock Business and Personal Potentials",
      more: "Meet prospective clients and vendors for your next product or service needs",
    },
    {
      id: "t2",
      text: "Connect with Diverse Businesses",
      more: "Boost local businesses on our app. Connect, engage, and grow together socially",
    },
    {
      id: "t3",
      text: "Explore Our Inclusive Business Directory",
      more: "Discover a diverse array of businesses in our inclusive directory today. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [adTexts.length]);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + adTexts.length) % adTexts.length
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adTexts.length);
    }
  };

  return (
    <div className="welcome-comp-box" >
      <img src="images/hero3.jpg" alt="" />
      <div className=" up-wel">Welcome to 2geda</div>

      <div className="ad-main-con">
        <div className="ad-main">
          <div className="slide-wel-box">
            <div className="text-wel-con">
              <div className="ad-text-main" id={adTexts[currentIndex].id}>
                {adTexts[currentIndex].text}
              </div>
              <div className="ad-more-tst">{adTexts[currentIndex].more}</div>
            </div>
          </div>
          <div className="welc-navi-box">
            <div className="ad-more-tst bvb">Welcome to 2geda</div>

            <div className="navig-cont">
              <div
                className="navigate-box"
                onClick={() => handleArrowClick("left")}
              >
                <AiOutlineArrowLeft />
              </div>
              <div
                className="navigate-box"
                onClick={() => handleArrowClick("right")}
              >
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComp;
