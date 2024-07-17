import Header from "components/newCommerce/typography/txtHeader";
import { BsArrowLeft } from "react-icons/bs";
import { order_History } from "components/newCommerce/data/Orderhistory";
import Useflex from "components/newCommerce/shared/flexBasis";
import Description from "components/newCommerce/typography/txtDescription";
import Verified from "assets/images/verified.png";
import Seller from "assets/images/seller.png";
import StatusSuccess from "assets/images/successtatus.png";
const OrderDetails = ({ reverse, payload }) => {
  const CurrOrder = order_History.filter((item) => {
    return item.id === payload.id;
  });

  return (
    <>
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center gap-3">
          <BsArrowLeft
            fontSize="20px"
            onClick={() => reverse("orderhistories")}
          />
          <Header title="Order Details" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 pt-8">
        <Useflex header="ORDER INFORMATION" description={CurrOrder} />
        <Useflex header="PAYMENT INFORMATION" description={CurrOrder} />
        <div className="flex flex-col gap-y-5">
          <Header title="DELIVERY INFORMATION" fw="4000" cl="#222222" />
          <div className="bg-[#ffff] py-[8px] px-[16px] flex flex-col gap-y-4">
            {CurrOrder.map((details) => {
              return (
                <>
                  <Description
                    title={details.seller_name}
                    fw="400"
                    cl="#000000"
                    key="seler"
                  />
                  <Description
                    title={details.seller_address}
                    fw="400"
                    key="address"
                  />
                </>
              );
            })}
          </div>
        </div>
        {/* seller-info */}

        <div className="flex flex-col gap-y-5">
          <Header title="SELLER INFORMATION" fw="4000" cl="#222222" />
          <div className="bg-[#ffff] py-[8px] px-[16px] flex  justify-between">
            {CurrOrder.map((details) => {
              return (
                <>
                  <div
                    className="flex flex-row gap-x-5 items-center "
                    key="seller_img"
                  >
                    <img src={Seller} alt="seller" />
                    <div className="flex flex-row gap-x-1 items-center ">
                      <Description
                        title={details.seller_name}
                        fw="400"
                        cl="#000000"
                        key="seler"
                      />

                      {details.verified && (
                        <img
                          className="h-[12px] w-[12px]"
                          src={Verified}
                          alt="verified"
                        />
                      )}
                    </div>
                  </div>
                  <div key="btn_seller">
                    <button
                      className="text-[#4F0DA3] rounded-[5px] p-2 text-[12px]"
                      style={{ background: "rgba(79, 13, 163, 0.2)" }}
                    >
                      Message seller
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Status_bar_ongoing */}
      <div className="pt-7 mt-[10rem] flex flex-col items-center justify-center gap-y-7">
        {CurrOrder.map((content, index) => {
          return (
            <>
              {content.status_code === 1 ? (
                <>
                  <img className="h-[30px]" src={StatusSuccess} alt="success" />
                  <div
                    className={`text-[12px] font-[400]  rounded-[19px] py-[5px] px-[10px] text-[#ffff] w-max`}
                    style={{
                      background: "#4F0DA3",
                    }}
                  >
                    {content.order_status}
                  </div>
                </>
              ) : content.status_code === 2 ? (
                <>
                  <img src="" alt="delivered" />
                  <div
                    className={`text-[12px] font-[400]  rounded-[19px] py-[5px] px-[10px] text-[#ffff] w-max`}
                    style={{
                      background: "#207700",
                    }}
                  >
                    {content.order_status}
                  </div>
                </>
              ) : content.status_code === 3 ? (
                <>
                  <img src="" alt="cancelled" />
                  <div
                    className={`text-[12px] font-[400]  rounded-[19px] py-[5px] px-[10px] text-[#ffff] w-max`}
                    style={{
                      background: "rgba(34, 34, 34, 0.7)",
                    }}
                  >
                    {content.order_status}
                  </div>
                </>
              ) : null}
            </>
          );
        })}
      </div>
    </>
  );
};

export default OrderDetails;
