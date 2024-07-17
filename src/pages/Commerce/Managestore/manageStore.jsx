import { TbNotes } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Header from "components/newCommerce/typography/txtHeader";
import Storetemplate from "components/newCommerce/shared/Storetemplate";
import { Store } from "components/newCommerce/data/storeData";
import { useCallback, useContext, useEffect, useState } from "react";
import { Box, Stack, Fab, CircularProgress } from "@mui/material";
import Adds from "../../../assets/images/adds-section.png";
import { ModalContext } from "Context/ModalContext";
import Overlay from "components/newCommerce/shared/maodalOverlay";
import { CommerceModal } from "components/newCommerce/Modals/Reviewpopup";
import { GrAdd } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import Description from "components/newCommerce/typography/txtDescription";
import { Storeslist, getStoreproducs } from "api/commerce/Apiactions";
import Stacked from "components/newCommerce/shared/Stacked";
import Menumore from "components/newCommerce/layout/Menumore";
const Managestore = () => {
  const {
    isOpen,
    setModalContent,
    openModal,
    isCreated,
    setcontentstore,
    setisCreated,
  } = useContext(ModalContext);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setErr] = useState(null);
  const [currentStore, setCurrentStore] = useState();
  const [storeLoad, setStoreload] = useState(true);
  const [storeproduct, setStoreproduct] = useState([]);
  const [storeSuccess, setStoresuccess] = useState(false);
  const [storeError, setStoreerror] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const switchStore = (storename) => {
    setCurrentStore(storename);
    navigate(`/commerce/managestore?store=${storename}`, { replace: true });
  };

  // open-create-business-modal
  const handleNew = () => {
    setModalContent("createbusiness");
    !isOpen && openModal();
  };
  const navigate = useNavigate();

  const fetchStores = useCallback(async () => {
    setLoading(true);
    setStores([]);
    setSuccess(false);
    setErr(null);
    setcontentstore([]);

    try {
      const request = await Storeslist();
      setLoading(false);
      setStores(request.data);
      setSuccess(true);
      if (request.data.length > 0) {
        setCurrentStore("Store1");
        setcontentstore(request.data);
        navigate(`/commerce/managestore?store=Store1`, { replace: true });
        setisCreated(false);
      }
    } catch (err) {
      console.error(
        "error getting list:",
        err.response ? err.response.data : err.message
      );
      setErr(err);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [navigate, isCreated]);

  useEffect(() => {
    fetchStores();
  }, [fetchStores, isCreated]);

  useEffect(() => {
    // async-funct-toget-store-list
    const fetchitemsinSotre = async () => {
      try {
        const response = await getStoreproducs();
        console.log(response);
        setStoreproduct(response.data);
        setStoreload(false);
        setStoresuccess(true);
      } catch (err) {
        console.error("Errror", err);
        setStoreload(false);
        setStoreerror(err);
      } finally {
        setStoreload(false);
      }
    };

    fetchitemsinSotre();
  }, [stores, currentStore, isCreated]);
  return (
    <div className="pt-3 bg-[#f5f5f5] flex-[7] pb-2 cart_mobile overflow-x-auto">
      <div className="flex flex-row items-center  flex-wrap justify-between ">
        <div className="flex flex-row items-center gap-3">
          <BsArrowLeft fontSize="20px" onClick={() => window.history.back()} />
          <Header title="Manage Store" />
        </div>

        {/* my-orders */}
        <button
          className="flex items-center bg-white py-2
        px-3 text-[#000000] gap-4 rounded-md"
          onClick={() => {
            navigate("/commerce/managestore/myorders");
          }}
        >
          <div className="flex items-center gap-2">
            <TbNotes fontSize="14px" />
            <span className="text-[14px] font-small">My Orders</span>
          </div>
          <FaGreaterThan
            className="font-light"
            fontSize="10px"
            fill="#000000"
          />
        </button>
      </div>

      {/* stores */}
      <Stack direction="column" pb={2} gap={3} mt={2} bgcolor="#ffff">
        {/* stores-lists */}
        {loading ? (
          <Stacked d="column" ai="center" jc="center" g={3} p={2}>
            <CircularProgress />
          </Stacked>
        ) : (
          <>
            {success && (
              <div className="flex pt-5 px-8 gap-4 overflow-x-auto items-center max-[640px]:hidden  ">
                <div
                  className="flex items-center gap-x-4 pl-3 pr-1  py-4 cursor-pointer w-[190px] flex-shrink-0"
                  onClick={handleNew}
                  style={{ background: "rgba(217, 217, 217, 0.2)" }}
                >
                  <Fab sx={fabStyles}>
                    <GrAdd fontSize={"20px"} stroke="#ffff" />
                  </Fab>
                  {/* <span>Create New </span> */}
                  <Description title={"Create New"} cl="#000000" />
                </div>
                {stores.length < 1 ? (
                  <div className="text-[1.6rem]">
                    No stores available,Create New.
                  </div>
                ) : (
                  stores.map((store, index) => {
                    return (
                      <div key={store.id}>
                        <div
                          className="flex gap-x-6 pl-5 pr-3 py-2 cursor-pointer max-w-[250px]  w-[100%] justify-between flex-shrink-0 rounded-lg"
                          style={{
                            background:
                              currentStore === `Store${index + 1}`
                                ? "rgba(79, 13, 163, 0.2)"
                                : "rgba(217, 217, 217, 0.2)",
                          }}
                        >
                          <div
                            className="flex gap-x-2 items-center"
                            onClick={() => switchStore(`Store${index + 1}`)}
                          >
                            <img
                              className="w-[68px] h-[68px] rounded-[50%] object-cover"
                              src={store.store_image}
                              alt="coverbg"
                            />
                            <div className="flex flex-col gap-y-3">
                              <Description
                                title={store.name}
                                cl="#000000"
                                fw="bold"
                                fs={"13px"}
                              />
                              <Description
                                title={store.description}
                                cl="#000000"
                                fs="12px"
                                fw="400"
                              />
                            </div>
                          </div>
                          <div
                            className="relative z-50 cursor-pointer"
                            onClick={handleClick}
                          >
                            <BsThreeDots fontSize="20px" />
                          </div>
                          <div className="relative">
                            <Menumore
                              anchorEl={anchorEl}
                              open={open}
                              handleClose={handleClose}
                              currentuse={store.id}
                              closer={setAnchorEl}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
            {error && <h2 className="text-center">Error: {error.message}</h2>}
          </>
        )}

        {/* section-2 */}

        <Box pt={4} pb={2} pr={2} pl={2} className="box_trend">
          {storeLoad ? (
            <Stacked d="column" ai="center" jc="center" g={3} p={2}>
              <CircularProgress />
            </Stacked>
          ) : (
            <>
              {storeError ? (
                <h4 className="text-center">Error getting items</h4>
              ) : storeSuccess && storeproduct.length < 1 ? (
                <h4 className="text-center">
                  No items in Store yet Sell a product
                </h4>
              ) : (
                <Box pt={1} className="grid_commerce">
                  <Storetemplate content={storeproduct} />
                </Box>
              )}
            </>
          )}
        </Box>

        {/* adds-section */}
        <Box
          sx={{
            paddingInline: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
          }}
        >
          {/* <img
            src={Adds}
            alt="adds-section"
            className="img_ads"
            style={{ width: "100%" }}
          /> */}
        </Box>
      </Stack>
      <CreateProducticon />
      <CommerceModal />
      <Overlay />
    </div>
  );
};

const CreateProducticon = () => {
  const { isOpen, setModalContent, openModal } = useContext(ModalContext);

  const createStore = (payload) => {
    setModalContent(payload);
    !isOpen && openModal();
  };
  return (
    <div className="absolute bottom-[10%] right-10 z-[99] icon_toggle">
      <Fab sx={fabcreate} onClick={() => createStore("sellitem")}>
        <div>
          <GrAdd fontSize="24px" stroke="white" />
        </div>
      </Fab>
    </div>
  );
};

const fabcreate = {
  background: "#FF8A15",
  width: "45px",
  height: "45px",
  zIndex: 12,
  boxShadow: "none !important",

  "&:hover": {
    background: "#FF8A15 !important",
  },
};

const fabStyles = {
  background: "#4f0da3",
  width: "50px",
  height: "50px",
  zIndex: "9",
  boxShadow: "none !important",

  "&:hover": {
    background: "#4f0da3",
  },
};

export default Managestore;
