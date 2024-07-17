import SellHeader from "components/newCommerce/shared/sellHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { ModalContext } from "Context/ModalContext";
import Header from "components/newCommerce/typography/txtHeader";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const MarkSold = ({ closePop, handleMark, loading }) => {
  // const { isOpen, closeModal } = useContext(ModalContext);

  // const closePop = () => {
  //   isOpen && closeModal();
  // };

  return (
    <div className="flex flex-col items-center  gap-3 relative">
      <div>
        <Header
          title="Mark as sold?"
          sx={{ textAlign: "center" }}
          cl="#000000"
          fw="500"
          fs="2.0rem"
        />
      </div>
      <div>
        <Description
          title="Marking this item as sold will remove it from the product pages and can only be viewed by you.Are you sure you want to mark as sold?"
          fw="400"
          fs="1.35rem"
          cl="rgba(34, 34, 34, 0.7)"
          sx={{ maxWidth: "40ch", textAlign: "center" }}
        />
      </div>
      <div className="flex justify-between w-full">
        <ButtonSide
          title="Cancel"
          cl="rgba(34, 34, 34, 0.7)"
          bg="transparent"
          styles={{
            boxShadow: "none !important",
            fontSize: "1.5rem !important",
          }}
          click={closePop}
          className="mark_sold_btns"
        />

        <ButtonSide
          title="Mark as Sold"
          cl="rgba(255, 0, 0, 1)"
          bg="transparent"
          styles={{
            boxShadow: "none !important",
            fontSize: "1.5rem !important",
          }}
          className="mark_sold_btns"
          start={
            loading ? (
              <AiOutlineLoading3Quarters
                className="animate-spin  text-[25px] mr-4"
                fill="#4f0da3"
              />
            ) : null
          }
          isDisabled={loading ? true : false}
          click={() => handleMark()}
        />
      </div>
    </div>
  );
};

export default MarkSold;
