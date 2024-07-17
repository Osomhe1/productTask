import "./profile.css";
import ProfileOverviewDetails from "./ProfileOverviewDetails";
import ProfileOverviewNav from "./ProfileOverviewNav";
import ads from "../../assets/profile_images/Jumia-Celebrate-the-Game.png";
import ProfileActivities from "./ProfileActivities";
import { useProfile } from "Hooks/profile/useProfile";
import { useEffect, useRef } from "react";
import useGetProfileMedia from "Hooks/profile/useGetProfileMedia";
import Spin from "components/Spin/Spin";
import { useParams } from "react-router-dom";
import { useGetAllAccounts } from "Hooks/profile/useGetAllAccounts";
import ContainerError from "components/ContainerError";
import WrongProfilePage from "./WrongProfilePage";

const ProfileOverview = () => {
  const { id: usernameID } = useParams();

  const {
    profileData,
    isProfileDataLoading,
    profileDataError,
    refetchProfile,
  } = useProfile();


  const { allAccounts, isAllAccountsLoading, allAccountsError } =
    useGetAllAccounts();

  const {
    isMediaDataLoading,
    mediaData,
    mediaDataError,
    mediaStatus,
    refetchMediaData,
  } = useGetProfileMedia();

  const isOthers = profileData?.data?.data?.user?.username !== usernameID;
  const theUser = allAccounts?.data?.data?.find(
    (item) => item?.user?.username === usernameID
  );

  console.log('media data', mediaData)

  const wrongPage = isOthers && !theUser ? true : false;

  const mediaID = isOthers
    ? theUser?.user?.id
    : profileData?.data?.data?.user?.id;

  const realUser = isOthers ? theUser : profileData?.data?.data;
  const pageRef = useRef(null);

  const handleGetRef = () => {
    if (pageRef && pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", top: -10 });
    }
  };

  useEffect(() => {
    handleGetRef();
  }, []);

  const myMedia = mediaData?.data?.results?.posts?.filter(
    // eslint-disable-next-line eqeqeq
    (item) => item?.user?.id == mediaID
  );

  const allMedia = myMedia
    ?.filter((item) => {
      return item?.files[0] !== undefined;
    })
    .map((item) => item?.files[0]);

  useEffect(() => {
    refetchMediaData();
    refetchProfile();
  }, [refetchMediaData, refetchProfile]);

  return (
    <div className="lg:p-[5px]" ref={pageRef}>
      {isAllAccountsLoading || isProfileDataLoading ? (
        <Spin />
      ) : profileDataError || allAccountsError ? (
        <ContainerError />
      ) : wrongPage ? (
        <WrongProfilePage />
      ) : (
        <>
          <div className="flex flex-col gap-[10px] py-[15px] px-[10px]">
            <ProfileOverviewNav type={isOthers ? "Public" : "Personal"} />
            <ProfileOverviewDetails data={realUser} />
          </div>

          <div className="hidden lg:block">
            <img src={ads} alt="Ads" className="w-full h-full object-contain" />
          </div>

          <div className="">
            <ProfileActivities
              allMedia={allMedia}
              mediaStatus={mediaStatus}
              isMediaDataLoading={isMediaDataLoading}
              mediaDataError={mediaDataError}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileOverview;
