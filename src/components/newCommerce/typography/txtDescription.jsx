import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Description = ({ title, sx, fs, fw, cl, st, align }) => {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: cl || "rgba(0, 0, 0, 0.6)",
          fontSize: fs || "1.3rem",
          fontWeight: fw || 400,
          ...sx,
          textAlign: align || "initial",
          fontFamily: "Ubuntu",
        }}
        styles={st}
      >
        {title}
      </Typography>
    </>
  );
};

Description.propTypes = {
  title: PropTypes.string || PropTypes.number,
};

export default Description;
