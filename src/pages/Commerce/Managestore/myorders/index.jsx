import React from "react";
import BoxContainer from "components/newCommerce/layout/containerBox";
import { Box } from "@mui/material";
import Orders from "./Orders";
const Myorder = () => {
  return (
    <>
      <Box flex={7}>
        <BoxContainer main={<Orders />} />
      </Box>
    </>
  );
};

export default Myorder;
