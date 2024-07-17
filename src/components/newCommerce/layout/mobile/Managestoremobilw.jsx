import { useEffect, useState, useContext } from "react";
import Stacked from "components/newCommerce/shared/Stacked";
import { CircularProgress, Fab } from "@mui/material";
import { Storeslist } from "api/commerce/Apiactions";
import { ModalContext } from "Context/ModalContext";
import { BsThreeDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import Description from "components/newCommerce/typography/txtDescription";
import { useNavigate } from "react-router-dom";
import Menumore from "../Menumore";
const Managestoremobile = () => {
  const [loading, setLoading] = useState(true);
  const [store, setStores] = useState([]);
  const [error, setError] = useState(null);
  const [currentStore, setCurrentStore] = useState("Store1");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { isCreated, setisCreated } = useContext(ModalContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStore = async () => {
      setLoading(true);
      setStores([]);
      setError(null);
      try {
        const request = await Storeslist();
        setLoading(false);
        setStores(request.data);
        setisCreated(false);
      } catch (err) {
        console.error(
          "error getting list:",
          err.response ? err.response.data : err.message
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStore();
    // eslint-disable-next-line
  }, [isCreated]);

  const switchStore = (storename) => {
    setCurrentStore(storename);
    navigate(`/commerce/managestore?store=${storename}`, { replace: true });
  };

  return (
    <Stacked
      d="column"
      g={2}
      cname={"w-full pt-3 relative min-h-[60vh] h-full"}
    >
      {loading ? (
        <Stacked d="column" ai="center" jc="center" g={3} p={2}>
          <CircularProgress />
        </Stacked>
      ) : (
        <>
          {error ? (
            <h4 className="text-center">Error getting items</h4>
          ) : store.length < 1 ? (
            <div className="text-center text-[1.6rem]">
              No stores available,Create New.
            </div>
          ) : (
            store.map((store, index) => {
              return (
                <div key={store.id}>
                  <div
                    className="flex gap-x-6 px-8  py-4 cursor-pointer  w-full justify-between flex-shrink-0 rounded-lg"
                    style={{
                      background:
                        currentStore === `Store${index + 1}`
                          ? "rgba(79, 13, 163, 0.2)"
                          : "rgba(217, 217, 217, 0.2)",
                    }}
                  >
                    <div
                      className="flex gap-x-4 items-center"
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
              );
            })
          )}
        </>
      )}
      <Createstoreicon />
    </Stacked>
  );
};

const Createstoreicon = () => {
  const { isOpen, setModalContent, openModal } = useContext(ModalContext);

  const createStore = (payload) => {
    setModalContent(payload);
    !isOpen && openModal();
  };
  return (
    <div className="absolute bottom-[20%] right-10 z-[99] icon_toggle">
      <Fab sx={fabStyles} onClick={() => createStore("createbusiness")}>
        <div>
          <GrAdd fontSize="24px" stroke="white" />
        </div>
      </Fab>
    </div>
  );
};

const fabStyles = {
  background: "rgba(79, 13, 163, 1)",
  width: "45px",
  height: "45px",
  zIndex: 12,
  boxShadow: "none !important",

  "&:hover": {
    background: "rgba(79, 13, 163, 1) !important",
  },
};
export default Managestoremobile;
