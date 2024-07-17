import SellHeader from "components/newCommerce/shared/sellHeader";
import Description from "components/newCommerce/typography/txtDescription";
import SteponeForm from "./contentforms/stepone";
import SteptwoForm from "./contentforms/stepTwo";
import Stepthree from "./contentforms/stepThreeform";
import { useState, useEffect, useContext } from "react";
import { ModalContext } from "Context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";

const Sellanitem = () => {
  const [steps, setSteps] = useState(1);
  const { closeModal, isOpen, productEdit } = useContext(ModalContext);

  let title;
  function SetTitle(count) {
    if (count === 1) {
      title = "Sell an item";
    } else if (count === 2) {
      title = "Upload images";
    } else if (count === 3) {
      title = "Preview item";
    } else {
      title = "Sell an item";
    }
    return title;
  }
  //function to slide next
  const slideNext = () => {
    setSteps(steps + 1);
    steps === 3 && setSteps(1);
  };

  //this state is for storing data from the forms/slides
  //this will be sent t te slide three form in sthe preview page
  const [dataObject, setDataObject] = useState({});

  const reverseSteps = () => {
    if (steps === 2) {
      setSteps(steps - 1);
    } else if (steps === 3) {
      setSteps(steps - 1);
    } else {
      //close-modal
      isOpen && closeModal();
    }
  };
  return (
    <div>
      <SellHeader
        title={SetTitle(steps)}
        hide={true}
        titleCol={"#4f0da3"}
        clickBack={() => reverseSteps()}
      />
      <Description
        title={titleText}
        sx={{
          textAlign: "left !important",
          visibility: "hidden !important",
        }}
      />
      <AnimatePresence>
        <div className="px-5" style={{ background: "rgba(255, 255, 255, 1)" }}>
          {steps === 1 ? (
            <motion.div
              key="Step 1"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SteponeForm
                click={slideNext}
                datas={(valuesRecieved) => setDataObject(valuesRecieved)}
              />
            </motion.div>
          ) : steps === 2 ? (
            <motion.div
              key="Step 2"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SteptwoForm
                click={slideNext}
                content={(valuesRecieved) =>
                  setDataObject((prev) => ({ ...prev, ...valuesRecieved }))
                }
              />
            </motion.div>
          ) : steps === 3 ? (
            <motion.div
              key="Step 3"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Stepthree alldatas={dataObject} click={slideNext} />
            </motion.div>
          ) : null}
          {/* mock-data-hhere-to-span-width */}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sellanitem;

let titleText =
  "Exceptional product! Impressive quality, versatile features, and user-friendly design. A must-have for anyone seeking top-notch performance. Highly recommend this outstanding product for Home and State Use purposes really well accomodative.";
