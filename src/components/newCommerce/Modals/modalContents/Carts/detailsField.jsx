import { Select, MenuItem, FormControl, TextField } from "@mui/material";
import Description from "components/newCommerce/typography/txtDescription";
import { useState } from "react";
import styled from "@emotion/styled";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
const textfield = {
  fontFamily: "Ubuntu !important",
  background: "#ffff",
  

  "&:placeholder": {
    fontFamily: "Ubuntu !important",
  },
};

const Menulist = styled(MenuItem)({
  fontFamily: "Ubuntu !important",
  fontSize:"1.2rem !important"
});
const labelStyle = {
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: "Ubuntu",
  cursor: "pointer",
  userSelect: "none",
};
const DetailsForm = () => {
  const [val, setVal] = useState({});

  // toggle-radio-functionality
  const [ischeck, setIschecked] = useState(false);

  const checkRadio = () => {
    setIschecked(!ischeck);
  };

  return (
    <>
      <div className="flex flex-col w-full gap-y-4">
        {/* first-name */}
        <TextField
          sx={textfield}
          variant="outlined"
          label="Firstname"
          fullWidth
          size="medium"
        />
        {/* last-name */}
        <TextField
          sx={textfield}
          variant="outlined"
          label="Lastname"
          fullWidth
          size="medium"
        />
        {/* Delivery-address */}
        <TextField
          sx={textfield}
          variant="outlined"
          label="Delivery address"
          fullWidth
          size="medium"
        />
        {/* region- */}
        <FormControl fullWidth>
          <Select
            inputProps={{
              name: "region",
              id: "customer-region",
            }}
            value="placeholder"
            size="medium"
            sx={{ background: "#ffff", fontFamily: "Ubuntu !important" }}
          >
            <Menulist value="placeholder">Region</Menulist>
            <Menulist value="west">West</Menulist>
            <Menulist value="south">South</Menulist>
            <Menulist value="east">East</Menulist>
            <Menulist value="north">North</Menulist>
          </Select>
        </FormControl>
        {/* city */}
        <FormControl fullWidth>
          <Select
            inputProps={{
              name: "city",
              id: "customer-city",
            }}
            value="placeholder"
            size="medium"
            sx={{ background: "#ffff", fontFamily: "Ubuntu !important" }}
          >
            <Menulist value="placeholder" disabled>
              City
            </Menulist>
            <Menulist value="ibadan">Ibadan</Menulist>
            <Menulist value="abuja">Abuja</Menulist>
            <Menulist value="kaduna">Kaduna</Menulist>
            <Menulist value="imo">Imo</Menulist>
          </Select>
        </FormControl>
      </div>
      {/* mock-data-hhere-to-span-width */}
      <Description
        title={titleText}
        sx={{ textAlign: "left !important", visibility: "hidden !important" }}
      />
      <div className="flex_setaddress">
        <div>
          <input
            type="radio"
            name="default_address"
            id="addressselect"
            checked={ischeck}
          />
        </div>
        <label
          htmlFor="addressselect"
          style={labelStyle}
          className="label_style"
          onClick={checkRadio}
        >
          Set as default address
        </label>
      </div>
      {/* padding-top-buttn */}
      <div className="flex items-center justify-center pt-[6rem]">
        <ButtonSide
          title="Save"
          bg="#4f0da3"
          cl="#ffff"
          jc="initial"
          // click={addReview}
          styles={{ paddingInline: "7rem" }}
        />
      </div>
    </>
  );
};

let titleText =
  "Exceptional product! Impressive quality, versatile features, and user-friendly design. A must-have for anyone seeking top-notch performance. Highly recommend this outstanding product.";
export default DetailsForm;
