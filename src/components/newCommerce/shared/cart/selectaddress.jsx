import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { Buyerdefaultdetails as details } from "components/newCommerce/data/cartData";
import { ModalContext } from "Context/ModalContext";
import { useContext } from "react";
const align = {
  textAlign: "left",
};
const Selectaddress = () => {
  const { nextCartPopup } = useContext(ModalContext);
  const editAddress = (payload) => {
    nextCartPopup(payload);
  };
  return (
    <>
      {details.map((content, index) => {
        return (
          <div
            key={index}
            className="flex justify-between w-full border border-[#f5f5f5] border-solid rounded-md p-2 items-start bg-white"
          >
            <div className="flex gap-3 items-start">
              <div>
                <input
                  type="radio"
                  name="address-default"
                  id="dfaddress"
                  checked
                />
              </div>
              <div className="block">
                <Header title={content.name} cl="#000000" sx={align} />
                <Description title={content.Homeaddress} sx={align} />
                <Description title={content.Streetcity} sx={align} />
                <Description title={content.phoneNumber} sx={align} />
                <Description
                  title="Deafult"
                  fs="12px"
                  cl="#000000"
                  sx={{
                    width: "max-content",
                    padding: "3px 5px",
                    marginTop: "3px",
                    background: "rgb(225 225 225 /.6)",
                  }}
                />
              </div>
            </div>
            <button
              className="bg-[transparent] text-[13px] text-[#4f0da3] p-1"
              onClick={() => editAddress("buyerDetails")}
            >
              Edit
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Selectaddress;
