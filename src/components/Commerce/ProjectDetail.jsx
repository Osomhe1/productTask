import { Link } from "react-router-dom";
import ProductDetailHeader from "./ProductDetailHeader";
import "./second.css";
import { AiOutlineStar } from "react-icons/ai";
import ReviewItem from "./ReviewItem";
import ActionButton from "../Commons/Button";
import ProductMajorCard from "./ProductMajorCard";
import { useEffect } from "react";
const ProjectDetail = ({ handleProductClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-detail-container">
      <ProductDetailHeader handleProductClose={handleProductClose} />
      <div className="product-main-deatils-box">
        <div className="product-cover-img">
          <img
            src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="product-det-box-con">
          <div className="pro-nm-tst">Original Leather Bag</div>
          <div className="produc-loc-tst">Lagos, Nigeria</div>
          <div className="pro-duc-pri-tst">#200,000</div>

          <div className="other-img-box">
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="other-pic-each">
              <img
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="pro-dis-head">Product Description</div>
          <div className="desc-cont-body">
            A newly open boxed sneakers for sale.A newly open boxed sneakers for
            sale. A newly open boxed sneakers for sale.A newly open boxed
            sneakers for sale. A newly open boxed sneakers for sale.
          </div>
          <div className="mess-cart-btns">
            <button className="mess-cart-btn orq">Message seller</button>
            <button className="mess-cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="busi-abt">About business</div>

      <div className="fed-pro-bx">
        <div className="im-pro">
          <img
            src="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"
            alt=""
          />
        </div>
        <div className="pro-text-bx">
          <div className="prof-nameo">FedEx</div>
          <Link to={"/"} className="view-pro">
            View profile
          </Link>
        </div>
      </div>

      <div className="review-pro-box">
        <div className="busi-abt">Reviews</div>
        <Link to={"/"} className="view-pro">
          56 reviews
        </Link>
      </div>
      <div className="review-box">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
      <div className="review-pro-box">
        <div className="busi-abt">Add a review</div>
        <form action="">
          <textarea name="" id="" className="review-inp-con"></textarea>
          <div className="rate-act-tton">
            <div className="star-row-box">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <ActionButton label={"Post review"} />
          </div>
        </form>
      </div>
      <div className="prod-ads">
        <img src="images/ads5.png" alt="" />
      </div>
      <div className="people-also-view">
        <div className="busi-abt">People also viewed</div>
        <div className="product-card-row">
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
          <ProductMajorCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
