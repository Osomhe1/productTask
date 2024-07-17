import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import Stacked from "../shared/Stacked";
import Description from "../typography/txtDescription";
import Pic from "../shared/ImageBordered";
import Header from "../typography/txtHeader";
import { ButtonSide } from "../shared/sideButton";
import { Absolutes } from "../shared/Absolutes";
import { FormatwithComma } from "utils/commerceUtils";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";
import useDeleteproduct from "api/hooks/commerce/useDeleteproduct";
import { Modal, CircularProgress } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { ModalContext } from "Context/ModalContext";
import MarkSold from "../Modals/modalContents/managestore/marksold";
import { markasSold } from "api/commerce/Apiactions";
import toast from "react-hot-toast";
const Storetemplate = ({ content }) => {
  const { setModalContent, isOpen, openModal, isProductedit, setisCreated } =
    useContext(ModalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isPromote, setIsdelete] = useState("delete");
  const handleClose = () => setAnchorEl(null);
  // state-for-mark-sold-loading
  const [isloading, setisloading] = useState(false);
  const [marksucess, setmarksuceess] = useState(false);
  const {
    delload,
    delerr,
    delsucess,
    setProductid,
    setStep,
    deleteItem,
    modal,
    step,
    modalClose,
  } = useDeleteproduct();

  const handleDelete = async () => {
    setStep("warn");
    handleClose();
    setIsdelete("delete");
    deleteItem();
  };

  const handleEditstore = async (payload, item) => {
    handleClose();
    setModalContent(payload);
    isProductedit({
      edit: true,
      id: item.id,
      prevdata: item,
    });
    !isOpen && openModal();
  };

  // mark-as-sold
  const markthissold = async () => {
    setIsdelete("markassold");
    deleteItem();
    setisloading(false);
  };

  const markSoldaction = async (currid) => {
    setisloading(true);
    setmarksuceess(false);
    try {
      const request = await markasSold(currid);
      request && setisloading(false);
      setisloading(false);
      setmarksuceess(true);
      console.log(request);
      setTimeout(() => modalClose(), 1000);
      toast.success("Successfully mark as sold");
      setisCreated(true);
    } catch (err) {
      console.error(err);
      toast.error("Error marking as sold");
      setisloading(false);
      setmarksuceess(false);
      console.error(err);
      modalClose();
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
    if (!open && delsucess) {
      // reload-stores
      setisCreated(true);
    }
  }, [delsucess, open, setisCreated]);

  return (
    <React.Fragment>
      {content.map((content) => {
        return (
          <Box key={content.id} className="sub_gridcommerce">
            <Stacked d="column" g=".4rem">
              <Box sx={{ position: "relative" }}>
                <Link
                  to={`/commerce/managestore/${
                    content.product_name || content.item_similar || content.name
                  }?id=${content.id}`}
                >
                  <Pic
                    look={`${
                      content.product_img ||
                      content.similar_img ||
                      content.product_image
                    }`}
                    alt={`product${
                      content.product_name || content.item_similar
                    }`}
                    styles={{ width: "100%", aspectRatio: "1 / 1.2" }}
                  />
                </Link>
                <Absolutes
                  item={content}
                  actionDot={(e) => {
                    console.log(e);
                    setAnchorEl(e.target);
                    setProductid(content.id);
                  }}
                  use="manage"
                />
              </Box>
              <Description
                title={`${
                  content.product_name || content.item_similar || content.name
                }`}
                sx={{
                  textAlign: "left !important",
                  paddingLeft: "10px",
                  fontSize: "14px",
                  color: "#959393",
                }}
              />
              <Header
                title={FormatwithComma(content.price)
                  .toString()
                  .replace(/^/, "₦")}
                sx={{
                  textAlign: "left !important",
                  paddingLeft: "10px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              />
              <ButtonSide
                bg={content.sold ? "#D9D9D9" : "#4f0da3"}
                title={content.sold ? "Sold Out" : "Mark as sold"}
                cl={content.sold && "rgba(34, 34, 34, 0.7)"}
                styles={{
                  justifyContent: "center",
                  fontSize: "16px !important",
                  fontWeight: "400 !important",
                  paddingBlock: ".4rem",
                  boxShadow: "none !important",
                }}
                click={() => (content.sold ? "" : markthissold())}
              />
            </Stacked>
            {/* mark-as-sold */}

            {/* mark-sold-ends */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{ vertical: "center", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Box sx={{ width: "180px" }} pl={1} pr={1} pt={0.4} pb={0.4}>
                {/* Delete-Item */}
                <div className="flex flex-col gap-y-2">
                  <div
                    className="flex flex-row gap-x-4 items-center cursor-pointer hover:bg-[#d9d9d9] py-2 px-2 rounded-lg select-none"
                    onClick={handleDelete}
                  >
                    <MdDelete fontSize="20px" stroke="#222222" />
                    <span className="text-left text-[1.6rem]">Delete Item</span>
                  </div>
                  {/* edit-Store */}
                  <div
                    className="flex flex-row gap-x-4 items-center cursor-pointer hover:bg-[#d9d9d9] py-2 px-2 rounded-lg select-none"
                    onClick={() => handleEditstore("sellitem", content)}
                  >
                    <MdOutlineEdit fontSize="20px" stroke="#222222" />
                    <span className="text-left text-[1.6rem]">Edit Item</span>
                  </div>
                  {/* propote-item */}
                  <button className="flex flex-row gap-x-4 items-center cursor-pointer hover:bg-[#d9d9d9] py-2 px-2 rounded-lg select-none ">
                    <GoMegaphone fontSize="20px" stroke="#222222" />
                    <span className="text-left text-[1.6rem]">
                      Promote Item
                    </span>
                  </button>
                </div>
              </Box>
            </Menu>
            <Modal
              open={modal}
              onClose={modalClose}
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
                              click={modalClose} // Pass the function without calling it
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
                                  <FaTimes fontSize={"4.2rem"} fill="red" />
                                  <Header title={"Error Deleting Product"} />
                                </>
                              )}
                              {delsucess && (
                                <>
                                  <IoMdCheckmark
                                    fontSize={"4.2rem"}
                                    fill="green"
                                  />
                                  <Header
                                    title={"Product Deleted Succeccfully!"}
                                  />
                                </>
                              )}
                            </>
                          )}
                        </Stacked>
                      )}
                    </Stacked>
                  </>
                ) : isPromote === "promoteitem" ? (
                  // for-promote-item
                  <></>
                ) : isPromote === "markassold" ? (
                  <>
                    <MarkSold
                      closePop={modalClose}
                      loading={isloading}
                      handleMark={() => markSoldaction(content.id)}
                    />
                  </>
                ) : null}
              </Box>
            </Modal>
          </Box>
        );
      })}
    </React.Fragment>
  );
};

Storetemplate.propTypes = {
  content: PropTypes.array.isRequired,
};
export default Storetemplate;
