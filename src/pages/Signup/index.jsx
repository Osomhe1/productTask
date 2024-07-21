// import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import SignForm from "../../components/SignUpInComp/SignForm";
import WelcomeComp from "../../components/SignUpInComp/WelcomeComp";
import "./style.css";

const Signup = () => {
  return (
    <div className="signup-container">
      {/* <NonAuthNavbar nono={"nono"} /> */}
      <div className="welc-form-containr">
        <div className="ire">
        <WelcomeComp />
        </div>
        <SignForm />
      </div>
    </div>
  );
};

export default Signup;
