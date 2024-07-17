import { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { MdAddShoppingCart } from "react-icons/md";
import Stacked from "../shared/Stacked";
import Star from "../../../assets/images/one_star.png";
import Pic from "../shared/ImageBordered";
import Description from "../typography/txtDescription";
import toast from "react-hot-toast";
import { Addtocart, Deletecart } from "api/commerce/Apiactions";
//this is for absolute icons on the images bg
import { BsThreeDotsVertical } from "react-icons/bs";
export const Absolutes = ({ item, use, inCart, actionDot }) => {
  const [bg, toggleBg] = useState(true);

  useEffect(() => {
    toggleBg(!inCart);
  }, [inCart]);

  //toggle adding cart bg
  const addCart = () => {
    toggleBg(!bg);

    verifyAdds();
  };

  async function verifyAdds() {
    const formData = {
      product: item.id || null,
      quantity: 1,
    };

    if (!bg) {
      try {
        const response = await Deletecart(formData.product);
        response && toast.success("Removed item from cart");
        toggleBg(true);
      } catch (err) {
        err && toast.error("Failed to remove item from cart");
        toggleBg(false);
      }
    } else {
      try {
        const response = await Addtocart(formData);
        response && toast.success("Added item to cart");
      } catch (err) {
        console.error(err);
        err && toast.error("Failed to add item to cart");
        toggleBg(true);
      }
    }
  }
  const fabStyles = {
    background: bg ? "rgb(118 94 147 / 30%)" : "rgb(54 3 119)",
    width: "36px",
    height: "36px",
    zIndex: "9",
    position: "absolute",
    boxShadow: "none !important",
    top: "8px",
    right: "8px",

    "&:hover": {
      background: bg ? "rgb(118 94 147 / 30%)" : "rgb(54 3 119)",
    },
  };
  const abs = {
    position: "absolute",
    bottom: "8px",
    left: "8px",
    borderRadius: "15px",
    paddingBlock: "3px",
    paddingInline: "6px",
  };

  return (
    <>
      <Fab sx={fabStyles}>
        {use === "manage" ? (
          <div onClick={(e) => actionDot(e)}>
            <BsThreeDotsVertical fontSize="20px" fill="rgb(220 225 225 / .9)" />
          </div>
        ) : (
          <div onClick={addCart}>
            <MdAddShoppingCart fontSize="20px" fill="rgb(220 225 225 / .9)" />
          </div>
        )}
      </Fab>
      <Stacked d="row" ai="center" g="4px" styles={abs} bg="#ffff">
        <Pic look={Star} styles={{ borderRadius: "none" }} />
        <Description
          title={item.product_rating || item.similar_rating}
          sx={{ fontSize: "12px", color: "#00000", fontWeight: "500" }}
        />
      </Stacked>
    </>
  );
};
