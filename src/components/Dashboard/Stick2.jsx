import { useState } from "react";
import PostImage from "../../assets/images/sample-avatar.png";
import Spinner from "components/Spinner";
import { noUser } from "utils/noUser";
import { useProfile } from "Hooks/profile/useProfile";
import { useNavigate } from "react-router-dom";
import useStickUnstick from "pages/Profile/useStickUnstick";

function isIdPresent(array, id) {
  return array.map((obj) => obj.id).includes(id);
}

const Stick2 = ({ item, stickings, username, publicStickings }) => {
  const [isClicked, setIsClicked] = useState(isIdPresent(stickings, item?.id));

  const navigate = useNavigate();
  // eslint-disable-next-line eqeqeq
  const isUser = publicStickings?.find((thing) => thing?.username == username);



  const { stickMutate, unstickMutate } = useStickUnstick(item?.id);

  const handleStickUser = () => {
    stickMutate();
  };

  const handleUnstickUser = () => {
    unstickMutate();
  };

  const navigateToPublic = () => {
    navigate(`/${item?.username}`);
  };

  const noClick = () => {};

  const name = item?.username;
  const job = item?.occupation ? item?.occupation : "Unemployed";
  const addr =
    item?.address?.city && item?.address?.country
      ? `${item?.address?.city}, ${item?.address?.country}`
      : "Address unknown";

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="post-profile">
        <img
          src={item?.profile_picture || noUser}
          alt="dum"
          className="cursor-pointer"
          onClick={() =>
            isUser?.id === item?.id ? noClick() : navigateToPublic()
          }
        />

        <div className="post-profile-details">
          <div className="post-profile-name">{name}</div>
          <div className="autor-ooby">{job}</div>
          <div className="autor-location">{addr}</div>
        </div>
      </div>
      <div className="stick-btn">
        <button
          className={
            isClicked
              ? "border-[1px] border-[#4f0da3] rounded-full lg:px-5 px-4 w-[70px] py-2 text-[#4f0da3] text-[10px]"
              : " w-[70px] rounded-full border-[1px] border-[#4f0da3] text-white bg-[#4f0da3] lg:px-5 px-4 py-2 text-[10px]"
          }
          disabled={item?.id === isUser?.id}
          onClick={() => {
            setIsClicked(!isClicked);
            isClicked ? handleUnstickUser() : handleStickUser();
          }}
        >
          {isClicked ? "Unstick" : "Stick"}
        </button>
      </div>
    </div>
  );
};

export default Stick2;
