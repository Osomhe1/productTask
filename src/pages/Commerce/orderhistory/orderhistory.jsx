import { BsArrowLeft } from "react-icons/bs";
import Header from "components/newCommerce/typography/txtHeader";
import { order_History } from "components/newCommerce/data/Orderhistory";
import OrderDetails from "./orderdetails";
import Description from "components/newCommerce/typography/txtDescription";
import { useState } from "react";
const Orderhistory = () => {
  const [history, setHistory] = useState("orderhistories");
  console.log(history);
  const [currentlyCliked, SetClcked] = useState(null);
  const Slidetodetails = (payload) => {
    setHistory("orderdetails");
    SetClcked(payload);
  };

  return (
    <div className="flex-[7] pt-2 pb-3 bg-[#f5f5f5] cart_mobile">
      {history === "orderhistories" ? (
        <>
          <div className="flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-3">
              <BsArrowLeft
                fontSize="20px"
                onClick={() => window.history.back()}
              />
              <Header title="Order History" />
            </div>
          </div>

          {/* all-order-history */}
          <div className="flex flex-col gap-2 mt-4 cart_item_mobile">
            {order_History.length < 1 ? (
              <>
                <h3 className="text-center">No order Yet</h3>
              </>
            ) : (
              order_History.map((ordered, index) => {
                return (
                  <div
                    className="bg-[#ffff] py-3 px-4 flex justify-between flex-wrap rounded-xl gap-y-[1.3rem]"
                    key={index}
                  >
                    {/* first-content-also-flexing */}
                    <div className="flex gap-x-6 items-center">
                      <div className="">
                        <img
                          className=""
                          src={ordered.item_bg}
                          alt="ordered-product"
                        />
                      </div>
                      {/* sub_details */}
                      <div className="flex flex-col justify-between gap-y-2  ">
                        <Description
                          title={`Order Date: ${ordered.order_date}`}
                        />
                        <Header
                          title={`${ordered.item_name}`}
                          fw="400"
                          cl="#000000"
                        />
                        <div className="flex gap-x-1 text-center">
                          <Header title={`Total:`} fw="400" cl="#000000" />
                          <Description title={ordered.order_total_price} />
                        </div>
                        <div
                          className={`text-[12px] font-[400]  rounded-[19px] py-[5px] px-[6px] text-[#ffff] w-max`}
                          style={{
                            background:
                              ordered.status_code === 1
                                ? "#4F0DA3"
                                : ordered.status_code === 2
                                ? "#207700"
                                : "rgba(34, 34, 34, 0.7)",
                          }}
                        >
                          {ordered.order_status}
                        </div>
                      </div>
                    </div>
                    {/* second-content */}
                    <div className="flex flex-col gap-y-6 items-end">
                      <p
                        className="py-[3px] px-[6px] text-[12px] text-center w-max cursor-pointer"
                        style={{
                          background: "rgba(79, 13, 163, 0.2)",
                          color: "rgba(79, 13, 163, 1)",
                        }}
                        onClick={() => Slidetodetails(ordered)}
                      >
                        View details
                      </p>
                      <div className="flex gap-x-1 items-center">
                        <Header title={`Order No:`} fw="400" cl="#000000" />
                        <Description title={ordered.order_number} />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </>
      ) : history === "orderdetails" ? (
        <>
          <OrderDetails payload={currentlyCliked} reverse={setHistory} />
        </>
      ) : null}
    </div>
  );
};
export default Orderhistory;
