import { MdUploadFile } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Description from "components/newCommerce/typography/txtDescription";
import { useEffect, useState } from "react";
export const CoverUpload = ({ imagelist }) => {
  const [images, setImages] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    if (file) {
      const blobStore = URL.createObjectURL(file);

      setImages((rest) => ({
        ...rest,
        [name]: blobStore,
      }));
    }
  };

  useEffect(() => {
    imagelist(images);
  }, [images, imagelist]);
  return (
    <div className="relative">
      {/* background-cover-image */}
      <div className="bg-[#4f0da3] w-full h-[135px]">
        {/* mock-tip */}
        <input
          type="file"
          accept="image/*"
          className="hidden pop_out"
          name="cover_image"
          id="bg_cover"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="bg_cover" className="w-full h-full">
          {images.cover_image ? (
            <>
              <img
                src={images.cover_image}
                alt="cover_bg"
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <div className=" pt-3 flex flex-col justify-center items-center gap-2 relative">
              <MdUploadFile fontSize={"25px"} fill="white" />
              <Description
                title={"Add cover photo"}
                cl={"#f5f5f5"}
                fs={"14px"}
                sx={{ paddingTop: ".6rem" }}
                align={"center"}
              />
            </div>
          )}
          <div className="absolute bottom-3 right-5 bg-orange-500 w-12 h-12 rounded-full flex justify-center items-center  text-center ">
            <CiEdit fontSize={"18px"} fill="white" />
          </div>
        </label>
      </div>
      <>
        {/* profile-pi-change */}
        <div className="absolute top-[65%] left-[50%] w-40 h-40 rounded-full bg-[#fff] border-[2px] border-solid border-[#4f0da3] translate-x-[-50%] ">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar_cover"
            name="avatar_image"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="avatar_cover" className="w-full h-full z-20">
            {images.avatar_image ? (
              <>
                <img
                  src={images.avatar_image}
                  alt="avatar_bg"
                  className="w-full h-full object-cover rounded-full pop_out"
                />
              </>
            ) : (
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <FaUser fill="#4f0da3" fontSize={"5.2rem"} />
              </div>
            )}
            <div className="absolute bottom-3 right-2 bg-orange-500 w-10 h-10 rounded-full flex justify-center items-center  text-center ">
              <CiEdit fontSize={"16px"} fill="white" />
            </div>
          </label>
        </div>
        <div className="absolute mt-[5.5rem] text-center w-full">
          <Description
            title={"Set profile picture"}
            cl={"#443A3A"}
            fs={"14px"}
            sx={{ paddingTop: ".6rem" }}
            align={"center"}
          />
        </div>
      </>
    </div>
  );
};
