import { Box, CircularProgress, Stack } from "@mui/material";
import Stacked from "components/newCommerce/shared/Stacked";
import { BsArrowLeft } from "react-icons/bs";
import Header from "components/newCommerce/typography/txtHeader";
import { useParams } from "react-router-dom";
import InputField from "components/newCommerce/shared/inputField";
import Template from "components/newCommerce/shared/template";
import { trendSales } from "components/newCommerce/data/commerceMock";
import Adds from "../../../assets/images/adds-section.png";
import sugBusiess from "components/newCommerce/data/suggestedBusiness";
import Suggested from "components/newCommerce/layout/suggestedBus";
import { setCategoryid } from "utils/commerceUtils";
import { useState, useEffect } from "react";
import { getProduct } from "api/commerce/Apiactions";
import toast from "react-hot-toast";
const inpStyle = {
  div: {
    borderRadius: "10px",
  },
  input: {
    padding: "8px 12px",
    textIndent: "30px",
    width: "350px",
    fontFamily: "Ubuntu !important",
    "&::placeholder": {
      color: "#000000 !important",
      fontStyle: "italic",
      fontSize: "12px",
      fontFamily: "Inter",
    },
  },
};
const Category = () => {
  const { category } = useParams();
  const formatted = setCategoryid(category.toLowerCase());
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await getProduct();
        setLoading(false);
        setDatas(response.data);
      } catch (err) {
        err.code === "ERR_NETWORK"
          ? toast.error("Network Error")
          : toast.error("Problem Fetching Products");
        console.log("Error", err);
        setLoading(false);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchList();
  }, [formatted]);

  const filteredcurrent = datas.filter(
    ({ category }) => category === formatted
  );

  return (
    <Box flex={8} bg="#f5f5f5" pt={3}>
      <Stacked
        d="row"
        ai="center"
        jc="space-between"
        styles={{
          paddingLeft: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
        }}
      >
        <div className="flex flex-row items-center gap-3 ">
          <BsArrowLeft fontSize="20px" onClick={() => window.history.back()} />
          <Header title={category} sx={{ textTransform: "capitalize" }} />
        </div>
        <div className="relative">
          <InputField
            placeholder="Search products"
            styles={inpStyle}
            cname="input-search"
          />
        </div>
      </Stacked>

      {/* C-T-A */}

      <Stack direction="column" gap={3} mt={2} bgcolor="#ffff">
        {/* top-list */}
        <>
          <Box
            bgcolor="#ffff"
            pt={2}
            pb={2}
            pr={2}
            pl={2}
            className="box_trend"
          >
            {loading ? (
              <Stacked
                d="column"
                ai="center"
                jc="center"
                g={3}
                p={8}
                cname={"bg-[#ffff]"}
              >
                <CircularProgress />
                <h4>Fetching Latest Products in this Category...</h4>
              </Stacked>
            ) : (
              <>
                {error ? (
                  <h4 className="text-center">Error Fetching items</h4>
                ) : filteredcurrent && filteredcurrent.length < 1 ? (
                  <Stacked
                    d="column"
                    ai="center"
                    jc="center"
                    g={3}
                    p={2}
                    cname={"mt-[20%]"}
                  >
                    <h4>No items in this category Yet</h4>
                  </Stacked>
                ) : (
                  <>
                    <Box pt={1} className="grid_commerce">
                      <Template content={filteredcurrent} />
                    </Box>
                    {/* <Box bgcolor="#ffff" p={2}>
                      <Header
                        title="Suggested Business"
                        sx={{
                          textAlign: "left",
                          paddingTop: ".2rem",
                          paddingBottom: ".9rem",
                        }}
                      />
                      <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        sx={{ rowGap: "1px" }}
                      >
                        {sugBusiess.map((business) => {
                          return (
                            <Suggested list={business} key={business.id} />
                          );
                        })}
                      </Stack>
                    </Box> */}
                  </>
                )}
              </>
            )}
          </Box>
        </>
      </Stack>
    </Box>
  );
};

export default Category;
