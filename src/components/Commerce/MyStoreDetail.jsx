import { Link } from "react-router-dom";
import ProductDetailHeader from "./ProductDetailHeader";
import "./second.css";
import ReviewItem from "./ReviewItem";
import { useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
const MyStoreDetail = ({ handleProductClose }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteModalClick = () => {
    setIsDeleteModalOpen(true);
  };
  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

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
          {isDeleteModalOpen && (
            <div className="modal-full-container">
              <DeleteModal handleDeleteModalClose={handleDeleteModalClose} />
            </div>
          )}
          <div className="mess-cart-btns">
            <button
              className="mess-cart-btn orq"
              onClick={handleDeleteModalClick}
            >
              Delete product
            </button>
            <button className="mess-cart-btn">Edit product</button>
          </div>
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

      <div className="prod-ads">
        <img src="images/ads5.png" alt="" />
      </div>
    </div>
  );
};

export default MyStoreDetail;
