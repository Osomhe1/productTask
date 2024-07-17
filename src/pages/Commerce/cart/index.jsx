import React from "react";
import Container from "components/newCommerce/layout/container";
import Cartpage from "./Cart";
const Cart = () => {
  return (
    <>
      <Container main={<Cartpage />} />
    </>
  );
};

export default Cart;
