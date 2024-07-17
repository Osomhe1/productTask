import { useParams, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Fab,
  CircularProgress,
  Modal,
} from "@mui/material";
import Stacked from "components/newCommerce/shared/Stacked";
import Pic from "components/newCommerce/shared/ImageBordered";
import verified from "assets/images/verified.png";
import Header from "components/newCommerce/typography/txtHeader";
import SellHeader from "components/newCommerce/shared/sellHeader";
import { storeDetails } from "components/newCommerce/data/storeData";
import Description from "components/newCommerce/typography/txtDescription";
import { CiShare2 } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import styled from "@emotion/styled";
import { FaTruck } from "react-icons/fa";
import {
  Colorvariant,
  Sizevariant,
  Weightvariant,
} from "components/newCommerce/shared/productVariants";
import Reviewpolls from "components/newCommerce/shared/ReviewPolls";
import Template from "components/newCommerce/shared/template";
import { CommerceModal } from "components/newCommerce/Modals/Reviewpopup";
import Overlay from "components/newCommerce/shared/maodalOverlay";
import { ModalContext } from "Context/ModalContext";
import { GoMegaphone } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import {
  getProductInfo,
  getReviewcontent,
  deleteProduct,
} from "api/commerce/Apiactions";

import {
  getCategoryName,
  FormatwithComma,
  Capitalizestring,
} from "utils/commerceUtils";
import { FaUser, FaTimes } from "react-icons/fa";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { IoMdCheckmark } from "react-icons/io";

const MenuList = styled(MenuItem)({
  fontFamily: "Ubuntu",
  fontSize: "1.4rem",
});
const Managestoreproduct = () => {
  const { isOpen, openModal, setModalContent } = useContext(ModalContext);
  const [location, setLocation] = useState({});
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sellerinfo, setSellerinfo] = useState([]);
  const Location = useLocation();
  const searchparams = new URLSearchParams(Location.search);
  const productid = searchparams.get("id");
  const [icondots, setIcondots] = useState(true);
  const [reviewLength, setReviewlength] = useState(0);
  const [isPromote, setIsdelete] = useState("delete");
  const [delload, setDeload] = useState(true);
  const [delerr, setDelErr] = useState(null);
  const [delsucess, setDelsucess] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("warn");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchdetail = async () => {
      try {
        const response = await getProductInfo(productid);
        const reviews = await getReviewcontent(productid);
        setReviewlength(reviews.length);
        setProductDetail([response.data]);
        setLoading(false);
      } catch (err) {
        console.error("error", err);
        setLoading(false);
        setError(err);
      }
    };

    fetchdetail();
    // eslint-disable-next-line
  }, [productid]);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setLocation((values) => ({ ...values, [name]: val }));
  };

  // filter-based-on-params-id-passed

  const showReview = (payload) => {
    setModalContent(payload);
    !isOpen && openModal();
  };

  useEffect(() => {
    if (window.innerWidth <= 575) {
      setIcondots(false);
    }
  }, [icondots]);

  const deleteItem = async () => {
    setIsdelete("delete");
    setStep("warn");
    setDelsucess(false);
    setDelErr(null);
    handleOpen();
  };

  useEffect(() => {
    const deleteprod = async () => {
      if (step === "del") {
        try {
          const request = await deleteProduct(productid);
          if (request) {
            setDeload(false);
            setDelsucess(true);
          }
        } catch (err) {
          setDelErr(err);
          setDeload(false);
        }
      }
    };

    deleteprod();
  }, [step, productid]);

  if (loading) {
    return (
      <div className="text-center mt-[25%]">
        <CircularProgress size={45} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-[25%]">
        <h2>Failed to fetch product details</h2>
      </div>
    );
  }

  const handleEditstore = () => {};

  return (
    <Box mt={1} bgcolor="#FFFF" className="relative product_deatils_container">
      {/* <h1>{productName}</h1> */}
      <SellHeader
        hideArr={false}
        title="Product Information"
        hide={icondots}
        dots={true}
        purpose={"managestoredetails"}
        cname="product_info_sticky_nav"
        isDelete={() => deleteItem(productid)}
        setIdeletetype={setStep}
        // action={toggleButton}
      />
      {productDetail && productDetail.length > 0 ? (
        productDetail.map((filtered) => {
          return (
            <div
              className="grid_details_container justify-start  pt-4 pb-4 w-full"
              key={filtered.id}
            >
              <div className="grid_sub_container_one pl-2">
                {/* contains-product-image-andsomedescription */}
                <Stacked d="column" g="20px">
                  <div className="w-full h-[300px]">
                    <Pic att="w-full h-full" look={filtered.product_image} />
                  </div>
                  <Stacked
                    d="row"
                    fw="wrap"
                    ai="center"
                    jc="space-between"
                    cname={"cursor-pointer"}
                  >
                    {filtered.sub_images && filtered.sub_images.length > 0 ? (
                      filtered.sub_images.map((smalls, indx) => {
                        return (
                          <img
                            src={smalls.image}
                            key={indx}
                            alt="sub_images"
                            className="sub_image m-2 h-28 object-cover rounded-md"
                          />
                        );
                      })
                    ) : (
                      <h3 className="text-center mx-auto font-[400] text-2xl">
                        No preview images available
                      </h3>
                    )}
                  </Stacked>
                  {/* seller-name-details-contact */}
                  <Stacked d="row" g="1.2rem" pt={2} ai="start">
                    {sellerinfo.profile_picture ? (
                      <Pic
                        look={sellerinfo.profile_picture}
                        styles={{
                          borderRadius: "",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    ) : (
                      <FaUser fill="#d9d9d9 " fontSize={"22px"} />
                    )}

                    <Stacked d="column" g="5px" ai="start">
                      <Stacked d="row" g=".5rem" ai="center">
                        <Header
                          title={
                            sellerinfo.username
                              ? Capitalizestring(sellerinfo.username)
                              : "Seller unknown"
                          }
                          f2="1.45rem"
                          fw="400"
                          cl="rgba(0, 0, 0, 1)"
                        />
                        <img src={verified} alt="verified" />
                      </Stacked>
                      <Description
                        title="Send message"
                        sx={{ color: "#4f0da3", fontSize: "14px" }}
                      />
                    </Stacked>
                  </Stacked>
                  {/* action-buttons */}
                  <Box className="grid-btns">
                    <button
                      className="flex item-center justify-center space-x-3 px-2 py-2 bg-[#ffff] text-[#222222] text-[16px] rounded-lg border-solid border-2 border-[#f5f5f5] "
                      onClick={() => showReview("sharemodal")}
                    >
                      <CiShare2 fontSize="20px" stroke="#222222" />
                      <span className="text-left">Share product</span>
                    </button>
                    {/* promote item */}
                    <button className="flex item-center justify-center space-x-3 px-2 py-2 bg-[#ffff] text-[#222222] text-[16px] rounded-lg border-solid border-2 border-[#f5f5f5] ">
                      <GoMegaphone fontSize="20px" stroke="#222222" />
                      <span className="text-left">Promote item</span>
                    </button>
                    {/* delete-item */}
                    <button
                      className="flex item-center justify-center space-x-3 px-2 py-2 bg-[#ffff] text-[#222222] text-[16px] rounded-lg border-solid border-2 border-[#f5f5f5]"
                      onClick={() => deleteItem(filtered.id)}
                    >
                      <MdDelete fontSize="20px" stroke="#222222" />
                      <span className="text-left">Delete item</span>
                    </button>
                  </Box>
                </Stacked>
              </div>
              {/* second-side */}
              <div className="grid_sub_container_two pr-2">
                <div className="flex flex-col gap-2 items-start fc">
                  {/* product-category */}
                  <div className="mob_pad">
                    <Description
                      title={getCategoryName(filtered.category)}
                      sx={{
                        width: "max-content",
                        padding: "3px 5px",
                        marginTop: "3px",
                        background: "rgb(225 225 225 /.6)",
                      }}
                    />
                  </div>
                  {/* product-name */}
                  <div className="mob_pad">
                    <Header
                      title={filtered.name}
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    />
                  </div>
                  {/* product-price */}
                  <div className="mob_pad">
                    <Header
                      title={FormatwithComma(filtered.price)
                        .toString()
                        .replace(/^/, "₦")}
                      sx={{ fontSize: "15px", fontWeight: "600" }}
                    />
                  </div>
                  {/* sale-location */}
                  <div className="mob_pad">
                    <Description
                      title={`Sale Location : ${filtered.location}`}
                      sx={{
                        color: "#FF8A15",
                        fontSize: "13px",
                        fontWeight: 400,
                      }}
                    />
                  </div>
                  {/* Sale-location-price */}
                  <div className="mob_pad">
                    <Description
                      title={`Shipping costs will be calculated based on location`}
                      sx={{
                        // color: "#FF8A15",
                        fontSize: "13.5px",
                        fontWeight: 500,
                      }}
                    />
                  </div>
                  <Box className="grid-btns-action w-full pt-1 mt-1 pb-2 mob_pad">
                    {/* add-to-cart */}
                    <button
                      className="flex items-center justify-center space-x-3 px-2 py-2 bg-[#ffff] text-[#4f0da3] text-[13px] rounded-lg border-solid border-2 border-[#4f0da3] shadow-[#4f0da3] shadow-sm"
                      onClick={handleEditstore}
                    >
                      <MdOutlineEdit fontSize="20px" stroke="#4f0da3" />
                      <span className="text-center">EDIT PRODUCT</span>
                    </button>
                    {/* buy now */}
                    <button className="flex items-center justify-center space-x-3 px-2 py-2 bg-[#4f0da3] text-[#ffff] text-[13px] rounded-lg border-solid border-2 border-[#4f0da3] shadow-[#4f0da3] shadow-sm">
                      <MdAddShoppingCart fontSize="20px" stroke="#ffff" />
                      <span className="text-center">MARK AS SOLD</span>
                    </button>
                  </Box>

                  {/* product_description */}
                  <Header
                    fz="16px"
                    fw="500"
                    cl="rgba(0, 0, 0, 0.8)"
                    title="PRODUCT DESCRPTION"
                    sx={{}}
                    cname="mob_styled"
                  />
                  {/* Description text*/}
                  <Box sx={{}} className="mob_pad">
                    <Description
                      fs="1.3rem"
                      fw="400"
                      title={filtered.description}
                      cl="rgba(0, 0, 0, 0.7)"
                      sx={{
                        textAlign: "left",
                        lineHeight: "20px",
                      }}
                    />
                  </Box>

                  {/* product_delivery-and-returns */}
                  <Header
                    fz="16px"
                    fw="500"
                    cl="rgba(0, 0, 0, 0.8)"
                    title="DELIVERY AND RETURNS"
                    cname="mob_styled"
                  />

                  <div className="flex flex-col items-start gap-2 w-full mob_pad">
                    <Header
                      title="Choose location"
                      fz="12px"
                      fw="400"
                      cl="rgba(0, 0, 0, 1)"
                    />
                    <FormControl fullWidth>
                      <Select
                        className="select_drop"
                        variant="outlined"
                        onChange={handleChange}
                        inputProps={{
                          name: "location",
                          id: "choose_location",
                        }}
                        value={location.location || "Lagos"}
                      >
                        <MenuList value="Lagos">Lagos</MenuList>
                        <MenuList value="Ibadan">Ibadan</MenuList>
                        <MenuList value="Abuja">Abuja</MenuList>
                        <MenuList value="Imo">Imo</MenuList>
                        <MenuList value="Anambra">Anambra</MenuList>
                        <MenuList value="Ogun">Ogun</MenuList>
                        <MenuList value="Kaduna">Kaduna</MenuList>
                        <MenuList value="Abia">Abia</MenuList>
                        <MenuList value="Osun">Osun</MenuList>
                        <MenuList value="Ondo">Ondo</MenuList>
                        <MenuList value="Uyo">Uyo</MenuList>
                        <MenuList value="Kano">Kano</MenuList>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <Select
                        className="select_drop"
                        variant="outlined"
                        onChange={handleChange}
                        inputProps={{
                          name: "sub_location",
                          id: "choose_location_2",
                        }}
                        value={
                          location.sub_location || "LEKKI-AJAH (SANGOTEDO)"
                        }
                      >
                        <MenuList value="LEKKI-AJAH (SANGOTEDO)">{`LEKKI-AJAH (SANGOTEDO)`}</MenuList>
                        <MenuList value="Mokola">Mokola</MenuList>
                        <MenuList value="Abuja-Gwalada(FCT)">{`Abuja-Gwalada(FCT)`}</MenuList>
                        <MenuList value="Imo-Owerri()">{`Imo-Owerri()`}</MenuList>
                        <MenuList value="Ogun-Abeokuta">{`Ogun-Abeokuta`}</MenuList>
                        <MenuList value="Kaduna-Zaria">Kaduna-Zaria</MenuList>
                        <MenuList value="Abia">Abia</MenuList>
                        <MenuList value="Osun">Osun</MenuList>
                        <MenuList value="Ondo">Ondo</MenuList>
                      </Select>
                    </FormControl>
                  </div>

                  <Stacked d="row" g="1.2rem" ai="start" pt={2} cname="mob_pad">
                    <Fab
                      sx={{
                        borderRadius: "5px",
                        boxShadow: "none",
                        background: "#F5F5F5",
                        padding: "2px !important",
                        width: "40px",
                        height: "40px",
                        zIndex: "9",
                      }}
                    >
                      <FaTruck fontSize="15px" />
                    </Fab>
                    <Stacked d="column" g=".4rem" ai="start">
                      <Header title="Door Delivery" sx={{ fontSize: "16px" }} />
                      <Header
                        title="Delivery fees N2,950"
                        sx={{ fontSize: "14px" }}
                      />
                      <Description
                        fs="1.3rem"
                        title="Delivery to be completed within 2 weeks of making purchase"
                        sx={{ color: "black" }}
                      />
                    </Stacked>
                  </Stacked>

                  {/* product-variations */}
                  <div className="mob_pad mob_bg w-full">
                    <Header
                      fz="18px"
                      fw="500"
                      cl="rgba(0, 0, 0, 0.8)"
                      sx={{
                        paddingTop: "2rem",
                        textAlign: "left !important",
                        paddingBottom: "5px",
                      }}
                      title="PRODUCT VARIATIONS"
                    />
                    {/* Sixe-color-weight */}
                    <Stacked d="column" g="1.2rem" pt={0.4} sx={{}}>
                      {/* Size-variation */}
                      <Sizevariant />
                      {/* color-variation */}
                      <Colorvariant />
                      {/* weigth-variation */}
                      <Weightvariant />
                    </Stacked>
                    {/* Reviews */}
                    <Stacked
                      d="row"
                      jc="space-between"
                      ai="start"
                      styles={{ width: "100%" }}
                      pt={2}
                      pb={2}
                    >
                      <Header
                        title={`REVIEWS(${reviewLength || 0})`}
                        style={{ fontSize: "15px", color: "#000000" }}
                      />
                      <button
                        className="bg-[transparent] border-none text-[#4f0da3] text-[14px]"
                        onClick={() => showReview("reviewitem")}
                      >
                        View reviews
                      </button>
                    </Stacked>
                  </div>

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
                        paddingInline: 2.5,
                        borderRadius: 2,
                      }}
                    >
                      {isPromote === "delete" ? (
                        <>
                          {/* for-delete-item */}
                          <Stacked d="column" g={4}>
                            {step === "warn" ? (
                              <>
                                <Description
                                  align={"center"}
                                  fs={"1.6rem"}
                                  title={
                                    "Are you absolutely sure you want to delete this product?"
                                  }
                                  cl="#000000"
                                />
                                <Stacked d="row" jc={"space-between"}>
                                  <ButtonSide
                                    title="Cancel"
                                    cl="rgba(34, 34, 34, 0.7)"
                                    bg="transparent"
                                    styles={{
                                      boxShadow: "none !important",
                                      fontSize: "1.5rem !important",
                                    }}
                                    click={handleClose} // Pass the function without calling it
                                    className="mark_sold_btns"
                                  />
                                  <ButtonSide
                                    title="Delete Product"
                                    cl="rgba(255, 0, 0, 1)"
                                    bg="transparent"
                                    styles={{
                                      boxShadow: "none !important",
                                      fontSize: "1.5rem !important",
                                    }}
                                    click={() => setStep("del")} // Wrap the function call in an arrow function
                                    className="mark_sold_btns"
                                  />
                                </Stacked>
                              </>
                            ) : (
                              <Stacked d="column" ai="center" jc="center" g={3}>
                                {delload ? (
                                  <>
                                    <CircularProgress />
                                    <Header title="Deleting Product...." />
                                  </>
                                ) : (
                                  <>
                                    {delerr && (
                                      <>
                                        <FaTimes
                                          fontSize={"4.2rem"}
                                          fill="red"
                                        />
                                        <Header
                                          title={"Error Deleting Product"}
                                        />
                                      </>
                                    )}
                                    {delsucess && (
                                      <>
                                        <IoMdCheckmark
                                          fontSize={"4.2rem"}
                                          fill="green"
                                        />
                                        <Header
                                          title={
                                            "Product Deleted Succeccfully!"
                                          }
                                        />
                                      </>
                                    )}
                                  </>
                                )}
                              </Stacked>
                            )}
                          </Stacked>
                        </>
                      ) : (
                        // for-promote-item
                        <></>
                      )}
                    </Box>
                  </Modal>
                  {/* mdal-ends */}

                  {/* Review-analysis */}
                  {/* <Stacked
                    d="column"
                    g=".8rem"
                    bg="#ffff"
                    styles={{ width: "100%" }}
                    cname="mob_pad"
                  >
             
                    {filtered.product_reviews_poll.map((poll, index) => {
                      return (
                        <Reviewpolls
                          key={index + 3}
                          // method-to-reverse-numbering through index
                          rate={String(Math.abs(index + 1 - 6))}
                          position={poll}
                        />
                      );
                    })}
                  </Stacked> */}
                  {/* similar-items */}
                  {/* <Box sx={{ width: "100%" }} className="mob_pad">
                    <Header
                      title="Similar Items"
                      sx={{ fontSize: "1.5rem", textAlign: "left !important" }}
                    />
                    <Box pt={1.5} gap={2} className="grid_commerce">
                      <Template content={filtered.similar_items} />
                    </Box>
                  </Box> */}
                </div>
              </div>
              <CommerceModal />
              <Overlay />
            </div>
          );
        })
      ) : (
        <p className="text-center py-4 text-2xl">No data available</p>
      )}
    </Box>
  );
};

export default Managestoreproduct;
