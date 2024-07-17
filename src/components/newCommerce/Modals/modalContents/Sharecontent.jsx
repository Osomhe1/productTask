import { useContext } from "react";
import Share from "../../../../assets/images/ShareIcon.png";
import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { Fab } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "Context/ModalContext";
const fabStyles = {
  background: "rgb(118 94 147 / 30%)",
  width: "35px",
  height: "35px",
  zIndex: "9",
  position: "absolute",
  boxShadow: "none !important",
  top: "-12px",
  right: "-5px",
  padding: "5px !important",
  "&:hover": {
    background: "rgb(118 94 147 / 30%)",
  },
};
export const Sharedata = () => {
  const { closeModal } = useContext(ModalContext);
  const handlecloseModal = () => {
    closeModal();
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 relative">
      {/* absolutr-floating-close-icon */}
      <Fab sx={fabStyles} onClick={handlecloseModal}>
        <FaTimes fontSize="15px" fill="#000000" strokeWidth={1} />
      </Fab>
      <img src={Share} alt="share-icon" />
      <Header
        title="Share Your Must-Have Products!"
        fw="500"
        fz="15px"
        cl="#000000"
      />
      <div>
        <Description
          title="Caring is sharing! lets others in your favourite fields."
          fw="500"
          fs="13px"
          cl="#222222"
        />
        <Description
          title="Share the products that enhance your life."
          fw="500"
          fs="13px"
          cl="#222222"
        />
      </div>

      <ButtonSide
        title="Share on 2geda"
        bg="#4f0da3"
        cl="#ffff"
        jc="center"
        className="share_button"
        styles={{ width: "100%", textAlign: "center" }}
      />
      <ButtonSide
        title="Copy product Link"
        cl="#4f0da3"
        bg="#ffff"
        jc="center"
        className="share_button"
        styles={{
          textAlign: "center",
          width: "100%",
          border: "1px solid #4f0da3",
        }}
      />
    </div>
  );
};
