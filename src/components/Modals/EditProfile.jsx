import { useRef, useState } from "react";
import { MdOutlineAddPhotoAlternate, MdEdit } from "react-icons/md";
import ModalHeader from "./ModalHeader";
import ModalWrapper from "./ModalWrapper";
import img from "../../assets/profile_images/profile-cover.png";
import ProfileInput from "../ProfileComponents/ProfileInput";
import ProfileEditOption from "../ProfileComponents/ProfileEditOption";
import ModalButton from "./ModalButton";
import CustomDropdown from "./CustomDropdown";
import { day, genderData, month, years } from "utils/helper";
import { useEditProfile } from "Hooks/profile/useEditProfile";
import ErrorMessage from "./ErrorMessage";
import Spinner from "components/Spinner";
import { mainURL } from "services/profile_business_API";
import { useProfile } from "Hooks/profile/useProfile";
import { FaUser } from "react-icons/fa6";

const EditProfile = ({ onModalClose }) => {
  const { profileData } = useProfile();
  const { updateStatus, isUpdating, updatingProfile } = useEditProfile();

  const userInfo = profileData?.data?.data;

  const [cover, setCover] = useState(null);
  const [image, setImage] = useState(null);
  const [tempCover, setTempCover] = useState("");
  const [tempImage, setTempImage] = useState("");

  const [data, setData] = useState({
    first_name: userInfo?.user?.first_name || "",
    last_name: userInfo?.user?.last_name || "",
    occupation: userInfo?.occupation || "",
    city: userInfo?.address?.city || "",
    state: userInfo?.address?.state || "",
    country: userInfo?.address?.country || "",
    bio: userInfo?.bio || "",
    day: new Date(userInfo?.date_of_birth).getDate() || "",
    month: new Date(userInfo?.date_of_birth).getMonth() + 1 || "",
    year: new Date(userInfo?.date_of_birth).getFullYear() || "",
    gender: userInfo?.gender || "",
    cover_image: userInfo?.cover_image || null,
    profile_picture: userInfo?.profile_picture || null,
  });
  const [bioValidate, setBioValidate] = useState(false);

  const fileRef = useRef(null);

  const handleCoverChange = (event) => {
    const file = event.target.files[0];

    setCover(file);

    setTempCover(URL.createObjectURL(file));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    setTempImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setBioValidate(false);

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bioChar = data.bio.split(" ");

    if (bioChar.length > 50) {
      return setBioValidate(true);
    }

    const dateOfBirth = `${data.year}-${data.month}-${data.day}`;

    const userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      city: data.city,
      state: data.state,
      country: data.country,
      date_of_birth: dateOfBirth,
      bio: data.bio,
      occupation: data.occupation,
      gender: data.gender,
      profile_picture: image,
      cover_image: cover,
    };

    updatingProfile(userData);

    console.log("form data", userData);
  };

  return (
    <ModalWrapper>
      <ModalHeader header="Edit profile" onModalClose={onModalClose} />
      <form className=" px-[20px] py-[10px]" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="relative w-full h-[150px] shadow-md">
            <div className="w-full h-full">
              {data?.cover_image || tempCover ? (
                <img
                  src={tempCover || data?.cover_image}
                  alt="User"
                  className="w-full h-full object-cover "
                />
              ) : (
                <div className="bg-[#4f0da3] h-[100%] w-[100%] flex justify-center items-center">
                  <div className="flex items-center gap-2 flex-col justify-center text-white">
                    <MdOutlineAddPhotoAlternate className="text-[20px] " />
                    <h2 className="text-[14px] text-white">Add cover photo</h2>
                  </div>
                </div>
              )}
            </div>

            <input
              type="file"
              id="cover"
              accept="image/*"
              className="hidden"
              ref={fileRef}
              onChange={handleCoverChange}
            />
            <label
              htmlFor="cover"
              className="absolute right-[6px] bottom-[6px] w-[24px] h-[24px] bg-[#ff8a15] cursor-pointer rounded-full flex justify-center items-center text-white text-[18px]"
            >
              <MdEdit size={14} />
            </label>
          </div>

          <div className="-mt-[7.5rem] h-[200px] flex justify-center items-center flex-col gap-[13px]">
            <div className="relative w-[100px] h-[100px]">
              {data?.profile_picture || tempImage ? (
                <img
                  src={tempImage || data?.profile_picture}
                  alt="Main"
                  className="absolute w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-white border-[1px] border-[#4f0da3] flex items-center justify-center ">
                  <div className="w-[60%] flex items-center justify-center h-[60%] rounded-full bg-[#4f0da3]">
                    <FaUser size={30} color="white" />
                  </div>
                </div>
              )}

              <input
                type="file"
                id="profile"
                accept="image/*"
                className="hidden"
                ref={fileRef}
                onChange={handleImageChange}
              />
              <label
                htmlFor="profile"
                className="absolute right-[5px] bottom-[0px] w-[24px] h-[24px] bg-[#ff8a15] rounded-full cursor-pointer flex justify-center items-center text-white text-[18px]"
              >
                <MdEdit size={14} />
              </label>
            </div>

            <p className="text-[14px] font-light">Add profile picture</p>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="edit_profile_content_direct_wrapper">
            <ProfileInput
              placeholder="First name"
              name="first_name"
              onChange={handleChange}
              value={data?.first_name || ""}
            />
            <ProfileInput
              placeholder="Last name"
              name="last_name"
              onChange={handleChange}
              value={data?.last_name || ""}
            />
          </div>

          <div className="edit_profile_content_direct_wrapper">
            <ProfileInput
              placeholder="Occupation"
              name="occupation"
              onChange={handleChange}
              value={data?.occupation || ""}
            />
            <ProfileInput
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={data?.city || ""}
            />
            <ProfileInput
              placeholder="State"
              name="state"
              onChange={handleChange}
              value={data?.state || ""}
            />
            <ProfileInput
              placeholder="Country"
              name="country"
              onChange={handleChange}
              value={data?.country || ""}
            />
          </div>

          <div className="edit_profile_content_direct_wrapper">
            <ProfileEditOption header="Date of Birth">
              <CustomDropdown
                stallValue={data?.day || "Day"}
                menu={day}
                name="day"
                setData={setData}
              />
              <CustomDropdown
                stallValue={data?.month || "Month"}
                menu={month}
                name="month"
                setData={setData}
              />
              <CustomDropdown
                stallValue={data?.year || "Year"}
                menu={years}
                name="year"
                setData={setData}
              />
            </ProfileEditOption>

            <ProfileEditOption header="Gender">
              <CustomDropdown
                stallValue={data?.gender || "Gender"}
                menu={genderData}
                name="gender"
                setData={setData}
              />
            </ProfileEditOption>
          </div>

          <div className="edit_profile_input_and_textarea_container bg-white border relative mt-4">
            <label className="absolute -top-4 left-5 z-10  bg-white text-neutral-400">
              Bio
            </label>
            <textarea
              placeholder=""
              onChange={handleChange}
              name="bio"
              className="!w-full h-[80px] resize-none lg:h-[70px] xl:h-[90px] outline-none text-black"
              value={data?.bio}
            ></textarea>

            <span className="self-end">Max 50 words</span>
          </div>
          {bioValidate && <ErrorMessage>Maximum of 50 words</ErrorMessage>}

          <ModalButton>
            {updateStatus === "pending" ? <Spinner /> : "Save & Continue"}
          </ModalButton>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditProfile;
