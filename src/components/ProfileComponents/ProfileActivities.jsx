import ProfileActivityButton from "./ProfileActivityButton";
import kuda from "../../assets/profile_images/kuda-ad.png";
import { EmptyResults } from "components/EmptyResults";
import ContainerLoading from "components/ContainerLoading";
import ProfileMedia from "./ProfileMedia";
import { useEffect, useState } from "react";

const ProfileActivities = ({
  allMedia,
  mediaDataError,
  mediaStatus,
  isMediaDataLoading,
  isMediaDataFetching
}) => {
  const [allMyMedia, setAllMyMedia] = useState(allMedia);
  const [tab, setTab] = useState("All Posts");

  console.log('all media', allMedia)
  

  const toggleMedia = (arg) => {
    let filteredMedia = allMedia;
  
    if (arg === "Music") {
      filteredMedia = allMedia?.filter((item) => item?.file_type.includes("audio/mpeg"));
    } else if (arg === "Images") {
      filteredMedia = allMedia?.filter((item) => item?.file_type?.includes("image"));
    } else if (arg === "Voice notes") {
      filteredMedia = allMedia?.filter((item) => item?.file_type?.includes("audio/wav"));
    } else if (arg === "Videos") {
      filteredMedia = allMedia?.filter((item) => item?.file_type?.includes("video"));
    } else if (arg === "Files") {
      filteredMedia = allMedia?.filter((item) => item?.file_type?.includes("application"));
    } else if (arg === "Location") {
      filteredMedia = allMedia?.filter((item) => item?.location?.length);
    }
  
    setAllMyMedia(filteredMedia);
  };

  useEffect(() => {
    setAllMyMedia(allMedia)
  }, [allMedia])
  
  
  const categories = [
    "All Posts",
    "Images",
    "Videos",
    "Voice notes",
    "Music",
    "Files",
  ];

  return (
    <div className="profile_activities">
      <div className="cta-btns p-4">
        {categories?.map((item, index) => (
          <ProfileActivityButton
            toggleMedia={toggleMedia}
            allMyMedia={allMyMedia}
            title={item}
            tab={tab}
            setTab={setTab}
            key={index}
          />
        ))}
      </div>

      
      {isMediaDataLoading ? (
        <ContainerLoading height={80} unit="px" />
      ) : !allMedia?.length ? (
        <div className="w-full h-[200px] flex justify-center items-center">
      <h2>No media files for now</h2>
    </div>
      ) : (
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-8 p-4">
          {allMyMedia?.map((item) => (
            <div className="lg:col-span-3 py-4 px-2" key={item?.id}>
              <ProfileMedia mediaFile={item}/>
            </div>
          ))}
        </div>
      )}

      <div className="profile_activities_bottom_ads">
        <img src={kuda} alt="KUDA" />
      </div>
    </div>
  );
};

export default ProfileActivities;
