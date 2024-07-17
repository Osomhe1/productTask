import BoxContainer from "components/newCommerce/layout/containerBox";
import { Box } from "@mui/material";
import Managestoreproduct from "./product";
const Storeproduct = () => {
  return (
    <>
      <BoxContainer
        main={
          <Box flex={7}>
            <Managestoreproduct />
          </Box>
        }
      />
    </>
  );
};

export default Storeproduct;
