import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import InputField from "../Commons/InputField";
import ActionButton from "../Commons/Button";

const NewPassword = () => {
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  return (
    <div className="new-pass-cont">
      <div className="pass-con">
        <InputField
          placeholder={"Enter New Password"}
          type={passwordVisible1 ? "text" : "password"}
        />
        <div className="eye-box" onClick={togglePasswordVisibility1}>
          {passwordVisible1 ? (
            <BsEyeSlashFill className="eye-icon" />
          ) : (
            <BsEyeFill className="eye-icon" />
          )}
        </div>
      </div>
      <div className="pass-con">
        <InputField
          placeholder={"Confirm Password"}
          type={passwordVisible2 ? "text" : "password"}
        />
        <div className="eye-box" onClick={togglePasswordVisibility2}>
          {passwordVisible2 ? (
            <BsEyeSlashFill className="eye-icon" />
          ) : (
            <BsEyeFill className="eye-icon" />
          )}
        </div>
      </div>
      <div className="btn-continu">
        <ActionButton label={"Reset password"} bg={"ma-d"} />
      </div>
    </div>
  );
};

export default NewPassword;
