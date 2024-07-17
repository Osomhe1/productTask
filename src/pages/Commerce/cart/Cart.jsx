import Header from "components/newCommerce/typography/txtHeader";
import Description from "components/newCommerce/typography/txtDescription";
import { BsArrowLeft } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { Cartdata } from "components/newCommerce/data/cartData";
import { BiMessage } from "react-icons/bi";
import { useState, useEffect } from "react";
// import { ModalContext } from "Context/ModalContext";
import { CommerceModal } from "components/newCommerce/Modals/Reviewpopup";
import Overlay from "components/newCommerce/shared/maodalOverlay";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getCarts,
  UserID,
  getProductInfo,
  Deletecart,
} from "api/commerce/Apiactions";
import { CircularProgress } from "@mui/material";
const Cartpage = () => {
  // const { isOpen, openModal, setModalContent, fetchCartid, nextCartPopup } =
  //   useContext(ModalContext);
  const [cartdata, setCartdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counts, setCounts] = useState([]);

  // fetch-listsof-carts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const request = await getCarts();
        // request && setCartdata(request);
        if (request) {
          // spread-across-the-product-result-and-map-another-request-to-get-their-apis-full-details
          const productPromises = request.map((products) => {
            return getProductInfo(products.product);
          });
          const productdetail = await Promise.all(productPromises);
          const detailedCartData = request.map((item, index) => ({
            ...item,
            ...productdetail[index].data,
          }));
          setCartdata(detailedCartData);
          setCounts(new Array(detailedCartData.length).fill(1));
        }
        setLoading(false);
      } catch (err) {
        err.code === "ERR_NETWORK"
          ? toast.error("Network Error")
          : toast.error("Problem Fetching carts");
        setError(err);
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const removeCart = async () => {
    async function deleteItem() {
      try {
        const response = await Deletecart(cartdata.product);
        response && toast.success("Removed item from cart");
        setCartdata([]);
      } catch (err) {
        err && toast.error("Failed to remove item from cart");
      }
    }
    deleteItem();
  };

  const countPlus = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      return newCounts;
    });
  };

  const countMinus = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(1, newCounts[index] - 1);
      return newCounts;
    });
  };
  const showCart = (payload, data, index) => {
    // setModalContent(payload);
    // !isOpen && openModal();
    // let sum = counts[index];
    // Cartdata[index].quantity = sum;
    // // console.log(Cartdata[index]);
    // // setthe params to the id of the currently clicked cart item
    // fetchCartid(data.id);
    // nextCartPopup("checkoutconfirm");
  };
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="text-center pt-3 bg-[#f5f5f5] flex-[7] pb-2 cart_mobile">
        <div className="mt-[15%]">
          <CircularProgress />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center pt-3 bg-[#f5f5f5] flex-[7] pb-2 cart_mobile">
        <div className="pt-[15%]">
          <h2>Error Fetching cart items</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-3 bg-[#f5f5f5] flex-[7] pb-2 cart_mobile">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center gap-3">
          <BsArrowLeft fontSize="20px" onClick={() => window.history.back()} />
          <Header title="Cart" />
        </div>

        {/* order-history */}
        <button
          className="flex items-center bg-white py-2
        px-3 text-[#000000] gap-4 rounded-md"
          onClick={() => {
            navigate("/commerce/orderhistory");
          }}
        >
          <div className="flex items-center gap-2">
            <TbNotes fontSize="14px" />
            <span className="text-[14px] font-medium">order history</span>
          </div>
          <FaGreaterThan
            className="font-light"
            fontSize="10px"
            fill="#000000"
          />
        </button>
      </div>

      {/* cart-board */}
      {cartdata && cartdata.length < 1 ? (
        <h2 className="text-center mt-[15%]">No Items in cart Yet!</h2>
      ) : (
        <div className="flex flex-col gap-2 mt-4 cart_item_mobile">
          {cartdata &&
            cartdata.map((cart, index) => {
              return (
                <div
                  className="bg-[#ffff] py-3 px-3 flex justify-between flex-wrap items-center rounded-xl gap-y-[1.3rem]"
                  key={cart.id}
                >
                  <div className="flex flex-row gap-3">
                    <div className="w-[120px] h-[70px]">
                      <img
                        className="w-full h-full rounded-lg"
                        src={cart.product_image}
                        alt="cart-product"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start">
                      <Header title={cart.name} fw="500" fz="18px" cl="black" />
                      <Description
                        title={String(cart.total_price).replace(/^/, "$")}
                        fw="500"
                        fs="14px"
                        cl="black"
                      />
                    </div>
                  </div>

                  {/* button-count-increment*/}
                  <div>
                    <button className="bg-[#f5f5f5] px-2 py-0 rounded-sm flex gap-x-4 justify-center items-center text-12px">
                      <span
                        className="text-[18px] "
                        onClick={() => {
                          countMinus(index);
                        }}
                      >
                        -
                      </span>
                      <span className="text-[15px]">{counts[index]}</span>
                      <span
                        className="text-[15px]"
                        onClick={() => {
                          countPlus(index);
                        }}
                      >
                        +
                      </span>
                    </button>
                  </div>

                  {/* remove-item-button */}
                  <button
                    className="flex items-center justify-center gap-x-3 px-2 py-2 bg-[#ffff] text-[13px] text-[red] rounded-lg"
                    onClick={removeCart}
                  >
                    <FiDelete fontSize="20px" stroke="red" />
                    <span className="text-center">Remove</span>
                  </button>

                  {/* message-seller-button */}
                  <button
                    className="flex items-center justify-center gap-x-3 px-2 py-2 bg-[#4f0da3] text-[#ffff] text-[13px] rounded-lg"
                    onClick={() => showCart("checkout", cart, index)}
                  >
                    <BiMessage fontSize="20px" stroke="#ffff" />
                    <span className="text-center">Message seller</span>
                  </button>
                  <CommerceModal />
                  <Overlay />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Cartpage;
