import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";

const InputField = ({
  cname,
  placeholder,
  styles,
  value,
  r,
  l,
  ifDisabled,
  // handleClick,
}) => {
  const search = {
    position: "absolute",
    top: "50%",
    right: r || "10px",
    left: l,
    bottom: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <Box sx={{}}>
      <TextField
        className={cname}
        placeholder={placeholder}
        sx={styles}
        value={value || ""}
        disabled={ifDisabled}
      />
      <svg
        // onClick={handleClick()}
        className="svg_input"
        style={search}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.92969 14.1719C11.101 14.1719 13.6719 11.601 13.6719 8.42969C13.6719 5.25836 11.101 2.6875 7.92969 2.6875C4.75836 2.6875 2.1875 5.25836 2.1875 8.42969C2.1875 11.601 4.75836 14.1719 7.92969 14.1719Z"
          stroke="black"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9902 12.4902L15.3125 15.8125"
          stroke="black"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
};
export default InputField;
