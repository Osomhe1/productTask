import { useEffect, useState } from "react";
import { MdEdit, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { Checkbox } from "antd";
import { IoShieldCheckmark } from "react-icons/io5";
import { category, day, month, years } from "utils/helper";

import ModalWrapper from "../Modals/ModalWrapper";
import ModalHeader from "../Modals/ModalHeader";
import img from "../../assets/profile_images/profile-cover.png";
import mark from "../../assets/profile_images/mark.svg";
import ProfileInput from "../ProfileComponents/ProfileInput";
import ProfileEditOption from "../ProfileComponents/ProfileEditOption";
import ModalButton from "../Modals/ModalButton";
import BusinessSwitch from "./BusinessSwitch";
import CustomDropdown from "components/Modals/CustomDropdown";
import { useCreateBusiness } from "pages/BusinessProfile/useCreateBusiness";
import Spinner from "components/Spinner";
import ErrorMessage from "components/Modals/ErrorMessage";
import { useModal } from "Hooks/useModal";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const EditBusinessProfile = ({ type, onModalClose }) => {
  const [cover, setCover] = useState("");
  const [profile, setProfile] = useState("");
  const [addNumber, setAddNumber] = useState(1);
  const [available, setAvailable] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const { setModal } = useModal();

  const { creating, business } = useCreateBusiness();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const { profile: userInfo } = useProfileDetails();

  const modalType = Boolean(type);

  // using this to updating the checkbox for always available
  useEffect(() => {
    if (data.availability) {
      const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
        data?.availability;

      if (
        monday &&
        tuesday &&
        wednesday &&
        thursday &&
        friday &&
        saturday &&
        sunday
      ) {
        return setAvailable(true);
      }

      setAvailable(false);
    }
  }, [data?.availability]);

  const handleCover = (event) => {
    const file = event.target.files[0];

    setData((prev) => ({
      ...prev,
      cover_image: file,
    }));
    setCover(URL.createObjectURL(file));
  };

  const handleProfile = (event) => {
    const file = event.target.files[0];

    setData((prev) => ({
      ...prev,
      media: file,
    }));

    setProfile(URL.createObjectURL(file));
  };

  const handleAddNumber = () => {
    setAddNumber((num) => (num !== 4 ? num + 1 : 4));
  };

  const handleAvailability = (e) => {
    setData((prev) => ({
      ...data,
      availability: {
        ...prev.availability,
        monday: !available,
        tuesday: !available,
        wednesday: !available,
        thursday: !available,
        friday: !available,
        saturday: !available,
        sunday: !available,
      },
    }));

    setAvailable((available) => !available);
  };

  const handleChange = (e) => {
    setError({});

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoneNumbers = (e) => {
    setError();

    setData((prev) => ({
      ...prev,
      phone_number: {
        ...prev.phone_number,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleBusiness = (e) => {
    e.preventDefault();

    // validating business required fields
    if (!data.business_name) {
      return setError({
        business_name: "Business name is required!",
      });
    }

    if (!data.date_day || !data.date_month || !data.date_year) {
      return setError({
        founded_date: "Founded date is required!",
      });
    }

    if (!data.address) {
      return setError({
        address: "Address is required!",
      });
    }

    if (!data.phone_number) {
      return setError({
        phone_number: "One phone number is required!",
      });
    }

    if (!data.username) {
      return setError({
        username: "Username is required!",
      });
    }

    if (!data.password) {
      return setError({
        password: "Password is required!",
      });
    }

    if (!data.bio) {
      return setError({
        bio: "Bio is required!",
      });
    }

    if (!data.availability) {
      return setError({
        availability: "Availability is required!",
      });
    }

    if (Object.values(data?.originalAvailability).length < 6) {
      return setError({
        availability: "All availability is required!",
      });
    }

    setError({});

    const foundedDate = `${data.date_year}-${data.date_month}-${data.date_day}`;

    const mail = Math.floor(Math.random() * 230 + 1);

    const fullData = {
      business_name: data.business_name,
      address: data.address,
      about: data.bio,
      category_id: 1,
      business_email: "bakoaayofe@gmail.com",
      website_link: "https://2geda.net/",
      founded_on: foundedDate,
      phone_number: data.phone_number,
      user: {
        email: `bakoayofe${mail}@gmail.com`,
        username: data.username,
        password: data.password,
      },
      availability: data.originalAvailability,
    };

    business(fullData, {
      onSuccess: (response) => {
        console.log(response);

        if (!response.status) {
          if (response.message === "Validation error!") {
            setError({
              valError: Object.values(
                response.data.user.non_field_errors
              ).join(),
            });
          }
        }

        if (response.status) {
          queryClient.invalidateQueries({
            queryKey: ["business"],
          });

          setModal({});
          navigate("/manage-business");
          return;
        }
      },
    });
  };

  return (
    <ModalWrapper>
      <ModalHeader
        header={`${modalType ? "Edit" : "Create"} Business Profile`}
        onModalClose={onModalClose}
      />

      <form
        onSubmit={handleBusiness}
        className="h-[92vh] px-[20px] py-[10px] overflow-y-auto lg:h-[85vh]"
      >
        <div className="flex flex-col">
          <div className="relative w-full h-[150px] shadow-md">
            <div className="w-full h-full">
              {cover ? (
                <img
                  src={cover ? cover : img}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#4f0da3] flex justify-center items-center flex-col text-white gap-[10px]">
                  <MdOutlineAddPhotoAlternate className="text-[20px]" />
                  <h2 className="text-[14px]">Add cover photo</h2>
                </div>
              )}
            </div>

            <input
              type="file"
              id="cover"
              className="hidden"
              onChange={handleCover}
            />
            <label
              htmlFor="cover"
              className="absolute right-[6px] bottom-[6px] w-[32px] h-[32px] bg-[#ff8a15] cursor-pointer rounded-full flex justify-center items-center text-white text-[18px]"
            >
              <MdEdit />
            </label>
          </div>

          <div className="-mt-[7.5rem] h-[200px] flex justify-center items-center flex-col gap-[13px]">
            <div className="relative w-[130px] h-[130px]">
              {profile ? (
                <img
                  src={profile}
                  alt="Main"
                  className="absolute w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-[80%] border-[#4f0da3] bg-[#f3f3f3]"></div>
              )}

              <input
                type="file"
                id="profile"
                className="hidden"
                onChange={handleProfile}
              />
              <label
                htmlFor="profile"
                className="absolute right-[6px] bottom-[6px] w-[32px] h-[32px] bg-[#ff8a15] rounded-full cursor-pointer flex justify-center items-center text-white text-[18px]"
              >
                <MdEdit />
              </label>
            </div>

            <p className="text-[14px] font-light">
              Add business display picture
            </p>
          </div>
        </div>

        <div className="text-center text-[#4F0DA3] text-[15px] font-medium">
          Fill Business Details
        </div>

        <div className="flex flex-col gap-[20px] mt-[5rem]">
          {/* TOP */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px] w-full">
              <div className="w-full">
                <ProfileInput
                  placeholder="Profession or business name"
                  name="business_name"
                  onChange={handleChange}
                  setError={setError}
                />
                <span>
                  {error?.business_name && (
                    <ErrorMessage> {error.business_name}</ErrorMessage>
                  )}
                </span>
                <span>
                  {error?.valError && (
                    <ErrorMessage> {error.valError}</ErrorMessage>
                  )}
                </span>
              </div>

              <div className="w-full">
                <CustomDropdown
                  stallValue="Category"
                  menu={category}
                  name="category"
                  // onChange={handleChange}
                  setData={setData}
                />
              </div>
            </div>

            <div className="flex gap-[20px] w-full">
              <div className="w-full">
                <ProfileEditOption header="Date Founded">
                  <CustomDropdown
                    stallValue="Day"
                    menu={day}
                    name="date_day"
                    onChange={handleChange}
                    setData={setData}
                  />
                  <CustomDropdown
                    stallValue="Month"
                    menu={month}
                    name="date_month"
                    onChange={handleChange}
                    setData={setData}
                  />
                  <CustomDropdown
                    stallValue="Year"
                    menu={years}
                    name="date_year"
                    onChange={handleChange}
                    setData={setData}
                  />
                </ProfileEditOption>
                <span>
                  {error?.founded_date && (
                    <ErrorMessage> {error.founded_date}</ErrorMessage>
                  )}
                </span>
              </div>

              <div className="w-full">
                <label className="opacity-0">None</label>

                <ProfileInput
                  placeholder="Address"
                  onChange={handleChange}
                  name="address"
                />

                <span>
                  {error?.address && (
                    <ErrorMessage> {error.address}</ErrorMessage>
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              {Array.from({ length: addNumber }, (_, i) => i + 1).map((num) => (
                <ProfileInput
                  placeholder={`Phone number ${num}`}
                  key={num}
                  name={`phone${num}`}
                  onChange={handlePhoneNumbers}
                />
              ))}

              <span className="-mt-6">
                {error?.phone_number && (
                  <ErrorMessage> {error.phone_number}</ErrorMessage>
                )}
              </span>

              <div
                onClick={handleAddNumber}
                className="self-end w-[166px] h-[53px] border border-gray-600 rounded-md flex justify-center items-center  gap-[1.5rem] !text-gray-500 text-[19px] cursor-pointer"
              >
                <GoPlus /> Add another
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px] w-full">
              <div className="w-full">
                <ProfileInput
                  placeholder="Create username"
                  name="username"
                  onChange={handleChange}
                />
                <span>
                  {error?.username && (
                    <ErrorMessage> {error.username}</ErrorMessage>
                  )}
                </span>

                <span>
                  {error?.valError && (
                    <ErrorMessage> {error.valError}</ErrorMessage>
                  )}
                </span>
              </div>

              <div className="w-full">
                <ProfileInput
                  placeholder="Create Password"
                  name="password"
                  onChange={handleChange}
                />
                <span>
                  {error?.password && (
                    <ErrorMessage> {error.password}</ErrorMessage>
                  )}
                </span>
              </div>
            </div>

            <div className="edit_profile_input_and_textarea_container">
              <div className="w-full flex flex-col">
                <textarea
                  placeholder="Bio"
                  className="resize-none"
                  name="bio"
                  onChange={handleChange}
                ></textarea>

                <span className="self-end">Max 50 words</span>
              </div>
            </div>

            <span className="-mt-6">
              {error?.bio && <ErrorMessage> {error.bio}</ErrorMessage>}
            </span>
          </div>

          {/* BOTTOM */}
          <div>
            <div className="flex flex-col gap-[15px] py-[3rem]">
              <h1 className="text-[16px] font-normal text-[#000000cc]">
                Set Business availability
              </h1>

              <div className="flex items-center gap-[5px] text-[13px] font-light text-[#00000099]">
                <span>Always available</span>
                <Checkbox onChange={handleAvailability} checked={available} />
              </div>

              <div className="flex flex-col gap-[10xp]">
                <BusinessSwitch
                  day="Mon"
                  type="monday"
                  setData={setData}
                  checked={data?.availability?.monday}
                />
                <BusinessSwitch
                  day="Tue"
                  type="tuesday"
                  setData={setData}
                  checked={data?.availability?.tuesday}
                />
                <BusinessSwitch
                  day="Wed"
                  type="wednesday"
                  setData={setData}
                  checked={data?.availability?.wednesday}
                />
                <BusinessSwitch
                  day="Thur"
                  type="thursday"
                  setData={setData}
                  checked={data?.availability?.thursday}
                />
                <BusinessSwitch
                  day="Fri"
                  type="friday"
                  setData={setData}
                  checked={data?.availability?.friday}
                />
                <BusinessSwitch
                  day="Sat"
                  type="saturday"
                  setData={setData}
                  checked={data?.availability?.saturday}
                />
                <BusinessSwitch
                  day="Sun"
                  type="sunday"
                  setData={setData}
                  checked={data?.availability?.sunday}
                />
              </div>

              <span className="-mt-6">
                {error?.availability && (
                  <ErrorMessage> {error.availability}</ErrorMessage>
                )}
              </span>
            </div>

            <div className="flex justify-center items-center flex-col gap-[20px]">
              <p className="h-[40px] p-[10px] flex items-center gap-[6px] bg-[#f2e9fa] rounded-[3px] text-[12px] font-normal text-[#11132b]">
                <IoShieldCheckmark className="text-[19px]" />{" "}
                <span>
                  Your data is protected under the Standard International User
                  Act
                </span>
              </p>

              <p>
                {error?.message && (
                  <ErrorMessage> {error.message}</ErrorMessage>
                )}
              </p>

              <ModalButton>
                {creating === "pending" ? <Spinner /> : "Create Business"}
              </ModalButton>
            </div>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditBusinessProfile;
