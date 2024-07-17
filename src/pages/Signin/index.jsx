// import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import SigninForm from '../../components/SignUpInComp/SigninForm ';
import WelcomeComp from '../../components/SignUpInComp/WelcomeComp';

const Signin = () => {
  return (
    <div className='signup-container'>
      {/* <NonAuthNavbar nono={"nono"} /> */}
      <div className='welc-form-containr'>
        <div className='ire'>
          <WelcomeComp />
        </div>
        <SigninForm />
      </div>
    </div>
  );
};

export default Signin;
