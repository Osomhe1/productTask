import SellHeader from "components/newCommerce/shared/sellHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { useState, useContext, useEffect } from "react";
import { ModalContext } from "Context/ModalContext";
import Welcomebusiness from "./content/welcome";
import FormBusiness from "./content/formbusiness";
import Availability from "./content/availability";
const Createbusiness = () => {
  const { closeModal, isOpen } = useContext(ModalContext);

  // create-business-availability
  const [createbusinessdata, setCreatebusinessdata] = useState({});

  const [steps, setSteps] = useState(1);
  let title;
  function SetTitle(count) {
    if (count === 1) {
      title = "Create Business";
    } else if (count === 2) {
      title = "Create Business";
    } else if (count === 3) {
      title = "Set Business availability";
    } else {
      title = "All Done!";
    }
    return title;
  }
  //function to slide next
  const slideNext = () => {
    setSteps(steps + 1);
    steps === 3 && setSteps(1);
    console.log(steps);
  };

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
    <div className="w-full">
      <SellHeader
        title={SetTitle(steps)}
        hide={true}
        titleCol={"#4f0da3"}
        clickBack={() => reverseSteps()}
      />
      <div className="w-full">
        {steps === 1 ? (
          <Welcomebusiness
            click={slideNext}
            datas={(valuesRecieved) => setCreatebusinessdata(valuesRecieved)}
          />
        ) : steps === 2 ? (
          <FormBusiness
            click={slideNext}
            content={(valuesRecieved) =>
              setCreatebusinessdata((prev) => ({ ...prev, ...valuesRecieved }))
            }
          />
        ) : steps === 3 ? (
          <Availability
            alldatas={createbusinessdata}
            setterdata={setCreatebusinessdata}
            click={slideNext}
          />
        ) : null}
      </div>
      <Description
        title={titleText}
        sx={{
          textAlign: "left !important",
          visibility: "hidden !important",
        }}
      />
    </div>
  );
};

// mock-width-span
let titleText =
  "Exceptional product! Impressive quality, versatile features, and user-friendly design. A must-have for anyone seeking top-notch performance. Highly recommend this outstanding product for Home and State Use purposes really well accomodative.";

export default Createbusiness;
