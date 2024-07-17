import { useGetAllAccounts } from "Hooks/profile/useGetAllAccounts";
import { useProfile } from "Hooks/profile/useProfile";
import Spinner from "components/Spinner";
import { useNavigate } from "react-router-dom";
import { noUser } from "utils/noUser";

const Follower = () => {
  const navigate = useNavigate();
  
  const { profileData, isProfileDataLoading, profileDataError } = useProfile();
  const { allAccounts, isAllAccountsLoading } = useGetAllAccounts();


  const stickers = profileData?.data?.data?.stickers;
  const accounts = allAccounts?.data?.data?.filter(
    (item) => item.profile_picture?.length
  );

  const data = stickers?.length ? stickers : accounts;
  const isStickers = stickers?.length ? true : false;

  const navStickers = (item) => {
    navigate(`/${item?.username}`);
  };

  const navAccounts = (item) => {
    navigate(`/${item?.user?.username}`);
  };

  return (
    <div className="follower-container" style={{ width: "100%" }}>
      {stickers?.length ? (
        <div className="follow-see mx-auto" style={{ width: "90%" }}>
          <div className="follow-txt">Stickers</div>

          <div
            className="follow-txt al-see cursor-pointer"
            onClick={() => navigate(`/${profileData?.data?.data?.user?.username}/stickers`)}
          >
            See all
          </div>
        </div>
      ) : null}
      {!stickers?.length ? (
        <div className="follow-see mx-auto" style={{ width: "90%" }}>
          <div className="follow-txt">People you may know</div>

          {/* <div
            className="follow-txt al-see cursor-pointer"
            onClick={() => navigate("/profile/stickers")}
          >
            See all
          </div> */}
        </div>
      ) : null}
      <div
        className={`
        ${
          !stickers?.length || profileDataError
            ? "bg-transparent px-4"
            : "bg-white"
        }
        
        "grid grid-cols-3 w-full mx-auto py-2 px-0 rounded
        
        `}
      >
        {profileDataError ? (
          <p>Error occured</p>
        ) : (
          <div className="profile_sticker_box">
            {" "}
            {data?.slice(0, 8).map((item) => (
              <div
                className="foll-one flex justify-center items-center"
                key={item?.id}
              >
                <img
                  src={item?.profile_picture || noUser}
                  alt=""
                  onClick={() => {
                    if (isStickers) {
                      return navStickers(item);
                    } else {
                      return navAccounts(item);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Follower;
