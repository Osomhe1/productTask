import Header from "../typography/txtHeader";
import Description from "../typography/txtDescription";
import Stacked from "./Stacked";
const Useflex = ({ header, description }) => {
  let current;
  if (header === "PAYMENT INFORMATION") {
    current = false;
  } else if (header === "ORDER INFORMATION") {
    current = true;
  }
  console.log(current);
  return (
    <>
      <div className="flex flex-col gap-y-5">
        <Header title={header} fw="4000" cl="#222222" />

        <div className="bg-[#ffff] py-[8px] px-[16px] flex flex-col gap-y-6">
          {description.map((desc, index) => {
            return (
              <>
                <Stacked d="row" jc="space-between" key={index}>
                  <Description
                    title={current ? "Order Number" : "Payment Method"}
                    fw="400"
                    cl="rgba(34, 34, 34, 0.7)"
                  />
                  <Description
                    title={current ? desc.order_number : desc.pay_mth}
                    fw="400"
                    cl="#222222"
                  />
                </Stacked>
                <Stacked d="row" jc="space-between">
                  <Description
                    title={current ? "Order Date" : "Item Total"}
                    fw="400"
                    cl="rgba(34, 34, 34, 0.7)"
                  />
                  <Description
                    title={current ? desc.order_date : desc.item_total}
                    fw="400"
                    cl="#222222"
                  />
                </Stacked>
                <Stacked d="row" jc="space-between">
                  <Description
                    title="Delivery Fee"
                    fw="400"
                    cl="rgba(34, 34, 34, 0.7)"
                  />
                  <Description
                    title={desc.delivery_fee}
                    fw="400"
                    cl="#222222"
                  />
                </Stacked>
                <Stacked d="row" jc="space-between">
                  <Description
                    title={current ? "Total amount" : "Total"}
                    fw="400"
                    cl="rgba(34, 34, 34, 0.7)"
                  />
                  <Description
                    title={desc.total_amount}
                    fw="400"
                    cl="#222222"
                  />
                </Stacked>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Useflex;
