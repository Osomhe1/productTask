import BoxContainer from "components/newCommerce/layout/containerBox";
import Productdetails from "components/newCommerce/layout/productdetails";
import { Box } from "@mui/material";
const Profuctinformation = () => {
  return (
    <>
      <BoxContainer
        main={
          <Box flex={7}>
            <Productdetails />
          </Box>
        }
      />
    </>
  );
};
export default Profuctinformation;
