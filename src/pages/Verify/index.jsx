import { useState } from "react";
import VerifyForm from "../../components/VerifyComp/verifyForm";
import "./style.css";
import VerifyModalSuc from "../../components/Modals/VerifyModalSuc";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [isVerify, setIsVerify] = useState(false);
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    setIsVerify(true);
    setTimeout(() => {
      navigate("/Signin");
    }, 1000);
  };

  return (
    <>
      <div className="verify-container">
        {isVerify && (
          <div className="modal-full-container mv-to-up">
            <VerifyModalSuc />
          </div>
        )}
        <div className="verify-box">
          <VerifyForm />
        </div>
      </div>
    </>
  );
};

export default Verify;
