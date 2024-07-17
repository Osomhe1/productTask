import SellHeader from "components/newCommerce/shared/sellHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { ModalContext } from "Context/ModalContext";
import { useContext } from "react";
const OrderFulfilment = () => {
  const { isOpen, closeModal } = useContext(ModalContext);
  const closePopup = () => {
    isOpen && closeModal();
  };
  return (
    <div>
      <SellHeader
        title="Order Fulfilment"
        hideArr={false}
        hide={true}
        clickBack={closePopup}
      />
      <div className="px-[6rem] pb-10 bg-[#f5f5f5]">
        <div className="pt-[3.5rem]">
          <Description
            title="Congratulations on making a sale! Now, let's talk about how you'll get your product to your customer."
            cl="#000000"
            fw="500"
            fs="1.55rem"
          />
        </div>

        <div className="mt-[5rem] pt-3 fulfil">
          <ol type="1">
            <li>
              <div className="text-[1.55rem]  fulfil_tex_list pl-5 ">
                <span className="font-bold">Prepare Your Product:</span> First
                things first, make sure your product is packaged securely and
                ready to be shipped. This includes proper packaging to protect
                the item during transit.
              </div>
            </li>
            <li>
              <div className="text-[1.55rem] fulfil_tex_list pl-5">
                <span className="font-bold">Collect Customer Information:</span>{" "}
                When you receive an order, you'll need to gather the customer's
                shipping details. This typically includes their name, address,
                and contact number. Ensure all information is accurate to avoid
                delivery issues.
              </div>
            </li>
            <li>
              <div className="text-[1.55rem] fulfil_tex_list pl-5">
                <span className="font-bold">
                  Coordinate with our Delivery Company:
                </span>{" "}
                If you opt for direct delivery to the customer's address,
                provide the delivery company with the necessary information,
                including the customer's phone number. This allows them to
                contact the customer if needed during delivery.
              </div>
            </li>
            <li>
              <div className="text-[1.55rem] fulfil_tex_list pl-5">
                <span className="font-bold">Confirm Shipment:</span> Once the
                product reaches the delivery agent, it's essential to confirm
                delivery. This helps ensure that the transaction is complete.
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OrderFulfilment;
