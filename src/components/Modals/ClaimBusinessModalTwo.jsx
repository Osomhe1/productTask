import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import { useState } from "react";

const ClaimBusinessModalTwo = ({
  handleClaimClickCloseTwo,
  handleClaimClickThree,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile1, setSelectedFile1] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleFileInputChangeOne = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile1(file);
    }
  };
  return (
    <div className="postFormModal-container status-modal-container  h-[400px] lg:h-[600px]  overflow-y-scroll">
      <div className="over-scr">
        {" "}
        <div className="flex justify-between w-full items-center">
          <AiOutlineArrowLeft size={20} onClick={handleClaimClickCloseTwo} />
          <div className="claim text-[14px] lg:text-[18px] font-bold">
            Claim Business
          </div>
          <img src="images/lo2.png" alt="logo" className="w-[30px]" />
        </div>
        <div className="claim-gen-bdy">
          <div className="letter-dear provid text-[12px] lg:text-[14px] text-center">
            Upload Ownership Documents
          </div>
          <div className="letter-bdy text-[12px] lg:text-[14px] text-center">
            Upload documents for ownership verification process
          </div>
          <div className="input-containe-claim mt-4">
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">
                  Business license or registration certificate
                </label>
                <div className="input-click">
                  <div className="claim-inp no-bor">
                    {selectedFile ? selectedFile.name : "Choose file to upload"}
                  </div>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  <label htmlFor="fileInput" className="sel-btnn mt-2">
                    Select file
                  </label>
                </div>
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box mt-4">
                <label htmlFor="">Tax ID Number</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter tax identification number"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box mt-4">
                <label htmlFor="">Utility Bill or lease agreement</label>
                <div className="input-click">
                  <div className="claim-inp no-bor">
                    {selectedFile1
                      ? selectedFile1.name
                      : "Choose file to upload"}
                  </div>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleFileInputChangeOne}
                    style={{ display: "none" }}
                    id="fileInput1"
                  />
                  <label htmlFor="fileInput1" className="sel-btnn mt-2">
                    Select file
                  </label>
                </div>
              </div>
            </div>
            <div className="letter-bdy uppp mt-4 text-[12px] lg:text-[14px]">
              Provide a recent utility bill or lease agreement that matches the
              business address listed.
            </div>
          </div>
          <div className="act-bttn-claim" onClick={handleClaimClickThree}>
            <ActionButton label={"Continue"} bg={"pruplr"} />
          </div>

          <div className="step-rect-cont">
            <div className="step-rec"></div>
            <div className="step-rec"></div>
            <div className="step-rec ash"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModalTwo;
