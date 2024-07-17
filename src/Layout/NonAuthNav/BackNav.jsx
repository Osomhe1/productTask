import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const BackNav = () => {
  const navigate = useNavigate();
  return (
    <div className="non-navbar-container">
      <div className="navbar">
        <AiOutlineArrowLeft className="back-icon cursor-pointer" size={20} />
      </div>

      <div className="logon cursor-pointer" onClick={()=>navigate("/Signin")}>
        <img src="/images/lo2.png" alt="" />
      </div>
    </div>
  );
};

export default BackNav;
