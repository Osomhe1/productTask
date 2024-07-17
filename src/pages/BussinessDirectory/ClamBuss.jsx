import ClaimBusinessModal from "../../components/Modals/ClaimBusinessModal";
import ClaimBusinessModalOne from "../../components/Modals/ClaimBusinessModalOne";
import ClaimBusinessModalTwo from "../../components/Modals/ClaimBusinessModalTwo";
import ClaimBusinessModalThree from "../../components/Modals/ClaimBusinessModalThree";
import ClaimBusinessModalDone from "../../components/Modals/ClaimBusinessModalDone";

const ClamBuss = ({
  handleClaimClickDone,
  handleClaimClickCloseDone,
  handleClaimClickThree,
  handleClaimClickCloseThree,
  handleClaimClickTwo,
  handleClaimClickCloseTwo,
  handleClaimClickOne,
  handleClaimClickCloseOne,
  handleClaimClickClose,
  isClaimModalOpen,
  isClaimModalOpenOne,
  isClaimModalOpenTwo,
  isClaimModalOpenThree,
  isClaimModalOpenDone,
}) => {
  return (
    <>
      {" "}
      {isClaimModalOpen && (
        <div className="modal-full-container">
          <ClaimBusinessModal
            handleClaimClickClose={handleClaimClickClose}
            handleClaimClickOne={handleClaimClickOne}
          />
        </div>
      )}
      <form action="">
        {isClaimModalOpenOne && (
          <div className="modal-full-container">
            <ClaimBusinessModalOne
              handleClaimClickCloseOne={handleClaimClickCloseOne}
              handleClaimClickTwo={handleClaimClickTwo}
            />
          </div>
        )}
        {isClaimModalOpenTwo && (
          <div className="modal-full-container">
            <ClaimBusinessModalTwo
              handleClaimClickCloseTwo={handleClaimClickCloseTwo}
              handleClaimClickThree={handleClaimClickThree}
            />
          </div>
        )}
        {isClaimModalOpenThree && (
          <div className="modal-full-container">
            <ClaimBusinessModalThree
              handleClaimClickCloseThree={handleClaimClickCloseThree}
              handleClaimClickDone={handleClaimClickDone}
            />
          </div>
        )}
        {isClaimModalOpenDone && (
          <div className="modal-full-container">
            <ClaimBusinessModalDone
              handleClaimClickCloseDone={handleClaimClickCloseDone}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default ClamBuss;
