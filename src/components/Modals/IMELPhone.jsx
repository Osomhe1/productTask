import Spinner from "components/Spinner";
import { useDeletePhone } from "Hooks/profile/useDeleteGadget";
import { useProfile } from "Hooks/profile/useProfile";
import { Link } from "react-router-dom";

const buttonStyle =
  "w-full h-[35px] p-[10px] gap-[10px] flex-1 rounded-[10px] text-center border-none text-[#fff] text-[14px] font-light transition-all duration-300 ease-in-out";

const IMELPhone = ({ name, id_number, id}) => {
  const { gadgetStatus, deleteGadget, deleteGadgetError } = useDeletePhone();

  const {profileData} = useProfile()
  const username = profileData?.data?.data?.user?.username

  const handleDelete = () => {
    deleteGadget(id);
  };

  return (
    <>
      <div className="flex p-[10px] flex-col gap-[10px] rounded-[10px] border border-[#d0d5dd]">
        <div className="py-[8px] px-[14px] rounded-[7px] border border-[#d0d5dd]">
          <h4 className="text-[14px] m-0 text-gray-950">{name}</h4>
          <p className="overflow-hidden text-[14px] mt-1 p-0 text-left text-ellipsis w-[70%]">
            {id_number}
          </p>
        </div>

        <div className="flex gap-[10px]">
          <button
            className={buttonStyle + " bg-[#f00] hover:bg-[#d60808]"}
            onClick={handleDelete}
          >
            {gadgetStatus === "pending" ? <Spinner /> : "Delete"}
          </button>
          <Link
            to={`/${username}/gadgets/phone-imei/edit/${id}`}
            className={
              buttonStyle +
              " bg-[#4f0da3] hover:bg-[#3c0a7e] clickModalOpen no-underline"
            }
            id="btn"
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
};

export default IMELPhone;
