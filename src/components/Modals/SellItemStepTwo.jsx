import { AiOutlineArrowLeft, AiOutlineRight } from "react-icons/ai";
import { HiOutlinePhoto } from "react-icons/hi2";
import "./Second.css";
import { useState } from "react";
const SellItemStepTwo = ({
  handleCloseMainContainerClick,
  handleSellPreviewClick,
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);
  const [uploadedImage3, setUploadedImage3] = useState(null);
  const [uploadedImage4, setUploadedImage4] = useState(null);
  const [uploadedImage6, setUploadedImage6] = useState(null);
  const [uploadedImage5, setUploadedImage5] = useState(null);
  const [uploadedImage7, setUploadedImage7] = useState(null);
  const [uploadedImage8, setUploadedImage8] = useState(null);
  const [uploadedImage9, setUploadedImage9] = useState(null);
  const [uploadedImage10, setUploadedImage10] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setUploadedImage(URL.createObjectURL(imageFile));
  };
  const handleImageUpload2 = (event) => {
    const imageFile2 = event.target.files[0];
    setUploadedImage2(URL.createObjectURL(imageFile2));
  };
  const handleImageUpload3 = (event) => {
    const imageFile3 = event.target.files[0];
    setUploadedImage3(URL.createObjectURL(imageFile3));
  };
  const handleImageUpload4 = (event) => {
    const imageFile4 = event.target.files[0];
    setUploadedImage4(URL.createObjectURL(imageFile4));
  };
  const handleImageUpload5 = (event) => {
    const imageFile5 = event.target.files[0];
    setUploadedImage5(URL.createObjectURL(imageFile5));
  };
  const handleImageUpload6 = (event) => {
    const imageFile6 = event.target.files[0];
    setUploadedImage6(URL.createObjectURL(imageFile6));
  };
  const handleImageUpload7 = (event) => {
    const imageFile7 = event.target.files[0];
    setUploadedImage7(URL.createObjectURL(imageFile7));
  };
  const handleImageUpload8 = (event) => {
    const imageFile8 = event.target.files[0];
    setUploadedImage8(URL.createObjectURL(imageFile8));
  };
  const handleImageUpload9 = (event) => {
    const imageFile9 = event.target.files[0];
    setUploadedImage9(URL.createObjectURL(imageFile9));
  };
  const handleImageUpload10 = (event) => {
    const imageFile10 = event.target.files[0];
    setUploadedImage10(URL.createObjectURL(imageFile10));
  };
  return (
    <div className="postFormModal-container status-modal-container">
      {" "}
      <div className="over-scr">
        <div className="sell-ccont">
          <div className="sell-connt">
            <AiOutlineArrowLeft
              className="cls-post"
              onClick={handleCloseMainContainerClick}
            />
            <div className="fels">
              <div className="ceny">Upload images</div>
            </div>
          </div>
        </div>
        <div className="sell-form-item">
          <div className="sell-form-head">You can add upto 5 images</div>
          <div className="price-txt">The first image is the cover image</div>
          <div className="all-ima-container">
            <div className="cover-row-ima">
              <div className="first-cover">
                {uploadedImage && (
                  <img
                    src={uploadedImage}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput").click();
                    }}
                  />
                )}
                {uploadedImage ? null : (
                  <label htmlFor="imageInput" className="first-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
              <div className="first-cover">
                {uploadedImage2 && (
                  <img
                    src={uploadedImage2}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput2").click();
                    }}
                  />
                )}
                {uploadedImage2 ? null : (
                  <label htmlFor="imageInput2" className="first-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput2"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload2}
                />
              </div>
            </div>
            <div className="cover-row-ima">
              <div className="rest-cover">
                {uploadedImage3 && (
                  <img
                    src={uploadedImage3}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput3").click();
                    }}
                  />
                )}
                {uploadedImage3 ? null : (
                  <label htmlFor="imageInput3" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput3"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload3}
                />
              </div>
              <div className="rest-cover">
                {uploadedImage4 && (
                  <img
                    src={uploadedImage4}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput4").click();
                    }}
                  />
                )}
                {uploadedImage4 ? null : (
                  <label htmlFor="imageInput4" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput4"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload4}
                />
              </div>
              <div className="rest-cover">
                {uploadedImage5 && (
                  <img
                    src={uploadedImage5}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput5").click();
                    }}
                  />
                )}
                {uploadedImage5 ? null : (
                  <label htmlFor="imageInput5" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput5"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload5}
                />
              </div>
              <div className="rest-cover">
                {uploadedImage6 && (
                  <img
                    src={uploadedImage6}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput6").click();
                    }}
                  />
                )}
                {uploadedImage6 ? null : (
                  <label htmlFor="imageInput6" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput6"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload6}
                />
              </div>
            </div>
            <div className="cover-row-ima">
              <div className="rest-cover">
                {uploadedImage7 && (
                  <img
                    src={uploadedImage7}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput7").click();
                    }}
                  />
                )}
                {uploadedImage7 ? null : (
                  <label htmlFor="imageInput7" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput7"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload7}
                />
              </div>
              <div className="rest-cover">
                {uploadedImage8 && (
                  <img
                    src={uploadedImage8}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput8").click();
                    }}
                  />
                )}
                {uploadedImage8 ? null : (
                  <label htmlFor="imageInput8" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput8"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload8}
                />
              </div>{" "}
              <div className="rest-cover">
                {uploadedImage9 && (
                  <img
                    src={uploadedImage9}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput9").click();
                    }}
                  />
                )}
                {uploadedImage9 ? null : (
                  <label htmlFor="imageInput9" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput9"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload9}
                />
              </div>
              <div className="rest-cover">
                {uploadedImage10 && (
                  <img
                    src={uploadedImage10}
                    alt=""
                    onClick={() => {
                      document.getElementById("imageInput10").click();
                    }}
                  />
                )}
                {uploadedImage10 ? null : (
                  <label htmlFor="imageInput10" className="rest-cover">
                    <HiOutlinePhoto />
                  </label>
                )}
                <input
                  type="file"
                  id="imageInput10"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload10}
                />
              </div>
            </div>
          </div>
          <div className="guildness-btn">
            <div className="txt-uiness">Read image upload Guidelines</div>
            <AiOutlineRight />
          </div>

          <div className="next-bbbtn">
            <div className="next-step-box" onClick={handleSellPreviewClick}>
              Move to step 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItemStepTwo;
