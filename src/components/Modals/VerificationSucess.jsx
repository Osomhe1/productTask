import { FaCheck } from "react-icons/fa";
import ActionButton from "../Commons/Button";

const VerificationSucess = ({ handleRequestSucessClose }) => {
  // const navigate = useNavigate();

  // const gotoProfile = () => {
  //   navigate("/profile");
  // };
  return (
    <div className="verif-sucess-container flex">
      <div className="checked-sucss flex">
        <FaCheck />
      </div>
      <div className="req-sent">Request sent</div>
      <div className="pass-info">
        Profile Verification takes up to a weeks or more at times.
      </div>
      <div className="dd-btn" onClick={handleRequestSucessClose}>
        <ActionButton label={"Done"} />
      </div>
    </div>
  );
};

export default VerificationSucess;
