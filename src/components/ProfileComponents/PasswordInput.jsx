import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ name, placeholder, onChange }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <div className="w-full py-[10px] px-[15px] flex items-center border border-[#c5c5c579] rounded-[10px] transition-all duration-300 ease-in-out focus-within:bg-[#dadada71]">
      <input
        type={show ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full h-[24px] text-[16px] font-medium border-none outline-none"
      />

      {show ? (
        <FaEyeSlash
          className="!text-[20px] cursor-pointer text-gray-600"
          onClick={handleClick}
        />
      ) : (
        <FaEye
          className="!text-[20px] cursor-pointer text-gray-600"
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default PasswordInput;
