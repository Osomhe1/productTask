import { useProfile } from "Hooks/profile/useProfile";

import { noUser } from "utils/noUser";
import Spinner from "components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllAccounts } from "Hooks/profile/useGetAllAccounts";

const ProfileStickersBox = () => {
  const { profileData, isProfileDataLoading, profileDataError } = useProfile();
  const { allAccounts, isAllAccountsLoading } = useGetAllAccounts();

  const { id: usernameID } = useParams();

  const stickers = profileData?.data?.data?.stickers;
  const accounts = allAccounts?.data?.data?.filter(
    (item) => item.profile_picture?.length
  );

  const isOthers = profileData?.data?.data?.user?.username !== usernameID;
  const theUser = allAccounts?.data?.data?.find(
    (item) => item?.user?.username === usernameID
  );

  const navigate = useNavigate();

  const data = stickers?.length ? stickers : accounts;

  const isStickers = stickers?.length ? true : false;

  const navStickers = (item) => {
    navigate(`/${item?.username}`);
  };

  const navAccounts = (item) => {
    navigate(`/${item?.user?.username}`);
  };

  return (
    <>
      {isProfileDataLoading || isAllAccountsLoading ? (
        <Spinner color="gray" />
      ) : profileDataError ? (
        <p>Error occured</p>
      ) : (
        <div className="profile_sticker_box">
          {" "}
          {data?.slice(0, 8).map((item) => (
            <img
              src={item?.profile_picture || noUser}
              alt=""
              key={item?.id}
              className="cursor-pointer"
              onClick={() => {
                if (isStickers) {
                  return navStickers(item);
                } else {
                  return navAccounts(item);
                }
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProfileStickersBox;
