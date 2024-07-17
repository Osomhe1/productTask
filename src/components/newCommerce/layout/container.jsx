// import Nav from "./Navbar";
import Stacked from "../shared/Stacked";
import { Box } from "@mui/material";
import StackSide from "./sideStack";

import MobileNav from "./mobile/topnavmobile";
import MobileSwitch from "./mobile/mobileSwitchnav";
const Container = ({ main }) => {
  return (
    <>
      <MobileNav />
      <MobileSwitch />
      <Box
        className="w-full main_commerce"
        sx={{
          background: "#F5F5F5",
          // paddingLeft: "14.8em",
        }}
      >
        <Stacked
          d="row"
          g="1rem"
          jc="space-between"
          ai="start"
          cname="layout_main"
        >
          {/* <Body /> */}
          {main}
          {/* stackside-tobereplaced-soon */}
          <Box
            pt={3}
            flex={2}
            bgcolor="#ffff"
            pb={3}
            sx={{ position: "sticky", top: 0 }}
            className="sideStacknav"
          >
            <StackSide />
          </Box>
        </Stacked>
      </Box>
    </>
  );
};

// stylings

export default Container;
