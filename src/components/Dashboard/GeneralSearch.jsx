import { AiOutlineClose } from "react-icons/ai";
// import { BiSearch } from "react-icons/bi";
import { IoSendSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const GeneralSearch = ({ handleCloseToggledIcon }) => {
  const navigate = useNavigate();

  const gotoSearch = () => {
    navigate("/search");
  };
  return (
    <div className="general-search-container">
      <div className="search-send-cont">
        <div className="sear-input-box">
          <AiOutlineClose className="cls" onClick={handleCloseToggledIcon} />
          <input
            type="text"
            className="inp-general"
            placeholder="Start typing"
          />
        </div>
        <IoSendSharp className="send-iconn" onClick={gotoSearch} />
      </div>
      <div className="down-cont">
        <div className="recent-see-all">
          <div className="recent-sear">Recent searches</div>
          <div className="clear-all-searc">Clear all</div>
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Sandra</div>
          <AiOutlineClose className="sea-close" />
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Worship</div>
          <AiOutlineClose className="sea-close" />
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Ask me</div>
          <AiOutlineClose className="sea-close" />
        </div>
        <div className="search-text-close-bx">
          <div className="search-text">Sola kay</div>
          <AiOutlineClose className="sea-close" />
        </div>
      </div>
    </div>
  );
};

export default GeneralSearch;
