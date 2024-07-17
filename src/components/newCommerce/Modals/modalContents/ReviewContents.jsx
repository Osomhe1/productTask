import React, { useEffect, useContext, useState } from "react";
import Reviews from "components/newCommerce/data/Reviews";
import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import AddReview from "./Reviewadd";
import { ButtonSide } from "../../shared/sideButton";
import { ModalContext } from "Context/ModalContext";
import { CircularProgress } from "@mui/material";
import { getReviewcontent } from "api/commerce/Apiactions";
import { FaUser } from "react-icons/fa";
import Stacked from "components/newCommerce/shared/Stacked";
import { useLocation } from "react-router-dom";
import StarActive from "../../../../assets/categorySvg/Star_active.svg";
import StarFade from "../../../../assets/categorySvg/Star_fade.svg";
const ReviewContent = () => {
  const location = useLocation();

  const searchparams = new URLSearchParams(location.search);
  const pid = searchparams.get("id");

  const { currentCheck, movetoAdd } = useContext(ModalContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [starsCounst, setStarscount] = new Array(5).fill(false);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const request = await getReviewcontent(pid);
        setSuccess(true);
        setLoading(false);
        setReviews(request);
      } catch (err) {
        setError(err);
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [currentCheck]);

  const addReview = () => {
    movetoAdd();
  };
  return (
    <div className="content px-4 mt-6 pb-4">
      {currentCheck === "readReview" ? (
        <>
          <div className="flex flex-col items-start gap-3">
            {/* real-review-feedbacks */}

            {loading ? (
              <Stacked
                d="column"
                g={3}
                jc={"center"}
                p={4}
                ai={"center"}
                styles={{
                  alignSelf: "center",
                }}
              >
                <CircularProgress />
                <h4>Fetching Latest reviews for the product...</h4>
              </Stacked>
            ) : (
              <>
                {error ? (
                  <h5
                    className="text-center mt-4"
                    style={{ alignSelf: "center" }}
                  >
                    Error getting reviews for the product
                  </h5>
                ) : success && reviews.length < 1 ? (
                  <h5
                    className="text-center mt-4"
                    style={{ alignSelf: "center" }}
                  >
                    No reviews for this Product Yet!
                  </h5>
                ) : (
                  <>
                    {reviews.map((review) => {
                      return (
                        <div
                          className="flex flex-col items-start pt-2"
                          key={review.id}
                        >
                          {/* first-flex-container-avatar */}
                          <div className="flex flex-row gap-2 items-start">
                            {review.review_pic ? (
                              <img
                                src={review.review_pic}
                                alt="reviwer-avatar"
                                className="w-[40px] h-[40px] rounded-full"
                              />
                            ) : (
                              <FaUser fill="#d9d9d9 " fontSize={"40px"} />
                            )}

                            <div className="flex flex-col g-[1px]">
                              <Header
                                title={review.user || "Anonymous"}
                                fw="500"
                                fz="16px"
                                cl="#000000"
                              />
                              <p className=" centered text-[12px] text-[#222222]">
                                {review.posted_last || "1D"}
                              </p>
                            </div>
                            {/* rating */}
                            {Array.from({ length: 5 }).map((_, index) => (
                              <img
                                className="pt-2"
                                key={index}
                                src={
                                  index < review.rating ? StarActive : StarFade
                                }
                                alt={
                                  index < review.rating
                                    ? "star-active"
                                    : "star-faded"
                                }
                              />
                            ))}
                          </div>
                          {/* feedback-text */}
                          <div>
                            <Description
                              title={review.review}
                              cl="#282828"
                              fw="400"
                              fz="12px"
                              sx={{ textAlign: "left !important" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
          <Description
            title={titleText}
            sx={{
              textAlign: "left !important",
              visibility: "hidden !important",
            }}
          />
          <div className="flex items-center justify-center mt-5">
            <ButtonSide
              title="Review product"
              bg="#4f0da3"
              cl="#ffff"
              jc="initial"
              click={addReview}
              styles={{ paddingInline: "5rem" }}
            />
          </div>
        </>
      ) : (
        <AddReview />
      )}
    </div>
  );
};

// mock-width-span
let titleText =
  "Exceptional product! Impressive quality, versatile features, and user-friendly design. A must-have for anyone seeking top-notch performance. Highly recommend this outstanding product for Home and State.";

export default ReviewContent;
