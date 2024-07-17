import Stacked from "components/newCommerce/shared/Stacked";
import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { TextField, Box, Modal, CircularProgress } from "@mui/material";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { Suspense, useContext, useEffect, useState } from "react";
import SuccessModal from "./successmodal";
import {
  UserID,
  Sellitem,
  Addsubimagestoproduct,
  editProduct,
} from "api/commerce/Apiactions";
import {
  convertBlobArrayToFileArray,
  setCategoryid,
} from "utils/commerceUtils";
import { ModalContext } from "Context/ModalContext";
import { FaTimes } from "react-icons/fa";

const Stepthree = ({ alldatas, click }) => {
  //   modal-state-forms

  const { productEdit, setisCreated, isProductedit, isOpen } =
    useContext(ModalContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  // const [variants, setVariants] = useState([]);

  const varaintsprepared = (size, weight, colour) => {
    // Find the maximum length to ensure no cycling or random values
    // Find the maximum length to ensure we cover all provided data
    const maxLength = Math.max(size.length, weight.length, colour.length);

    // Use default values or empty strings if arrays are shorter or not provided
    const filledSize = Array.from(
      { length: maxLength },
      (_, i) => size[i] || ""
    );
    const filledWeight = Array.from(
      { length: maxLength },
      (_, i) => weight[i] || ""
    );
    const filledColours = Array.from(
      { length: maxLength },
      (_, i) => colour[i] || ""
    );

    // Prepare data
    return Array.from({ length: maxLength }, (_, index) => ({
      // id: index + 1,
      size: filledSize[index],
      color: filledColours[index],
      weight: filledWeight[index],
    }));
  };

  // all-datas
  const {
    itemImageslist,
    category,
    item_price,
    item_details,
    item_location,
    item_desc,
    itemQuantity,
    sizeVariants,
    weightVariants,
    colorVarirants,
  } = alldatas;

  console.log(alldatas);

  const imageBg = itemImageslist.length > 0 ? itemImageslist[0] : null;
  // slice-out-thefirstimage-whichisthe-bg
  const restimages = itemImageslist.slice(1);

  // form-body-tobepassedtoAPI endpoint
  const requestPayload = {
    name: item_details,
    description: item_desc,
    price: item_price,
    inventory: itemQuantity,
    category: setCategoryid(category),
    user: UserID,
    location: item_location,
    product_image: imageBg,
    // sub_images: subImages,
  };

  // publish-item-toAPI
  const publishItem = async () => {
    handleOpen();
    setError(null); // Clear any previous errors
    setSuccess(false);
    setLoading(true);

    try {
      const blobResponse = await fetch(requestPayload.product_image);
      const blob = await blobResponse.blob();
      const file = new File(
        [blob],
        `product_bg-${item_details}-${
          requestPayload.category
        }_${Date.now()}.jpg`,
        {
          type: blob.type,
        }
      );
      const sentVariant = varaintsprepared(
        sizeVariants,
        weightVariants,
        colorVarirants
      );

      // console.log(sentVariant);
      // return;
      // convert-sub-list-images-into-files-tobe-sent-to-api
      const subimagesBlob = await convertBlobArrayToFileArray(
        restimages,
        item_details
      );

      const payload = {
        ...requestPayload,
        product_image: file,
        variations: sentVariant,
      };

      let response;
      if (productEdit.edit) {
        response = await editProduct(payload, productEdit.id);
      } else {
        response = await Sellitem(payload);
      }
      const payloadsubimage = subimagesBlob.map(async (images) => {
        const payloadsubimage = {
          images,
        };
        return await Addsubimagestoproduct(response.data.id, payloadsubimage);
      });

      const resultsubimages = await Promise.all(payloadsubimage);
      setLoading(false);
      console.log(resultsubimages);
      setSuccess(true);
      // auto-reload/refetch-content
      isProductedit({
        edit: false,
        id: null,
        prevdata: null,
      });
      setisCreated(true);
    } catch (err) {
      console.error(
        "Error in publishItem:",
        err.response ? err.response.data : err.message
      );
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNew = () => {
    if (open) {
      handleClose();
      click();
    }
    // console.log("uploadne...");
  };

  useEffect(() => {
    if (!isOpen && success) {
      click();
    }
  }, [success, isOpen, click]);
  return (
    <Box className="sell_continer">
      <Suspense fallback={<h1>Loading....</h1>} />
      <Stacked d="column" g={2}>
        <Box sx={{ height: "400px" }}>
          <img
            className="pop_out"
            src={imageBg}
            alt="preview_bg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: ".5rem",
            }}
          />
        </Box>
        <Stacked
          d="column"
          g="20px"
          bg="#4F0DA3"
          styles={{ borderRadius: "10px", padding: "1rem" }}
        >
          {/* category and  price */}
          <Stacked d="row" ai="center" jc="space-between">
            <Description
              title={category}
              fs={"1.3rem"}
              fw={"400"}
              cl={"#d9d9d9"}
            />
            <Header title={`$${item_price}`} cl="#ffff" />
          </Stacked>

          {/* item_name uses Header_component */}
          <Header title={item_details} cl="#ffff" />

          {/* item_location uses description component*/}
          <Description
            title={`Sale location : ${item_location}`}
            fs={"1.35rem"}
            cl={"#d9d9d9"}
            fw={"400"}
          />
        </Stacked>

        {/* preview ...images_rest_grid i.e (9)*/}
        <Box className="grid_preview">
          {/* //map the griImages datas */}
          {restimages.map((images, index) => {
            return (
              <Box key={index}>
                <img
                  src={images}
                  alt={`images-preview-grid${index}`}
                  style={{ height: "80px" }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Description-confirm */}
        <Box className="desc_cnfrm">
          <Header title="Description" cl="#000000" />
          <TextField
            fullWidth
            variant="outlined"
            // disabled
            name="desc_prev"
            value={item_desc}
            sx={{
              marginTop: "1rem",
              color: "black !important",
            }}
          />
        </Box>
      </Stacked>
      {/* interactive-loading-modal */}
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
            paddingBlock: 4,
            paddingInline: 3,
            borderRadius: 2,
          }}
        >
          {loading ? (
            <Stacked d="column" ai="center" jc="center" g={3}>
              <CircularProgress />
              <Header
                title={
                  productEdit.edit
                    ? "Updating your product..."
                    : "Publishing Your Product..."
                }
              />
            </Stacked>
          ) : (
            <>
              {success && <SuccessModal newpost={handleNew} />}

              {error && (
                <Stacked d="column" ai="center" jc="center" g={3}>
                  <FaTimes fontSize={"4.2rem"} fill="red" />
                  <Header
                    title={
                      productEdit.edit
                        ? "Error Updating Your Product"
                        : "Error Publishing Your Product"
                    }
                  />
                </Stacked>
              )}
            </>
          )}
        </Box>
      </Modal>

      {/* modal_ends */}
      {/* Button_proceed_to_publish */}
      <Stacked jc="center" d="row">
        <ButtonSide
          title={productEdit.edit ? "Update Item" : "Publish Item"}
          bg="#4F0DA3"
          cl="#ffff"
          styles={{
            paddingInline: "10rem",
            marginTop: "5rem",
            paddingBlock: ".9rem",
            fontSize: "1.4rem",
          }}
          br="5px"
          click={publishItem}
        />

        {/* <Progress w={"66%"} /> */}
      </Stacked>
      <Box pt={4} sx={{ backgroundColor: "#ffff" }}></Box>
    </Box>
  );
};

export default Stepthree;
