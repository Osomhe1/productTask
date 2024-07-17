import React from "react";
import { Box } from "@mui/material";
import Stacked from "../shared/Stacked";
import Header from "../typography/txtHeader";
import Description from "../typography/txtDescription";
import OneStar from "../../../assets/images/one_star.png";

// const positioning = [5, 4, 3, 2, 1];
const Reviewpolls = ({ rate, position }) => {
  const Poll = {
    width: "100%",
    height: "5px",
    background: "#D9D9D9",
    borderRadius: "20px",
    position: "relative",

    "&:before": {
      content: '""',
      position: "absolute",
      height: "inherit",
      borderRadius: "inherit",
      background: "#4f0da3",
      width: position || "50%",
    },
  };
  return (
    <React.Fragment>
      <Stacked
        d="row"
        jc="space-between"
        ai="center"
        g="20px"
        styles={{ width: "100%" }}
      >
        <Stacked d="row" ai="center" g="5px">
          <Header title={rate} sx={{ fontSize: "17px", fontWeight: "500" }} />

          <img src={OneStar} alt="Star" />
        </Stacked>
        {/* Poll */}
        <Box sx={Poll}></Box>
        {/* poll-values */}
        <Description title={position} sx={{ fontSize: "16px" }} />
      </Stacked>
    </React.Fragment>
  );
};

export default Reviewpolls;
