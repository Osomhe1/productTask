import { useEffect, useRef, useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./profile.css";
import ProfileOverviewDetails from "./ProfileOverviewDetails";
import ProfileOverviewNav from "./ProfileOverviewNav";
import ads from "../../assets/profile_images/Jumia-Celebrate-the-Game.png";
import ProfileActivities from "./ProfileActivities";
import useGetProfileMedia from "Hooks/profile/useGetProfileMedia";
import Spin from "components/Spin/Spin";
import { useGetPublicProfile } from "Hooks/profile/useGetPublicProfile";
import PublicProfileOverviewDetails from "./PublicProfileOverviewDetails";
import PublicProfileOverviewNav from "./PublicProfileOverviewNav";
import { useProfile } from "Hooks/profile/useProfile";

const PublicProfileOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const [initialLoading, setInitialLoading] = useState(true);

  const {
    profileData,
    isProfileDataLoading,
    profileDataError,
    refetchProfile,
    isProfileFetching,
  } = useGetPublicProfile(id);

  const {profileData: userProfileData} = useProfile()

  const {
    isMediaDataLoading,
    mediaData,
    mediaDataError,
    mediaStatus,
    refetchMediaData,
  } = useGetProfileMedia();

  //const userStickings = userProfileData?.data?.data?.stickings
  const userStickings = userProfileData?.data?.data?.stickings

  const scrollToTop = useCallback(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", top: 0 });
    }
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop, id]);

  
  const userMedia = useMemo(() => {
    if (mediaData?.data?.data?.posts && profileData?.data?.data?.user?.username) {
      return mediaData.data.data.posts.filter(
        (item) => item.user.username === profileData.data.data.user.username
      );
    }
    return [];
  }, [mediaData, profileData]);

  const allMedia = useMemo(() => {
    return userMedia?.filter(item => item?.files[0]).map(item => item.files[0]);
  }, [userMedia]);

  /* useEffect(() => {
    refetchMediaData();
    refetchProfile()
  }, [refetchMediaData, refetchProfile, id]); */

  if (isProfileDataLoading || isProfileFetching) {
    return <Spin />;
  } 
  
  if (profileDataError) {
    return <h4 className="text-center">Please check your network</h4>;
  }

  return (
    <div className="lg:p-[5px]" ref={pageRef}>
      <div className="flex flex-col gap-[10px] py-[15px] px-[10px]">
        {/* <div className="flex gap-4 items-center">
          <FaArrowLeftLong
            onClick={() => navigate(-1)}
            className="cursor-pointer text-[18px] mb-1"
          />
          <h3 className="text-[18px]">Stickings</h3>
        </div> */}
        <PublicProfileOverviewNav />
        <PublicProfileOverviewDetails data={profileData?.data?.data} id={id} userStickings={userStickings}/>
      </div>

      <div className="hidden lg:block">
        <img src={ads} alt="Ads" className="w-full h-full object-contain" />
      </div>

      <ProfileActivities
        allMedia={allMedia}
        mediaStatus={mediaStatus}
        isMediaDataLoading={isMediaDataLoading}
        mediaDataError={mediaDataError}
      />
    </div>
  );
};

export default PublicProfileOverview;

