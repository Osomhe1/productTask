import SellHeader from "components/newCommerce/shared/sellHeader";
import { useState, useEffect, useContext } from "react";
import { MyStoreOrders } from "components/newCommerce/data/myorders";
import Description from "components/newCommerce/typography/txtDescription";
import Header from "components/newCommerce/typography/txtHeader";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { CommerceModal } from "components/newCommerce/Modals/Reviewpopup";
import { ModalContext } from "Context/ModalContext";
import Overlay from "components/newCommerce/shared/maodalOverlay";
const Orders = () => {
  const { isOpen, openModal, setModalContent } = useContext(ModalContext);

  const [active, setActiveLink] = useState("all");
  const orderFulfil = () => {
    setModalContent("orderfulfilment");
    !isOpen && openModal();
  };
  const handleCurrent = (payload) => {
    setActiveLink(payload);
    console.log(active);
  };
  return (
    <div className="flex-[7] pt-2 pb-3 bg-[#f5f5f5] cart_mobile">
      <SellHeader
        hideArr={false}
        title="My orders"
        hide={false}
        dots="caution"
        cname="product_info_sticky_nav"
        dangerClick={orderFulfil}
        // action={toggleButton}
      />
      <div className="pt-[4rem] bg-[#ffff] ">
        <div className={`grid_btn_store justify-center items-center mx-[5%]`}>
          <button
            onClick={() => handleCurrent("all")}
            className={`${
              active === "all" && "bg-[#4f0da3] text-white"
            } p-1 rounded-[25px] text-[16px] text-[#222222b3] hover:font-bold`}
          >
            All
          </button>
          <button
            onClick={() => handleCurrent("completed")}
            className={`${
              active === "completed" && "bg-[#4f0da3] text-white"
            } p-1 rounded-[25px] text-[16px] text-[#222222b3] hover:font-bold`}
          >
            Completed
          </button>
          <button
            onClick={() => handleCurrent("pending")}
            className={`${
              active === "pending" && "bg-[#4f0da3] text-white"
            } p-1 rounded-[25px] text-[16px] text-[#222222b3] hover:font-bold`}
          >
            Pending
          </button>
        </div>
      </div>

      {/* my-orders */}
      <div className="bg-[#ffff] pt-[3.2rem] flex flex-col gap-y-8 px-4 pb-5">
        {active === "all" ? (
          // <>
          //   {MyStoreOrders.map((orders) => {
          //     return (
          //       <div className="flex gap-x-10 items-start">
          //         {/* first_flex */}
          //         <div className="">
          //           <img
          //             className=""
          //             src={orders.item_bg}
          //             alt="ordered-product"
          //           />
          //         </div>

          //         {/* second_flex */}
          //         <div className="flex flex-col justify-center gap-y-2">
          //           <Description title={`Order Date: ${orders.order_date}`} />
          //           <Header
          //             title={`${orders.item_name}`}
          //             fw="400"
          //             cl="#000000"
          //             fs="14px"
          //           />
          //           <div className="flex gap-x-1 text-center">
          //             <Header
          //               title={`Total:`}
          //               fw="400"
          //               cl="#000000"
          //               fs="14px"
          //             />
          //             <Description title={orders.total_amount} />
          //           </div>
          //           <div className="flex gap-x-1 items-center">
          //             <Header
          //               title={`Order No:`}
          //               fw="400"
          //               cl="#000000"
          //               fs="14px"
          //             />
          //             <Description title={orders.order_number} />
          //           </div>
          //           <div className="flex gap-x-1 items-center">
          //             <Header
          //               title={`Order By:`}
          //               fw="400"
          //               cl="#000000"
          //               fs="14px"
          //             />
          //             <Description title={orders.order_by} />
          //           </div>
          //           <ButtonSide
          //             bg={!orders.fulfiled ? "#D9D9D9" : "#4f0da3"}
          //             title={
          //               orders.fulfiled
          //                 ? "Mark as fulfilled"
          //                 : "Order fulfilled"
          //             }
          //             cl={!orders.fulfiled && "rgba(34, 34, 34, 0.7)"}
          //             styles={{
          //               width: "max-content",
          //               justifyContent: "center",
          //               fontSize: "14px !important",
          //               fontWeight: "400 !important",
          //               paddingBlock: ".4rem",
          //               boxShadow: "none !important",
          //               marginTop: "1rem",
          //             }}
          //           />
          //         </div>
          //       </div>
          //     );
          //   })}
          // </>
          <h4 className="text-center">No orders Yet</h4>
        ) : active === "pending" ? (
          <>
            <h4 className="text-center">Pending will show up here</h4>
          </>
        ) : active === "completed" ? (
          <>
            <h4 className="text-center">Completed will show up here</h4>
          </>
        ) : null}
      </div>
      <CommerceModal />
      <Overlay />
    </div>
  );
};

export default Orders;
