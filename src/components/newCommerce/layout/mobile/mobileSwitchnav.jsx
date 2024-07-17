import { Box } from "@mui/material";
import Stacked from "components/newCommerce/shared/Stacked";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ModalContext } from "Context/ModalContext";
const MobileSwitch = () => {
  const { topProduct, switchStore } = useContext(ModalContext);

  const location = useLocation();

  const handleActive = (payload) => {
    switchStore(payload);
  };

  useEffect(() => {
    console.log(topProduct);
  }, [topProduct]);
  return (
    <>
      {location.pathname === "/commerce" ? (
        <Stacked
          d="row"
          ai="center"
          g="0"
          styles={{
            borderRadius: "0 0 0 15px",
            position: "sticky",
            top: 92,
            zIndex: "99",
          }}
          jc="space-between"
          cname="mobile_category_container_navswitch"
        >
          <Box
            flex={6}
            sx={{
              textAlign: "center",
              borderRadius: "0 0 0 15px",
              paddingBlock: "1rem",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 450,
              color: topProduct === "topProducts" ? "#ffff" : "#000000",
              background: topProduct === "topProducts" ? "#ff8a15" : "#d9d9d9",
              transition: "all 300ms ease-in-out",
            }}
            onClick={() => {
              handleActive("topProducts");
            }}
          >
            Top Products
          </Box>
          <Box
            flex={6}
            sx={{
              textAlign: "center",
              borderRadius: "0 0 15px 0",
              paddingBlock: "1rem",
              fontSize: "15px",
              cursor: "pointer",
              fontWeight: 450,
              color: topProduct === "manageStore" ? "#ffff" : "#000000",
              background: topProduct === "manageStore" ? "#ff8a15" : "#d9d9d9",
              transition: "all 300ms ease-in-out",
            }}
            onClick={() => {
              handleActive("manageStore");
            }}
          >
            Manage Store
          </Box>
        </Stacked>
      ) : null}
    </>
  );
};

export default MobileSwitch;
