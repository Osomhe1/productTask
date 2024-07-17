// import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { MdHome, MdOutlineStorefront } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { CiCreditCard2 } from "react-icons/ci";
import {
  IoChatbubbleEllipsesOutline,
  IoTicketSharp,
  IoBookOutline,
} from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiStreamOn } from "react-icons/ci";
import { PiTelevisionThin } from "react-icons/pi";
import { MdHowToVote } from "react-icons/md";
import { ModalContext } from "Context/ModalContext";
import { useContext } from "react";

//styles-for -nav-side-bar texts
const ListText = styled(ListItemText)({
  color: "#C47EFB",
  marginLeft: "-25px",
  fontSize: "16px !important",
  fontFamily: "Ubuntu !important",
});
const Listitem = styled(ListItem)({
  borderRadius: "20px",
  "&:hover": { background: "rgb(83, 39, 131)" },
});

const Sidebar = () => {
  const { slide } = useContext(ModalContext);
  return (
    <>
      <Box
        className={`sidebar ${slide ? "silde_in" : ""}`}
        // className="sidebar"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "220px",
          height: "100vh",
          overflowY: "auto",
          background: "#4F0DA3",
          zIndex: "993",
        }}
      >
        <Box mt={8}>
          <List sx={{ marginLeft: "-4px" }}>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/">
                <ListItemIcon sx={{ color: "white" }}>
                  <MdHome fontSize="20px" fill="#C47EFB" />
                </ListItemIcon>
                <ListText primary="Home" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/connect">
                <ListItemIcon sx={{ color: "white" }}>
                  <PiUsersThree fontSize="20px" fill="#C47EFB" />
                </ListItemIcon>
                <ListText primary="Connect" />
                <Box component="span" sx={{ textAlign: "right" }}></Box>
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6} className="current_nav">
              <ListItemButton component={Link} to="/commerce">
                <ListItemIcon sx={{ color: "white" }}>
                  <MdOutlineStorefront fontSize="20px" fill="#C47EFB" />
                </ListItemIcon>
                <ListText primary="Commerce" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/assigned">
                <ListItemIcon sx={{ color: "white" }}>
                  <CiCreditCard2 fill="#C47EFB" fontSize="20px" />
                </ListItemIcon>
                <ListText primary="Business Directory" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <IoChatbubbleEllipsesOutline
                    fill="#C47EFB"
                    stroke="#C47EFB"
                    fontSize="20px"
                  />
                </ListItemIcon>
                <ListText primary="Chat" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <HiOutlineUserCircle stroke="#C47EFB" fontSize="20px" />
                </ListItemIcon>
                <ListText primary="Profile" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <IoTicketSharp
                    fill="#C47EFB"
                    stroke="#C47EFB"
                    fontSize="20px"
                  />
                </ListItemIcon>
                <ListText primary="Tickets" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <CiStreamOn fill="#C47EFB" fontSize="20px" />
                </ListItemIcon>
                <ListText primary="Live" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <PiTelevisionThin fill="#C47EFB" fontSize="20px" />
                </ListItemIcon>
                <ListText primary="Tv" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <MdHowToVote fill="#C47EFB" fontSize="20px" />
                </ListItemIcon>
                <ListText primary="Voting" />
              </ListItemButton>
            </Listitem>
            <Listitem disablePadding={true} mt={6}>
              <ListItemButton component={Link} to="/tasks">
                <ListItemIcon sx={{ color: "white" }}>
                  <IoBookOutline stroke="#C47EFB" fontSize="20px" />
                </ListItemIcon>
                <ListText primary="Education" />
              </ListItemButton>
            </Listitem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
