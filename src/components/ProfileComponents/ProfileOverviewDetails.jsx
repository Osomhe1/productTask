import { useState, useMemo } from "react";
import { Link} from "react-router-dom";
import { useProfile } from "Hooks/profile/useProfile";
import { MdVerified } from "react-icons/md";
import { noUser } from "utils/noUser";
import { FaTimes } from "react-icons/fa";
import useStickUnstick from "pages/Profile/useStickUnstick";

const ProfileImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;
  return (
    <div className="user_profile_image">
      <div className="cancel_btn">
        <button onClick={onClose}>
          <FaTimes className="arrow_back" />
        </button>
      </div>
      <div className="user_image_container">
        <img src={imageUrl || noUser} alt="Profile" />
      </div>
    </div>
  );
};

function isIdPresent(array, id) {
  return array?.map((obj) => obj.id).includes(id);
}

const ProfileOverviewDetails = ({ data }) => {
  const { profileData } = useProfile();
  const myProfile = profileData?.data?.data;

  const isMyProfile = myProfile?.user?.id === data?.user?.id;

  const { stickMutate, unstickMutate } = useStickUnstick(data?.id);

  const [profileState, setProfileState] = useState(false);
  const [isClicked, setIsClicked] = useState(
    isIdPresent(profileData?.data?.data?.stickings, data?.id)
  );

  const handleProfileImage = () => setProfileState(true);

  const stickersNumber = data?.stickers?.length || 0;
  const stickingsNumber = data?.stickings?.length || 0;

  const isBadge = data?.is_badge_verified;

  const name = useMemo(() => {
    const { first_name, last_name } = data?.user || {};
    if (first_name && last_name) return `${first_name} ${last_name}`;
    if (first_name) return first_name;
    if (last_name) return last_name;
    return "";
  }, [data]);

  const username = data?.user?.username || "";

  const job = data?.occupation || "Unemployed";

  const addr = useMemo(() => {
    const { state, country } = data?.address || {};
    return state && country ? `${state}, ${country}` : "Address unknown";
  }, [data]);

  const handleStickUser = () => {
    stickMutate();
  };

  const handleUnstickUser = () => {
    unstickMutate();
  };

  return (
    <div className="px-0 lg:px-[20px]">
      <ProfileImageModal
        isOpen={profileState}
        onClose={() => setProfileState(false)}
        imageUrl={data?.profile_picture}
      />

      <div className="cover_image border">
        {data?.cover_image ? (
          <img src={data?.cover_image} alt="Cover" />
        ) : (
          <div className="h-full w-full bg-slate-300"></div>
        )}
      </div>

      <div className="profile_details">
        <img
          src={data?.profile_picture || noUser}
          alt="Profile"
          onClick={handleProfileImage}
          className="border"
        />

        <div className="flex gap-2 items-center mt-2">
          <h2 className="text-[16px]">{name}</h2>
          {isBadge && <MdVerified className="text-blue-500 text-[20px] mb-2" />}
        </div>
        <h4 className="text-[14px]">@{username}</h4>
        <span>{job}</span>
        <span>{addr}</span>

        <div className="w-full mt-4 flex flex-col gap-4 items-center">
          <div className="flex item-center gap-4">
            <Link
              to={`/${username}/stickers`}
              className="stickers no-underline"
            >
              <span>Stickers</span>
              <span>{stickersNumber}</span>
            </Link>
            <Link
              to={`/${username}/stickings`}
              className="stickers no-underline"
            >
              <span>Stickings</span>
              <span>{stickingsNumber}</span>
            </Link>
          </div>

          {isMyProfile ? null : (
            <div className="flex items-center gap-4">
              <Link
                to={`/${username}`}
                className="stickers no-underline"
                style={{
                  borderRadius: "40px",
                }}
              >
                <span>Chat</span>
              </Link>
              <button
                className="stickers no-underline"
                style={{
                  borderRadius: "40px",
                  backgroundColor: "#FF8A15",
                }}
                onClick={() => {
                  setIsClicked(!isClicked);
                  isClicked ? handleUnstickUser() : handleStickUser();
                }}
                //disabled={isSticking || isUnsticking}
              >
                {isClicked ? <span>Unstick</span> : <span>Stick</span>}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewDetails;
