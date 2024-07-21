import { useNavigate } from "react-router-dom";
import BackNav from "../../Layout/NonAuthNav/BackNav";
import ForgotComponent from "../../components/ForgotComp/ForgotComp";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/signin");
  };

  return (
    <div className="forgot-pass-container">
      <div className="back-bx" onClick={goBack}>
        <BackNav />
      </div>
      <div className="forgot-boxx">
        <ForgotComponent />
      </div>
    </div>
  );
};

export default ForgotPassword;
