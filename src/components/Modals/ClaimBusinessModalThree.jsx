import { AiOutlineArrowLeft } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import { useState } from "react";

const ClaimBusinessModalThree = ({
  handleClaimClickCloseThree,
  handleClaimClickDone,
}) => {
  const [nin, setNin] = useState(null);
  const [voter, setVoter] = useState(null);
  const [driver, setDriver] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState("");

  const handleNinInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNin(file);
    }
  };
  const handleVoterInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVoter(file);
    }
  };
  const handleDriverInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDriver(file);
    }
  };
  const handleDocumentChange = (e) => {
    setSelectedDocument(e.target.value);
  };

  return (
    <div className="postFormModal-container status-modal-container  h-[400px] lg:h-[600px]  overflow-y-scroll">
      <div className="over-scr">
        {" "}
        <div className="flex justify-between w-full items-center">
          <AiOutlineArrowLeft size={20} onClick={handleClaimClickCloseThree} />
          <div className="claim text-[14px] lg:text-[18px] font-bold">
            Claim Business
          </div>
          <img src="images/lo2.png" alt="logo" className="w-[30px]" />
        </div>
        <div className="claim-gen-bdy">
          <div className="letter-dear provid text-[12px] lg:text-[14px] text-center">Upload Ownership Documents</div>
          <div className="letter-bdy text-[12px] lg:text-[14px] text-center">
            Verify identity for secure ownership confirmation
          </div>
          <div className="input-containe-claim mt-4">
            <div className="double-input">
              <div className="inp-label-box">
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="inp-label-box mt-4">
                <label htmlFor="">Last name</label>
                <input
                  type="text"
                  className="claim-inp"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box mt-4">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="claim-inp"
                  placeholder="Enter email address"
                />
              </div>
              <div className="inp-label-box mt-4">
                <label htmlFor="">Phone number</label>
                <input
                  type="tel"
                  className="claim-inp"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="double-input">
              <div className="inp-label-box mt-4">
                <label htmlFor="">Identification Document</label>
                <select
                  name=""
                  id=""
                  className="claim-inp"
                  onChange={handleDocumentChange}
                  value={selectedDocument}
                >
                  <option value="">Select One</option>
                  <option value="Driver_licence">Driver Licence</option>
                  <option value="NIN">NIN</option>
                  <option value="Voters_card">Voter's Card</option>
                </select>
              </div>
            </div>
            {selectedDocument === "Driver_licence" && (
              <div className="double-input driver">
                <div className="inp-label-box">
                  <label htmlFor="">Driver Licence</label>
                  <div className="input-click">
                    <div className="claim-inp no-bor">
                      {driver ? driver.name : "Choose file to upload"}
                    </div>
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleDriverInputChange}
                      style={{ display: "none" }}
                      id="driver-inp"
                    />
                    <label htmlFor="driver-inp" className="sel-btnn">
                      Select file
                    </label>
                  </div>
                </div>
              </div>
            )}
            {selectedDocument === "Voters_card" && (
              <div className="double-input voter">
                <div className="inp-label-box">
                  <label htmlFor="">Voter's Card</label>
                  <div className="input-click">
                    <div className="claim-inp no-bor">
                      {voter ? voter.name : "Choose file to upload"}
                    </div>
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleVoterInputChange}
                      style={{ display: "none" }}
                      id="voter-inp"
                    />
                    <label htmlFor="voter-inp" className="sel-btnn">
                      Select file
                    </label>
                  </div>
                </div>
              </div>
            )}
            {selectedDocument === "NIN" && (
              <div className="double-input nin">
                <div className="inp-label-box">
                  <label htmlFor="">NIN</label>
                  <div className="input-click">
                    <div className="claim-inp no-bor">
                      {nin ? nin.name : "Choose file to upload"}
                    </div>
                    <input
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleNinInputChange}
                      style={{ display: "none" }}
                      id="Nin-inp"
                    />
                    <label htmlFor="Nin-inp" className="sel-btnn">
                      Select file
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="act-bttn-claim" onClick={handleClaimClickDone}>
          <ActionButton label={"Continue"} bg={"pruplr"} />
          </div>

          <div className="step-rect-cont">
            <div className="step-rec"></div>
            <div className="step-rec "></div>
            <div className="step-rec "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimBusinessModalThree;
