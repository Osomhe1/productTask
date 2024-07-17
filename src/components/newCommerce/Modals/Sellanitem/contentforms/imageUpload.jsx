import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";

const ImageUploader = ({ uploadedimages }) => {
  const [images, setImages] = useState(new Array(8).fill(null)); // Initialize state with 8 null values

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file);
      setImages(updatedImages);
    }
  };

  useEffect(() => {
    uploadedimages(images.filter(Boolean)); // Filter out null values before passing to the parent component
  }, [images, uploadedimages]);

  const renderUploadButton = (index) => {
    return (
      <div className="upload-button" key={index}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, index)}
          style={{ display: "none" }}
          id={`upload-${index}`}
        />
        <label htmlFor={`upload-${index}`} className="upload-label">
          {images[index] ? (
            <img
              src={images[index]}
              alt={`uploaded-${index}`}
              className="uploaded-image pop_out"
            />
          ) : (
            <div className="upload-placeholder">
              <MdAdd fontSize={"25px"} />
            </div>
          )}
        </label>
      </div>
    );
  };

  return (
    <div className="image-uploader">
      {images.map((_, index) => {
        if (index === 0 || images[index - 1]) {
          return renderUploadButton(index);
        }
        return null;
      })}
    </div>
  );
};

export default ImageUploader;
