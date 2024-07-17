import React from "react";
import { Typography, AppBar, Toolbar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../../../assets/profile_images/2geda.png";
import logomobile from "../../../assets/2geda-icon.png";
import Stacked from "../shared/Stacked";
import InputField from "../shared/inputField";
import Profile from "../../../assets/images/Profile-pic.png";
import Header from "../typography/txtHeader";
import { BiSearch } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
const StyledBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "70px !important",
});

const inpStyle = {
  div: {
    borderRadius: "10px",
  },
  input: {
    padding: "10px 12px",
    textIndent: "30px",
    width: "400px",
    fontFamily: "Ubuntu",
    "&::placeholder": {
      color: "#000000",
      fontStyle: "italic",
      fontSize: "14px",
      fontFamily: "Inter",
    },
  },
};
const Nav = ({ route }) => {
  //   const { togSlide } = useContext(MainContext);
  //   const slideToggle = () => {
  //     togSlide();
  //   };
  return (
    <AppBar
      className="navBar"
      position="sticky"
      sx={{
        top: 0,
        zIndex: "99",
        background: "#ffff",
        paddingLeft: "13em",
      }}
    >
      <StyledBar>
        <Stacked d="row" g={2} ai="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              className="logo_stack"
            >
              <img src={logo} alt="2geda-logo" className="desktop_logo" />
              {/* mobile-logo */}
              <img
                src={logomobile}
                alt="2geda-logo-mobile"
                className="mobile_logo"
              />
              <Typography
                variant="body1"
                className="logo_text"
                sx={{
                  color: "#4F0DA3",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                2Geda
              </Typography>
            </Stack>
          </Link>
        </Stacked>
        {/* navbar-mobile-layout */}
        <div className="mobile_display">
          <Header title={route} cl="#ffff" fw="500" fs="1.25rem !important" />
        </div>

        {/* icon-stack-mobile-search-carts */}
        <div className="items-center gap-[.8rem] mobile_display">
          <div>
            <BiSearch fontSize="20px" />
          </div>
          <Link to="/commerce/cart" style={{ color: "#ffff" }}>
            <MdOutlineShoppingCart fontSize="20px" />
          </Link>
        </div>
        <Stack
          direction="row"
          alignItems="center"
          gap="2.2rem"
          className="nav_lg_data"
        >
          <InputField
            placeholder="Search name, Place and Jobs"
            styles={inpStyle}
          />
          <Stack gap="1px" alignItems="center">
            <img src={Profile} alt="profile-pic" />
            <Typography variant="span" color="black" fontSize="12px">
              My Profile
            </Typography>
          </Stack>
        </Stack>
      </StyledBar>
    </AppBar>
  );
};

export default Nav;
