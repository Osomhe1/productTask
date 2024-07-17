import Description from "components/newCommerce/typography/txtDescription";
import Header from "components/newCommerce/typography/txtHeader";
import StarActive from "../../../../assets/categorySvg/Star_active.svg";
import StarFade from "../../../../assets/categorySvg/Star_fade.svg";
import { useEffect, useState } from "react";
import { ButtonSide } from "components/newCommerce/shared/sideButton";
import { useLocation } from "react-router-dom";
import { UserID, rateProduct } from "api/commerce/Apiactions";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddReview = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");
  const [stars, setStars] = useState(new Array(5).fill(false));
  const [loading, setLoading] = useState(false);
  // const [activeStar, setactivestar] = useState(false);
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const product_id = searchparams.get("id");
  //onchanging text-area
  const handleChange = (e) => {
    setVal(e.target.value);
    // updating-count-words

    setCount(val.length);
  };

  //strictly-updating count state
  useEffect(() => {
    val === "" && setCount(0);
  }, [val]);

  const toggleStar = (index) => {
    const newStars = stars.map((star, i) => (i === index ? !star : star));
    setStars(newStars);
  };

  const activeStarsCount = stars.reduce(
    (count, isActive) => count + (isActive ? 1 : 0),
    0
  );

  const handleSubmit = async () => {
    if (activeStarsCount < 1) {
      alert("click on the star to add rating!");
      return;
    }

    setLoading(true);
    const formdata = {
      product: product_id || null,
      user: UserID,
      rating: activeStarsCount,
      review: val,
    };

    // send-form-data
    try {
      const response = await rateProduct(formdata);
      response && toast.success(`Succesfully added review`);
      setLoading(false);
    } catch (err) {
      err && toast.error(`Failed to post review`, err.message);

      setLoading(false);
    } finally {
      setVal("");
    }
  };

  const title =
    "Your opinion matters! Help the community by rating the product you've tried.Share your experience to guide fellow shoppers.";
  return (
    <div className="flex flex-col items-center justify-center mx-auto pt-3 px-[10%] gap-8 pb-3 max-[512px]:px-[3%]">
      <Description
        title={title}
        fw="500"
        fs="14px"
        cl="#222222"
        align={"center"}
      />

      <div className="flex flex-row gap-4 items-center">
        {stars.map((isActive, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => toggleStar(index)}
            >
              <img
                src={isActive ? StarActive : StarFade}
                alt={isActive ? "star-active" : "star-faded"}
                width={"40px"}
              />
            </div>
          );
        })}
        {/* <img src={StarFade} alt="star-faded" /> */}
      </div>
      <p>
        {activeStarsCount} star{activeStarsCount !== 1 ? "s" : ""} selected
      </p>
      <div>
        <Header
          title="Any comments?"
          fw="500"
          fz="15px"
          cl="#000000"
          align={"center"}
        />
        <div className=" pt-1.5 relative w-full">
          <textarea
            onChange={handleChange}
            value={val}
            maxLength={500}
            className="bg-[#4f0da308] text-[black] text-[13px] border-none rounded-md px-3 py-4 font-[Ubuntu]  w-[100%] resize-none placeholder:font-[ubuntu] placeholder:text-[#c4c4c4] placeholder:text-[13px]"
            name="review"
            placeholder="Share your experience"
            id="review"
            cols="100"
            rows="8"
          ></textarea>
          <p className="absolute bottom-[0.15rem] text-[13px] text-[#c4c4c4] right-3">{`${count}/500 words`}</p>
        </div>
      </div>
      <div className="mt-1">
        {/* call-button-to-update fields and send as API */}
        <ButtonSide
          title={loading ? "Adding review" : "Review product"}
          bg="#4f0da3"
          cl="#ffff"
          jc="initial"
          styles={{ paddingInline: "6rem" }}
          pb={".8rem"}
          start={
            loading ? (
              <AiOutlineLoading3Quarters className="animate-spin mt-[0.5rem] text-[20px] mr-4" />
            ) : null
          }
          isDisabled={loading ? true : false}
          click={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddReview;
