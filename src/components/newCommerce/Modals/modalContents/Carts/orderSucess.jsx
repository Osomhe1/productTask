import CompleteSvg from "assets/images/orederComplete.png";
import Description from "components/newCommerce/typography/txtDescription";
import Header from "components/newCommerce/typography/txtHeader";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
const OrderCompleted = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center pt-4 pb-4 justify-center gap-y-5">
      <img src={CompleteSvg} alt="svg-completed" />

      <div className="flex flex-col gp-y-2 items-center">
        <Header title="Order Complete: Delivery in Progress" />
        <Description title="Great news! Your order has been confirmed, and delivery is underway. Enjoy your purchase!" />
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center pt-[4rem]">
        <ButtonSide
          title="Track my item"
          bg="#4f0da3"
          cl="#ffff"
          jc="initial"
          styles={{ paddingInline: "5rem", boxShadow: "none" }}
        />
        <ButtonSide
          title="Back to commerce"
          cl="#4f0da3"
          bg="#f5f5f5"
          jc="initial"
          styles={{ paddingInline: "5rem", boxShadow: "none" }}
        />
      </div>
    </div>
  );
};

export default OrderCompleted;
