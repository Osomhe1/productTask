import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useState, useContext } from "react";
import { ModalContext } from "Context/ModalContext";
import { Link } from "react-router-dom";
import Stacked from "../shared/Stacked";
import Description from "../typography/txtDescription";
import Pic from "../shared/ImageBordered";
import Header from "../typography/txtHeader";
import { ButtonSide } from "../shared/sideButton";
import { Absolutes } from "../shared/Absolutes";
import { getCarts } from "api/commerce/Apiactions";
import { FormatwithComma } from "utils/commerceUtils";
const Template = ({ content }) => {
  const { fetchItemid, isOpen, setModalContent, openModal, nextCartPopup } =
    useContext(ModalContext);

  const [cartItems, setCartItems] = useState([]);

  const handleBuy = (data, payload) => {
    console.log(data);
    setModalContent(payload);
    console.log(isOpen);
    !isOpen && openModal();
    fetchItemid(data);
    nextCartPopup("checkoutconfirm");
  };

  useEffect(() => {
    async function fetch() {
      try {
        const cartResponse = await getCarts();
        setCartItems(cartResponse);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  });

  const isProductInCart = (productId) => {
    return cartItems.some((cartItem) => cartItem.product === productId);
  };

  return (
    <React.Fragment>
      {content.map((content) => {
        return (
          <Box key={content.id} className="sub_gridcommerce">
            <Stacked d="column" g=".4rem">
              <Box sx={{ position: "relative" }}>
                <Link
                  to={`/commerce/product/${
                    content.product_name || content.item_similar || content.name
                  }?id=${content.id}`}
                >
                  <Pic
                    look={`${
                      content.product_img ||
                      content.similar_img ||
                      content.product_image
                    }`}
                    alt={`product${
                      content.product_name ||
                      content.item_similar ||
                      content.name
                    }`}
                    styles={{ width: "100%", aspectRatio: "1 / 1.2" }}
                  />
                </Link>
                <Absolutes
                  item={content}
                  inCart={isProductInCart(content.id)}
                />
              </Box>
              <Description
                title={`${
                  content.product_name || content.item_similar || content.name
                }`}
                sx={{
                  textAlign: "left !important",
                  paddingLeft: "10px",
                  fontSize: "15px",
                  color: "#959393",
                }}
              />
              <Header
                title={FormatwithComma(content.price)
                  .toString()
                  .replace(/^/, "₦")}
                sx={{
                  textAlign: "left !important",
                  paddingLeft: "10px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              />
              <ButtonSide
                bg="
                  #4F0DA3"
                title="Buy Now"
                styles={{
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "400",
                  paddingBlock: ".4rem",
                }}
                click={() => handleBuy(content, "checkout")}
              />
            </Stacked>
          </Box>
        );
      })}
    </React.Fragment>
  );
};

Template.propTypes = {
  content: PropTypes.array.isRequired,
};
export default Template;
