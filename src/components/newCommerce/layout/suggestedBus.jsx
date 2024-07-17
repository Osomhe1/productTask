import React from "react";
import { Box, Button, Stack } from "@mui/material";
import Header from "../typography/txtHeader";
import Description from "../typography/txtDescription";
import Star from "../../../assets/images/Star.png";
const Suggested = ({ list }) => {
  const style = {
    color: "rgba(0, 0, 0,.7)",
    fontWeight: "400",
  };

  const descStyle = {
    marginTop: 0.2,
    fontSize: "12px !important",
    lineHeight: "1 !important",
    textAlign: "left",
  };
  return (
    <React.Fragment>
      <Stack
        direction="row"
        gap={1}
        alignItems="start"
        className="suggested_container"
      >
        <img
          src={list.busIcon}
          alt={`${list.busType}`}
          style={{
            width: "66px",
            // height: "60px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <Box>
          <Stack direction="row" gap={8} pb={0} mb={0}>
            <Header title={list.busType} sx={style} />
            <Button
              variant="contained"
              sx={{
                padding: "2px 2rem",
                background: "#4F0DA3 !important",
                fontFamily: "Ubuntu",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "capitalize",
                borderRadius: "15px",
                wordWrap: "no-wrap",
              }}
            >
              Stick
            </Button>
          </Stack>
          <Box mt={-1.3}>
            <Description title={`${list.busEstd}`} sx={descStyle} />
            <Description title={`${list.busAdd}`} sx={descStyle} />
            <Box>
              <img src={Star} alt="star" />
            </Box>
            <p
              style={{
                lineHeight: "0 !important",
                fontFamily: "Ubuntu",
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "1.25rem",
                // marginTop: -1,
                textAlign: "left",
              }}
            >
              {list.busRating}
            </p>
          </Box>
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default Suggested;
