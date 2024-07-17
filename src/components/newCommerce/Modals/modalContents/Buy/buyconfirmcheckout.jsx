import Description from "components/newCommerce/typography/txtDescription";
import Header from "components/newCommerce/typography/txtHeader";
import { Buyerdefaultdetails } from "components/newCommerce/data/cartData";
import { ModalContext } from "Context/ModalContext";
import { useContext } from "react";
import { Fab } from "@mui/material";
import { FaWallet } from "react-icons/fa6";
import Stacked from "components/newCommerce/shared/Stacked";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { trendDetails } from "components/newCommerce/data/commerceMock";
import { FormatwithComma } from "utils/commerceUtils";
const Buyconfirmcheckout = () => {
  const { nextCartPopup, itemParam } = useContext(ModalContext);

  const Cartcurrent = trendDetails.filter((cart) => {
    return cart.id === itemParam;
  });

  // address-change/edit
  const changeAddress = (payload) => {
    nextCartPopup(payload);
  };

  //  confrim order
  const confirmOrder = (payload) => {
    window.confirm("Confirm Your data") && nextCartPopup(payload);
  };
  return (
    <>
      <div className="flex flex-col w-full gap-y-3">
        {itemParam.map((item) => {
          return (
            <div className="bg-[#ffff] py-2 px-2 flex justify-between items-center rounded-xl">
              <div className="flex flex-row gap-3">
                <div className="w-[95px] h-[95px]">
                  <img
                    className="w-full h-full rounded-lg"
                    src={item.product_image}
                    alt="cart-product"
                  />
                </div>
                <div className="flex flex-col justify-between items-start">
                  <Header title={item.name} fw="500" fz="18px" cl="black" />
                  <Header
                    title={FormatwithComma(item.price)
                      .toString()
                      .replace(/^/, "$")}
                    sx={{ fontSize: "15px", fontWeight: "600" }}
                  />
                  <div className="flex items-center gap-x-2">
                    <Description title="QTY:" fw="500" fz="14px" />
                    <Header
                      title={item.Inventory}
                      fw="500"
                      fz="18px"
                      cl="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* payment-method */}
        <Header
          title="PAYMENT METHOD"
          fw="400"
          fz="18px"
          sx={{ textAlign: "left !important" }}
        />
        {/* wallet-payment or fund-transaction */}
        <div className="flex justify-between items-center p-2 rounded-lg bg-[#ffff]">
          <Stacked d="row" g=".5rem" ai="center">
            <Fab
              sx={{
                borderRadius: "5px",
                boxShadow: "none",
                background: "#4f0da3",
                padding: "2px !important",
                width: "35px",
                height: "35px",
                zIndex: "9",
              }}
            >
              <FaWallet fontSize="15px" fill="white" />
            </Fab>
            <Stacked d="column" g=".4rem" ai="start">
              <Header
                title="Pay with wallet"
                sx={{ fontSize: "15px" }}
                fw="400"
              />
              <Description title="N7,950.57" sx={{ fontSize: "13px" }} />
            </Stacked>
          </Stacked>
          {/* button-fund */}
          <button className="bg-[#4f0da3] py-2 px-2 text-white rounded-lg text-[13px]">
            Fund wallet
          </button>
        </div>
        {/* DELIVERY ADDRESS */}

        <div className="flex justify-between items-center">
          <Header
            title="DELIVERY ADDRESS"
            fw="400"
            fz="18px"
            sx={{ textAlign: "left !important" }}
          />
          <button
            className="bg-[#f5f5f5] py-2 px-2 rounded-lg text-[#4f0da3] text-[13px]"
            onClick={() => changeAddress("addressSelection")}
          >
            Change
          </button>
        </div>

        {/* customer-details */}
        <div className="bg-[#ffff] flex flex-col gap-y-2 p-2 rounded-lg items-start">
          {Buyerdefaultdetails.filter((data) => {
            return data.id === 1;
          }).map((buyer) => {
            return (
              <>
                <Header title={buyer.name} cl="black" />
                <Description
                  fz="13px"
                  title={`${buyer.Homeaddress},${buyer.Streetcity},${buyer.phoneNumber}`}
                />
              </>
            );
          })}
        </div>
        {/* fee-settings */}
        <Header
          title="FEE SETTINGS"
          cl="black"
          sx={{ textAlign: "left !important" }}
        />

        {/* item-fee-settings-andcheckout-total-payment */}
        <div className="bg-[#ffff] rounded-lg flex flex-col gap-y-3 items-start p-2">
          {/* flex-item-total */}
          {Cartcurrent.map((fees) => {
            return (
              <>
                <div className="flex justify-between items-center w-full">
                  <Description
                    title="Item total"
                    fz="13px"
                    fw="500"
                    cl="#000000"
                  />
                  <Description
                    title={fees.product_price}
                    fz="13px"
                    cl="#d9d9d9"
                  />
                </div>

                {/* flex-item-delivery-fee */}
                <div className="flex justify-between items-center w-full">
                  <Description
                    title="Delivery fee"
                    fz="13px"
                    fw="500"
                    cl="#000000"
                  />
                  <Description
                    title={fees.delivery_fee}
                    fz="13px"
                    cl="#d9d9d9"
                  />
                </div>

                {/* line-full-bg */}
                <div className="w-full bg-[#d9d9d9] h-[.15rem]"></div>
                {/* total-fee-inc-delivery-fee */}

                <div className="flex justify-between items-center w-full">
                  <Description title="Total" fz="13px" fw="500" cl="#000000" />
                  <Description title="N2,002,950" fz="13px" cl="#d9d9d9" />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Description
        title={titleText}
        sx={{ textAlign: "left !important", visibility: "hidden !important" }}
      />
      {/* padding-top-buttn */}
      <div className="flex items-center justify-center pt-[4rem]">
        <ButtonSide
          title="Confirm order"
          bg="#4f0da3"
          cl="#ffff"
          jc="initial"
          click={() => confirmOrder("ordercompleted")}
          styles={{ paddingInline: "5rem" }}
        />
      </div>
    </>
  );
};

let titleText =
  "Exceptional product! Impressive quality, versatile features, and user-friendly design. A must-have for anyone seeking top-notch performance.";
export default Buyconfirmcheckout;
