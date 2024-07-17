import Stacked from "components/newCommerce/shared/Stacked";
import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { useEffect, useState, useContext } from "react";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import privacy from "assets/images/dataprivacy-badge.png";
import styled from "@emotion/styled";
import { CoverUpload } from "../components/picUpload";
import { TextField, Select, MenuItem, FormControl } from "@mui/material";

import { ModalContext } from "Context/ModalContext";
import Passwordfield from "../components/passwordField";
const MenuList = styled(MenuItem)({
  fontFamily: "Ubuntu",

  "&.MuiButtonBase-root": {
    fontSize: "1.4rem !important",
    opacity: "1 !important",
  },
});
const Textfield = styled(TextField)(({ theme }) => ({
  width: "100%",
  // Apply styles to the input element
  "& .MuiInputBase-input": {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: "Ubuntu !important",
  },

  // Apply styles to the placeholder
  "& .MuiInputBase-input::placeholder": {
    color: "#000000",
    // opacity: "1",
    fontSize: "1.4rem",
    fontFamily: "Ubuntu !important",
  },
}));

const FormBusiness = ({ click, content }) => {
  const { storeEdit } = useContext(ModalContext);
  const [val, setVal] = useState({
    bus_name: "",
    bus_category: "",
    bus_address: "",
    // zone_category: "",
    bus_description: "",
    bus_mail: "",
    // shippng_zone: "",
    shipping_address: "",
    cover_image: "",
    avatar_image: "",
  });
  const [ifChecked, setIfchecked] = useState(false);
  const [isdisable, setisdisable] = useState(true);
  const [switchphonemail, setSwitch] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setVal((values) => ({ ...values, [name]: value }));
  };

  const toggleCheked = () => {
    setIfchecked(!ifChecked);
  };

  const fields = [
    { name: "password", label: "Create Password" },
    { name: "confirmPassword", label: "Confirm Password" },
  ];

  useEffect(() => {
    if (ifChecked) {
      setVal((values) => ({
        ...values,
        // shippng_zone: values.zone_category || "",
        shipping_address: values.bus_address || "",
      }));
    } else if (!ifChecked) {
      setVal((values) => ({
        ...values,
        // shippng_zone: values.shippng_zone,
        shipping_address: values.shipping_address,
      }));
    }

    let isfilled;
    if (storeEdit.edit) {
      isfilled = val.bus_name.trim() !== "" && val.avatar_image !== "";
    } else {
      isfilled = Object.values(val).every((datas) => datas.trim() !== "");
    }

    setisdisable(!isfilled);
    content(val);
  }, [ifChecked, val, content, storeEdit.edit]);

  const handleSwitchange = () => {
    setSwitch(!switchphonemail);
  };

  const handleSubmit = (args) => {
    if (!storeEdit.eidt) {
      if (val.password) {
        if (val.password === val.confirmPassword) {
          return args();
        } else {
          window.alert("password does not match!");
          return;
        }
      }
    }
    return args();
  };

  return (
    <Stacked d="column" cname={"w-full pt-3 px-5"} g={3}>
      <div className="text-center">
        <Header
          title={"Unlock Your Commerce Experience"}
          fw={"600"}
          cl={"#303030"}
        />

        <Description
          title={"Please fill this form to continue"}
          cl={"#443A3A"}
          fs={"14px"}
          sx={{ paddingTop: ".6rem" }}
          align={"center"}
        />
        {storeEdit.edit ? (
          <Header
            sx={{ paddingTop: "5px" }}
            title={"Profile Picture, Category and Businessname is Required!"}
            fs={"1.2rem"}
          />
        ) : (
          <Header title={""} />
        )}
      </div>
      {/* bg-changing- */}
      <div>
        <CoverUpload
          imagelist={(grabimages) =>
            setVal((prev) => ({ ...prev, ...grabimages }))
          }
        />
      </div>
      <div className="mt-[4.4rem] pt-[5rem] w-full flex flex-col gap-y-10">
        <Textfield
          variant="outlined"
          required
          name="bus_name"
          placeholder="Business name"
          value={val.bus_name || ""}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <Select
            className="select_drop"
            variant="outlined"
            onChange={handleChange}
            inputProps={{
              name: "bus_category",
              id: "select-category",
            }}
            value={val.bus_category || "placeholder"}
          >
            <MenuList disabled value="placeholder" sx={{ color: "#000000" }}>
              Category
            </MenuList>
            <MenuList value="Automobile">Automobile</MenuList>
            <MenuList value="Phones & Devices">Phones & Devices</MenuList>
            <MenuList value="Homes & Property">Homes & Property</MenuList>
            <MenuList value="Electronics">Electronics</MenuList>
            <MenuList value="Beauty & Cosmetics">Beauty & Cosmetics</MenuList>
            <MenuList value="Furniture">Furniture</MenuList>
            <MenuList value="Kids & Toys">Kids & Toys</MenuList>
            <MenuList value="Clothings">Clothings</MenuList>
            <MenuList value="Food & Bevarages">Food & Bevarages</MenuList>
            <MenuList value="Recreation">Recreation</MenuList>
            <MenuList value="Fitness & Health">Fitness & Health</MenuList>
            <MenuList value="Others">Others</MenuList>
          </Select>
        </FormControl>
        {/* <FormControl fullWidth>
          <Select
            className="select_drop"
            variant="outlined"
            onChange={handleChange}
            inputProps={{
              name: "zone_category",
              id: "select-category-zone",
            }}
            value={val.zone_category || "placeholder"}
          >
            <MenuList disabled value="placeholder" sx={{ color: "#000000" }}>
              Zone
            </MenuList>
            <MenuList value={"Zone1"}>Zone1</MenuList>
            <MenuList value={"Zone2"}>Zone2</MenuList>
            <MenuList value={"Zone3"}>Zone3</MenuList>
          </Select>
        </FormControl> */}
        <Textfield
          variant="outlined"
          required
          name="bus_address"
          placeholder="Business address"
          value={val.bus_address || ""}
          onChange={handleChange}
        />
        {/* business-dsc */}
        <Textfield
          variant="outlined"
          required
          name="bus_description"
          placeholder="Business descritption"
          value={val.bus_description || ""}
          onChange={handleChange}
        />
        {/* business-mail/phone-number */}
        <div>
          <Textfield
            type={switchphonemail ? "email" : "number"}
            variant="outlined"
            required
            name="bus_mail"
            placeholder="Business email address"
            value={val.bus_mail || ""}
            onChange={handleChange}
          />
          <div className="flex justify-end" onClick={handleSwitchange}>
            <Description
              sx={{ paddingTop: "6px", cursor: "pointer" }}
              align={"right"}
              title={
                switchphonemail
                  ? "Use phone number instead"
                  : "Use email instead"
              }
              cl={"#4f0da3"}
              fs={"1.35rem"}
            />
          </div>
        </div>
        <div className="pt-1 flex justify-between items-center w-full gap-x-5">
          {/* for-direct-payments */}
          <div className="flex-[6]">
            <label
              htmlFor="direct-payment"
              className="cursor-pointer flex rounded-lg bg-[#F5F5F5] px-4 py-3 gap-x-3 "
            >
              <input
                type="radio"
                name="paymenttype"
                id="direct-payment"
                value={"Direct Payments"}
                className="w-[20px]"
                onChange={handleChange}
              />
              <span className="text-[1.5rem] text-[#2C2C2E]">
                Direct Payments
              </span>
            </label>
          </div>
          {/* for-2geda-payment */}
          <div className="flex-[6]">
            <label
              htmlFor="2geda-payment"
              className="cursor-pointer flex rounded-lg  bg-[#F5F5F5] px-4 py-3 gap-x-4 justify-start"
            >
              <input
                type="radio"
                name="paymenttype"
                id="2geda-payment"
                value={"Pay To 2geda"}
                className="w-[20px]"
                onChange={handleChange}
              />
              <span className="text-[1.5rem] text-[#2C2C2E]">Pay To 2geda</span>
            </label>
          </div>
        </div>
        {/* shipping-info */}
        <div className="flex justify-between items-center">
          <Description
            title={"Shipping info"}
            cl="#000000"
            fw={"500"}
            fs={"1.4rem"}
          />
          <div className="flex rounded-lg px-4  gap-x-4 justify-start">
            <input
              type="radio"
              name="business-fields"
              id="sameasbusiness"
              value={"Same as business address"}
              checked={ifChecked}
              className="w-[20px] "
            />
            <label
              htmlFor="sameasbusiness"
              className="cursor-pointer  select-none text-[1.5rem] text-[#2C2C2E] mb-0"
              onClick={toggleCheked}
            >
              Same as business address
            </label>
          </div>
        </div>
        {/* shipping-form */}
        {/* <FormControl fullWidth>
          <Select
            className="select_drop"
            variant="outlined"
            onChange={handleChange}
            inputProps={{
              name: "shippng_zone",
              id: "select-shipping-zone",
            }}
            value={val.shippng_zone || "placeholder"}
          >
            <MenuList disabled value="placeholder" sx={{ color: "#000000" }}>
              Shipping zone
            </MenuList>
            <MenuList value={"Zone1"}>Zone1</MenuList>
            <MenuList value={"Zone2"}>Zone2</MenuList>
            <MenuList value={"Zone3"}>Zone3</MenuList>
          </Select>
        </FormControl> */}
        <Textfield
          variant="outlined"
          required
          name="shipping_address"
          placeholder="Shipping address"
          value={val.shipping_address || ""}
          onChange={handleChange}
        />
        {/* passwords */}
        {fields.map((field, index) => {
          return (
            <Passwordfield
              key={index}
              name={field.name}
              placeholder={field.label}
              value={val[field.name]}
              onChange={handleChange}
            />
          );
        })}
      </div>
      {/* data-privacy */}
      <div className="flex items-center justify-center bg-[#F2E9FA] p-3 gap-x-4">
        <img src={privacy} alt="privacy-badge" />
        <Description
          title={
            "Your data is protected under the Standard International User Act"
          }
          cl={"#11132B"}
          fs={"1.2rem"}
        />
      </div>
      <div className="text-center">
        <ButtonSide
          title="Continue"
          bg="#4F0DA3"
          cl="#ffff"
          isDisabled={isdisable}
          styles={{
            paddingInline: "10rem",
            marginTop: "5rem",
            paddingBlock: ".9rem",
            fontSize: "1.4rem",
          }}
          br="5px"
          click={() => handleSubmit(click)}
        />
      </div>
    </Stacked>
  );
};

export default FormBusiness;
