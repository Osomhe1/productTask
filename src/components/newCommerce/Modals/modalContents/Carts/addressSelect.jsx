import Description from "components/newCommerce/typography/txtDescription";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import Selectaddress from "components/newCommerce/shared/cart/selectaddress";
const AddressSelect = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <Selectaddress />
      </div>

      <Description
        title={titleText}
        sx={{ textAlign: "left !important", visibility: "hidden !important" }}
      />

      <div className="flex flex-col gap-y-4 items-center justify-center pt-[4rem]">
        <ButtonSide
          title="Select address"
          bg="#4f0da3"
          cl="#ffff"
          jc="initial"
          styles={{ paddingInline: "7rem", boxShadow: "none" }}
        />
        <ButtonSide
          title="Add New Address"
          cl="#4f0da3"
          bg="#f5f5f5"
          jc="initial"
          styles={{ paddingInline: "7rem", boxShadow: "none" }}
        />
      </div>
    </>
  );
};
let titleText =
  "Exceptional product! Impressive quality, versatile features, and user-friendly design. A must-have for anyone seeking top-notch performance.";
export default AddressSelect;
