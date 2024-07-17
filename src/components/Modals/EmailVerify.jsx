import { useNavigate } from "react-router-dom";
import ActionButton from "../Commons/Button";
import toast from "react-hot-toast";
import { ReSendOTP } from "api/services/auth&poll";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export const EmailVerify = ({ setIsEmailVerify }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleOTP = async () => {
    try {
      setLoading(true);
      const response = await ReSendOTP("account_verification");
      console.log("ReSendOTP_res", response);
      if (response.status === 200) {
        toast.success(response.data.message || "OTP Sent!");

        setIsEmailVerify(false);

        navigate("/verify", { replace: true });
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 rounded-[10px] mx-10">
      <div className="flex justify-end w-full cursor-pointer">
        <FaTimes
          className="text-black text-xl"
          onClick={() => setIsEmailVerify(false)}
        />
      </div>
      <h1 className="text-center mb-4 text-red-500 font-bold">Ooopsss!!</h1>
      <h2 className="text-[14px] md:text-[16px] mb-14 text-center">
        You need to verify your Email Address
      </h2>

      <ActionButton
        bg={"pruplr"}
        label={loading ? "Resending..." : "Click here to re-send OTP"}
        onClick={HandleOTP}
        loading={loading}
      />
      <h3 className="mt-4 text-[12px] text-center">
        An OTP will be sent to your email address
      </h3>
    </div>
  );
};
