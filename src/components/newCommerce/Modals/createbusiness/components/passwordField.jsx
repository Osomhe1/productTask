import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
const Passwordfield = ({ name, placeholder, value, onChange }) => {
  const [visible, setVisible] = useState(false);

  //switch visibilty
  function lockerCheck() {
    return visible ? "text" : "password";
  }
  return (
    <TextField
      onChange={onChange}
      InputProps={{
        name,
        type: lockerCheck(),
        value: value || "",
        placeholder,

        endAdornment: (
          <InputAdornment position={"end"}>
            <button
              className={`cursor-pointer`}
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <MdOutlineVisibility fontSize={"1.7rem"} />
              ) : (
                <MdOutlineVisibilityOff fontSize={"1.7rem"} />
              )}
            </button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Passwordfield;
