import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { noUser } from "utils/noUser";
import { FaTimes } from "react-icons/fa";
import { useGetPublicProfile } from "Hooks/profile/useGetPublicProfile";
import Spinner from "components/Spinner";
import { MdVerified } from "react-icons/md";
import { stickUser, unstickUser } from "api/services/profile";

function isIdPresent(array, id) {
  return array?.map((obj) => obj.id).includes(parseInt(id));
}

const PublicProfileOverviewDetails = ({ data, id, userStickings }) => {
  const [profileState, setProfileState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isSticking, setIsSticking] = useState(false);
  const [isUnsticking, setIsUnsticking] = useState(false);
  const {
    profileData,
    refetchProfile,
    isProfileDataLoading,
    isProfileFetching,
  } = useGetPublicProfile(id);

  useEffect(() => {
    setIsClicked(isIdPresent(userStickings, id));
  }, [id, userStickings]);

  const handleStickUser = async () => {
    setIsSticking(true);
    try {
      await stickUser(id);
      setIsClicked(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSticking(false);
    }
  };

  const handleUnstickUser = async () => {
    setIsUnsticking(true);
    try {
      await unstickUser(id);
      setIsClicked(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsUnsticking(false);
    }
  };

  const {
    user,
    occupation,
    address,
    profile_picture,
    cover_image,
    is_badge_verified,
  } = data || {};

  const stickersNumber = profileData?.data?.data?.stickers?.length || 0;
  const stickingsNumber = profileData?.data?.data?.stickings?.length || 0;

  const handleProfileImage = () => setProfileState(true);

  const name = useMemo(() => {
    if (user) {
      const { first_name, last_name } = user;
      return `${last_name || ""} ${first_name || ""}`.trim();
    }
    return "";
  }, [user]);

  const addr = useMemo(() => {
    if (address) {
      const { state, country } = address;
      return state && country ? `${state}, ${country}` : "Address unknown";
    }
    return "Address unknown";
  }, [address]);

  if (isProfileDataLoading || isProfileFetching) {
    return <Spinner />;
  }

  return (
    <div className="px-0 lg:px-[20px]">
      {profileState && (
        <div className="user_profile_image">
          <div className="cancel_btn">
            <button onClick={() => setProfileState(false)}>
              <FaTimes className="arrow_back" />
            </button>
          </div>
          <div className="user_image_container">
            <img src={profile_picture || noUser} alt="Profile" />
          </div>
        </div>
      )}

      <div className="cover_image border">
        {cover_image ? (
          <img src={cover_image} alt="Cover" />
        ) : (
          <div className="h-full w-full bg-slate-300"></div>
        )}
      </div>

      <div className="profile_details">
        <img
          src={profile_picture || noUser}
          alt="Profile"
          onClick={handleProfileImage}
          className="border"
        />

        <div className="flex gap-2 items-center mt-2">
          <h2 className="text-[16px]">{name}</h2>
          {is_badge_verified && (
            <MdVerified className="text-[#4f0da3] text-[20px] mb-2" />
          )}
        </div>
        <h4 className="text-[14px]">@{user?.username}</h4>
        <span>{occupation || "Unemployed"}</span>
        <span>{addr}</span>

        <div className="w-full mt-4 flex flex-col gap-4 items-center">
          <div className="flex item-center gap-4">
            <Link
              to={`/profile/public-profile/${id}/stickers`}
              className="stickers no-underline"
            >
              <span>Stickers</span>
              <span>{stickersNumber}</span>
            </Link>
            <Link
              to={`/profile/public-profile/${id}/stickings`}
              className="stickers no-underline"
            >
              <span>Stickings</span>
              <span>{stickingsNumber}</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to={`/profile/public-profile/${id}/stickers`}
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
                if (isClicked) {
                  handleUnstickUser();
                } else {
                  handleStickUser();
                }
              }}
              disabled={isSticking || isUnsticking}
            >
              {isSticking || isUnsticking ? (
                <Spinner />
              ) : isClicked ? (
                <span>Unstick</span>
              ) : (
                <span>Stick</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileOverviewDetails;

