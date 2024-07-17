// Menumore.js
import { Menu, Box, Modal, CircularProgress } from "@mui/material";
import Stacked from "../shared/Stacked";
import { useEffect, useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { ModalContext } from "Context/ModalContext";
import Description from "../typography/txtDescription";
import { ButtonSide } from "../shared/sideButton";
import { FaTimes } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import Header from "../typography/txtHeader";
import { deleteStore } from "api/commerce/Apiactions";

const Menumore = ({ anchorEl, open, handleClose, currentuse, closer }) => {
  const {
    isOpen,
    setModalContent,
    openModal,
    isStoredit,
    isCreated,
    setisCreated,
  } = useContext(ModalContext);
  const [delload, setDeload] = useState(true);
  const [delerr, setDelErr] = useState(null);
  const [delsucess, setDelsucess] = useState(false);

  const [step, setStep] = useState("warn");
  const [isopen, setisopen] = useState(false);

  const handlemodalClose = () => {
    handleClose();
    setStep("warn");
    setisopen(false);
  };
  const handlemodalOpen = () => setisopen(true);

  // request-to-delete

  const handleDelete = async () => {
    handlemodalOpen();
    setStep("warn");
    setDelsucess(false);
    setDelErr(null);
    setDeload(true);
  };

  useEffect(() => {
    const deleteuserStore = async () => {
      if (step === "del") {
        try {
          const request = await deleteStore(currentuse);
          if (request) {
            setDelsucess(true);
          }
        } catch (err) {
          setDelErr(err);
        } finally {
          setDeload(false);
        }
      }
    };

    deleteuserStore();
  }, [step, currentuse]);

  useEffect(() => {
    if (!isopen && delsucess) {
      setisCreated(true);
    }
  }, [delsucess, isopen, setisCreated]);

  const handleEditstore = async () => {
    handleClose();
    setModalContent("createbusiness");
    isStoredit({
      edit: true,
      id: currentuse,
      prevdata: null,
    });
    !isOpen && openModal();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Box sx={{ width: "200px" }} pl={2} pr={2} pt={1} pb={1}>
        {/* Delete-Store */}
        <div className="flex flex-col gap-y-4">
          <div
            className="flex flex-row gap-x-4 items-center cursor-pointer hover:bg-[#d9d9d9] py-2 px-2 rounded-lg select-none"
            onClick={handleDelete}
          >
            <MdDelete fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Delete Store</span>
          </div>
          {/* edit-Store */}
          <div
            className="flex flex-row gap-x-4 items-center cursor-pointer hover:bg-[#d9d9d9] py-2 px-2 rounded-lg select-none"
            onClick={handleEditstore}
          >
            <MdOutlineEdit fontSize="20px" stroke="#222222" />
            <span className="text-left text-[1.6rem]">Edit Store</span>
          </div>
        </div>
        <Modal
          open={isopen}
          onClose={handlemodalClose}
          aria-labelledby="Store Delete modal"
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
            <Stacked d="column" g={4}>
              {step === "warn" ? (
                <>
                  <Description
                    align={"center"}
                    fs={"1.6rem"}
                    title={
                      "Are you absolutely sure you want to delete this Store?"
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
                      click={handlemodalClose}
                      className="mark_sold_btns"
                    />
                    <ButtonSide
                      title="Delete Store"
                      cl="rgba(255, 0, 0, 1)"
                      bg="transparent"
                      styles={{
                        boxShadow: "none !important",
                        fontSize: "1.5rem !important",
                      }}
                      click={() => setStep("del")}
                      className="mark_sold_btns"
                    />
                  </Stacked>
                </>
              ) : (
                <Stacked d="column" ai="center" jc="center" g={3}>
                  {delload ? (
                    <>
                      <CircularProgress />
                      <Header title="Deleting Store...." />
                    </>
                  ) : (
                    <>
                      {delerr && (
                        <>
                          <FaTimes fontSize={"4.2rem"} fill="red" />
                          <Header title={"Error Deleting Store"} />
                        </>
                      )}
                      {delsucess && (
                        <>
                          <IoMdCheckmark fontSize={"4.2rem"} fill="green" />
                          <Header title={"Store Deleted Succeccfully!"} />
                        </>
                      )}
                    </>
                  )}
                </Stacked>
              )}
            </Stacked>
          </Box>
        </Modal>
      </Box>
    </Menu>
  );
};

export default Menumore;
