import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";

import {
  Modal,
  Box,
  Select,
  MenuItem,
  FormControl,
  TextField,
} from "@mui/material";
// import { CgAdd } from "react-icons/cg";
import { BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Stacked from "components/newCommerce/shared/Stacked";
import {
  Sizevariantsell,
  ColorvariantSell,
  WeightvariantSell,
} from "./variants";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import Progress from "components/newCommerce/shared/useProgress";
import Imageupload from "./imageUpload";
import {
  Colorvariant,
  Sizevariant,
  Weightvariant,
} from "components/newCommerce/shared/productVariants";
const MenuList = styled(MenuItem)({
  fontFamily: "Ubuntu",

  "&.MuiButtonBase-root": {
    fontSize: "1.4rem !important",
    opacity: "1 !important",
  },
});
const SteptwoForm = ({ content, click }) => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // disable-buttonif-fields are empty
  const [disable, setDisable] = useState(true);
  //   size-array-state
  const [size, setSizearr] = useState([]);
  const [color, setcolorArr] = useState([]);
  const [weight, setweightArr] = useState([]);
  //   this accepts item quantiyi in numbers
  const [itemsValue, seItemsval] = useState("");
  // store-uploaded imagesinto anemptyobjects
  const [itemImages, setItemimages] = useState([]);

  //   allValuesinsteptwoform saved here
  // eslint-disable-next-line
  const [steptwoValues, seSteptwovalues] = useState({});

  //   variation-drop-down-changes
  const handleChange = (e) => {
    // console.log(e.target.value);
    setVal(e.target.value);
  };

  const handleUploadedImages = (imagelist) => {
    setItemimages(imagelist); // Update the state with the entire array of images
  };

  useEffect(() => {
    // whenever - ay - ofthedependecies - changes -update-the-general-form-store
    steptwoValues.sizeVariants = size;
    steptwoValues.colorVarirants = color;
    steptwoValues.weightVariants = weight;
    steptwoValues.itemQuantity = itemsValue;
    steptwoValues.itemImageslist = itemImages;
    content(steptwoValues);

    if (
      itemsValue.trim() !== "" &&
      itemImages.length >= 1 &&
      (size || color || weight).length >= 1
    ) {
      setDisable(false);
    }
  }, [size, color, weight, itemsValue, itemImages, steptwoValues, content]);

  const saveModal = () => {
    alert("Saved Successsfully");
  };
  return (
    <div className="w-full pb-4">
      <div className="flex flex-col w-full gap-2 sell_container">
        <Header
          title="You can add up to 10 images"
          fs={"1.5rem"}
          cl="black"
          fw={"500"}
        />

        <Description
          title="The first Image is the cover image"
          fs={"15px"}
          cl="rgba(0, 0, 0, 0.8)"
        />
      </div>
      <div className="pt-8 flex flex-col gap-3">
        <Header
          title="Product variations"
          fs={"1.4rem"}
          cl="black"
          fw={"bold"}
        />

        <div className="btn_variate">
          <button
            className="w-full flex flex-row gap-3 justify-center items-center text-[1.4rem] text-[#4f0da3] rounded-lg py-2"
            onClick={() => handleOpen()}
          >
            <BiPlus fill="#4f0da3" />
            Add Variation
          </button>
        </div>
        {/* variations-returns-here-after-saved */}
        <Stacked d="column" g={1} pt={1}>
          {size.length <= 0 ? (
            <p className="text-center">No Size Variants Choosen</p>
          ) : (
            <Sizevariant content={size} />
          )}
          {color.length <= 0 ? (
            <p className="text-center">No Color Variants Choosen</p>
          ) : (
            <Colorvariant content={color} />
          )}
          {weight.length <= 0 ? (
            <p className="text-center">No Weight Variants Choosen</p>
          ) : (
            <Weightvariant content={weight} />
          )}
        </Stacked>

        {/* variations-lists */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="adding Variation modal"
          aria-describedby="add your variations"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 350,
              bgcolor: "#ffff",
              minHeight: "328px",
              paddingBlock: 2,
              paddingInline: 3,
              borderRadius: 2,
            }}
          >
            <h2 id="adding Variation modal" className="text-[15px] text-center">
              Add a Variation
            </h2>
            <Box pt={1}>
              <FormControl fullWidth>
                <Select
                  className="select_drop"
                  variant="outlined"
                  onChange={handleChange}
                  inputProps={{
                    name: "category_variation",
                    id: "select-category-variation",
                  }}
                  value={val || "placeholder"}
                  size="small"
                >
                  <MenuList disabled value="placeholder">
                    Select Variation
                  </MenuList>
                  <MenuList value="Size">Size</MenuList>
                  <MenuList value="Colour">Colour</MenuList>
                  <MenuList value="Weight">Weight</MenuList>
                </Select>
              </FormControl>

              <Stacked d="column" g={2} pt={3}>
                {val && (
                  <Header
                    title="Select all that apply"
                    fs={"1.45rem"}
                    fw={"500"}
                    cl={"black"}
                  />
                )}
                <Box>
                  {val === "Size" ? (
                    <Sizevariantsell
                      sizedata={(valuerev) => setSizearr(valuerev)}
                    />
                  ) : val === "Colour" ? (
                    <ColorvariantSell
                      colorPick={(valurev) => setcolorArr(valurev)}
                    />
                  ) : val === "Weight" ? (
                    <WeightvariantSell
                      weightPick={(valuerev) => setweightArr(valuerev)}
                    />
                  ) : null}
                </Box>
                {val && (
                  <div className="flex flex-col gap-2 w-full">
                    <ButtonSide
                      title={"Save"}
                      w={"100%"}
                      bg={"#4f0da3"}
                      cl={"#ffff"}
                      className={`py-3`}
                      br={"5px"}
                      jc={"center"}
                      click={() => {
                        saveModal();
                      }}
                    />
                    {/* cancel */}
                    <ButtonSide
                      title={"Cancel"}
                      w={"100%"}
                      bg={"transparent"}
                      cl={"black"}
                      className={`py-3`}
                      br={"5px"}
                      bs={"none"}
                      jc={"center"}
                      click={handleClose}
                    />
                  </div>
                )}
              </Stacked>
            </Box>
          </Box>
        </Modal>

        {/* items-in-stock/quantity */}
        <Header title={"Items in stock"} fs={"1.4rem"} cl="black" fw={"bold"} />

        <TextField
          sx={{ width: "40%" }}
          size="small"
          inputProps={{
            name: "items_in_stock",
            type: "number",
            min: 1,
            value: itemsValue || "",
            placeholder: "Enter a number",
          }}
          onChange={(e) => seItemsval(e.target.value)}
        />

        <div className="pt-6">
          <Header title={"Upload images"} fs={"1.4rem"} cl="black" fw={"400"} />
        </div>
        <Description
          title={
            "You can add up to 10 images. The first image is the cover image"
          }
          cl="rgba(0, 0, 0, 0.8)"
        />
        <div className="pt-4 w-full">
          {/* <Imageupload
            uploadedimages={(imagelist) =>
              setItemimages((prevval) => ({ ...prevval, ...imagelist }))
            }
          /> */}
          <Imageupload uploadedimages={handleUploadedImages} />
        </div>
        {/* images-upload */}
        <Stacked pt={3} jc="center" d="column" g={3} ai="center">
          <ButtonSide
            title="Publish this Item"
            bg="#4F0DA3"
            cl="#ffff"
            isDisabled={disable}
            styles={{
              paddingInline: "10rem",
              marginTop: "5rem",
              paddingBlock: ".9rem",
              fontSize: "1.4rem",
            }}
            br="5px"
            click={click}
          />

          <Progress w={"66%"} />
        </Stacked>
      </div>
    </div>
  );
};

export default SteptwoForm;
