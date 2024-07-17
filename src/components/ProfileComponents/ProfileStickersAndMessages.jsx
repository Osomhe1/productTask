import { Link, useNavigate, useParams } from "react-router-dom";
import ProfileStickersBox from "./ProfileStickersBox";
import ProfileMessageLikeBox from "./ProfileMessageLikeBox";
import { useProfile } from "Hooks/profile/useProfile";
import { useGetAllAccounts } from "Hooks/profile/useGetAllAccounts";

const ProfileStickersAndMessages = () => {
  const navigate = useNavigate();

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


  const wrongPage = isOthers && !theUser ? true : false;

  return (
    <div className="stickersMessages">
      <div>
        {wrongPage ? null : stickers?.length ? (
          <div
            className="follow-see mx-auto"
            style={{ width: "100%", paddingTop: "8px" }}
          >
            <div className="follow-txt">Stickers</div>
            <div
              className="follow-txt al-see cursor-pointer"
              onClick={() =>
                navigate(`/${profileData?.data?.data?.user?.username}/stickers`)
              }
            >
              See all
            </div>
          </div>
        ) : null}

        {wrongPage ? null : !stickers?.length ? (
          <div
            className="follow-see mx-auto"
            style={{ width: "100%", paddingTop: "8px" }}
          >
            <div className="">People you may know</div>
          </div>
        ) : null}

        {wrongPage ? null : <ProfileStickersBox />}
      </div>

      {/* <ProfileMessageLikeBox header='Messages' newMessage='10'>
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <li className='message' key={i + 1}>
            <div className='left_content'>
              <img
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
                alt='Friend'
              />
            </div>

            <div className='info'>
              <h1>Abraham Adesanya</h1>
              <p>How was your flight Joe, i couldnt text last night</p>
            </div>

            <div className='right_content update'>
              <div>12:00</div>

              <div className='active'></div>
            </div>
          </li>
        ))}
      </ProfileMessageLikeBox> */}
    </div>
  );
};

export default ProfileStickersAndMessages;
