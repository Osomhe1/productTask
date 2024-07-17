import Header from "components/newCommerce/typography/txtHeader";
import Stacked from "components/newCommerce/shared/Stacked";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Modal,
  CircularProgress,
} from "@mui/material";
import Datetimeselect from "../components/DatetimeSelect";
import { useEffect, useState, useContext } from "react";
import { createStore, editStore } from "api/commerce/Apiactions";
import Successpic from "assets/images/successproduct.png";
import Description from "components/newCommerce/typography/txtDescription";
import { ModalContext } from "Context/ModalContext";
const Availability = ({ alldatas, setterdata, click }) => {
  const { closeModal, storeEdit, isOpen, setisCreated, isStoredit } =
    useContext(ModalContext);
  const [always, setAlways] = useState(false);
  const [availabilitydatas, setDatas] = useState({
    Mon: { isChecked: false, startTime: "", endTime: "" },
    Tue: { isChecked: false, startTime: "", endTime: "" },
    Wed: { isChecked: false, startTime: "", endTime: "" },
    Thur: { isChecked: false, startTime: "", endTime: "" },
    Fri: { isChecked: false, startTime: "", endTime: "" },
    Sat: { isChecked: false, startTime: "", endTime: "" },
    Sun: { isChecked: false, startTime: "", endTime: "" },
  });

  // modals-states-here
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // toggle-
  const handleChange = () => {
    setAlways((prev) => !prev);
  };

  useEffect(() => {
    setDatas((prevDatas) => {
      const updatedDatas = {};
      for (let day in prevDatas) {
        updatedDatas[day] = { ...prevDatas[day], isChecked: always };
      }
      return updatedDatas;
    });
  }, [always]);

  useEffect(() => {
    setterdata((prev) => ({
      ...prev,
      ...availabilitydatas,
    }));
  }, [availabilitydatas, setterdata]);

  const { bus_name, bus_category, avatar_image } = alldatas;

  const requestPayload = {
    name: bus_name,
    description: bus_category,
    store_image: avatar_image,
  };
  const handleSubmit = async () => {
    handleOpen();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const blobResponse = await fetch(requestPayload.store_image);
      const blob = await blobResponse.blob();
      const file = new File(
        [blob],
        `${avatar_image}-${bus_name}_${Date.now()}.png`,
        {
          type: blob.type,
        }
      );

      const payload = {
        ...requestPayload,
        store_image: file,
      };
      let response;

      if (storeEdit.edit) {
        response = await editStore(payload, storeEdit.id);
      } else {
        response = await createStore(payload);
      }
      console.log(response);
      setLoading(false);
      setSuccess(true);
      isStoredit({
        edit: false,
        id: null,
        prevdata: null,
      });
    } catch (err) {
      console.error(
        "Error in creating Store:",
        err.response ? err.response.data : err.message
      );
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const closeContinue = () => {
    if (open) {
      handleClose();
      isOpen && closeModal();
    }
  };

  useEffect(() => {
    if (!open && success && !isOpen) {
      // set-modal-step-to-1
      click();
      setisCreated(true);
    }
  }, [success, open, setisCreated, isOpen, click]);

  return (
    <Stacked d="column" cname={"w-full pt-8 px-5 md:px-[8rem]"} g={1}>
      <div className="">
        <Header title={"Set Business availability"} fw={"600"} cl={"#303030"} />
      </div>
      <Stacked d="row" ai={"center"} g={3} cname={"box_availability"}>
        <FormControlLabel
          label="Always available"
          sx={{ fontSize: "1.4rem" }}
          control={
            <Checkbox
              style={{ color: "#4f0da3", fontSize: "1.4rem" }}
              onChange={handleChange}
              checked={always}
            />
          }
        />
      </Stacked>

      {/* availability-days */}
      <Stacked d="column" g={1.6}>
        <Datetimeselect
          always={always}
          availabilitydatas={availabilitydatas}
          setDatas={setDatas}
        />
      </Stacked>

      {/* modal-for-ceating-store */}

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
                  storeEdit.edit ? "Updating Store.." : "Creating Store...."
                }
              />
            </Stacked>
          ) : (
            <>
              {success && (
                <Stacked d="column" ai="center" jc="center" g={3}>
                  <div className="self-center">
                    <img
                      src={Successpic}
                      alt="posted-successful"
                      className="w-[125px] h-[163px] object-cover"
                    />
                  </div>
                  <Description
                    title={
                      storeEdit.edit
                        ? `${bus_name.toUpperCase()} Store Updated Successfully! on 2GEDA🎉 Start Selling products now!`
                        : `${bus_name.toUpperCase()} Store Created Successfully! On 2GEDA🎉 Start Selling products now!.`
                    }
                    fs={"1.39rem"}
                    cl={"black"}
                    align={"center"}
                    sx={{ maxWidth: "35ch" }}
                  />
                  <ButtonSide
                    title="Start Selling"
                    bg="#4F0DA3"
                    cl="#ffff"
                    jc={"center"}
                    styles={{
                      width: "100%",
                      paddingBlock: ".9rem",
                      fontSize: "1.3rem",
                      fontWeight: "400",
                    }}
                    br="10px"
                    click={closeContinue}
                  />
                </Stacked>
              )}
              {error && (
                <h2 className="text-center">
                  {storeEdit.edit
                    ? "Error Updating Store"
                    : "Error Creating Store"}
                </h2>
              )}
            </>
          )}
        </Box>
      </Modal>
      {/* mdal-ends */}

      <div className="text-center pt-4">
        <ButtonSide
          title={storeEdit.edit ? "Update Store" : "Create Store"}
          bg="#4F0DA3"
          cl="#ffff"
          styles={{
            paddingInline: "10rem",
            marginTop: "5rem",
            paddingBlock: ".9rem",
            fontSize: "1.4rem",
          }}
          br="5px"
          click={handleSubmit}
        />
      </div>
    </Stacked>
  );
};

export default Availability;
