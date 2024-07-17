import { getProfileData } from "api/services/profile";
import { useEffect, useState } from "react";

const RightBar = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);

  const getProfileDataHandler = async () => {
    try {
      const res = await getProfileData();
      if (res.data.status) {
        setProfileData(res.data.data);
      }
    } catch (error) {
      console.log("getProfileDataHandler_error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileDataHandler();
  }, []);

  return (
    <div className="flex gap-[20px]">
      <div className="middle-side-container w-full">
        <img src="images/makeupad.svg" alt="ad-pics" className="w-full" />
      </div>
      <div className="right-side-container">
        <div className="w-[260px]">
          <div className="flex w-full justify-between my-[10px] items-center">
            <div className="text-[14px] lg:text-[16px] font-bold">Stickers</div>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {profileData?.stickers?.length === 0 ? (
                <p className="text-[18px] w-full">No Stickers</p>
              ) : (
                <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 mb-10 bg-white rounded-[10px] p-4 w-full">
                  {profileData?.stickers?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-[6px] items-center"
                    >
                      <div
                        className="w-[45px] h-[45px] rounded-full bg-[#4F0DA3] bg-cover bg-no-repeat"
                        style={{
                          backgroundImage: `url(${
                            item?.profile_picture || "No Image"
                          })`,
                        }}
                      ></div>
                      <p>{item?.username}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
