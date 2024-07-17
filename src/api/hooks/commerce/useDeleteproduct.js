import { useState, useEffect } from "react";
import { deleteProduct } from "api/commerce/Apiactions";

const useDeleteproduct = () => {
  const [step, setStep] = useState("warn");
  const [delload, setDeload] = useState(true);
  const [delerr, setDelErr] = useState(null);
  const [delsucess, setDelsucess] = useState(false);
  const [productid, setProductid] = useState("");
  const [modal, setModal] = useState(false);
  const modalOpen = () => setModal(true);
  const modalClose = () => {
    setModal(false);
    setStep("warn");
    setDelsucess(false);
    setDelErr(null);
    setProductid("");
  };
  const deleteItem = async () => {
    modalOpen();
  };

  useEffect(() => {
    const deleteprod = async () => {
      if (step === "del") {
        setDeload(true);
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

  return {
    delload,
    delerr,
    delsucess,
    setProductid,
    setStep,
    deleteItem,
    modal,
    step,
    modalClose,
  };
};

export default useDeleteproduct;
