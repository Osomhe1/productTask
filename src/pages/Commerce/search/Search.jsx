import { BsArrowLeft } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { useParams, useNavigate } from "react-router-dom";
import Header from "components/newCommerce/typography/txtHeader";
import InputField from "components/newCommerce/shared/inputField";
import Template from "components/newCommerce/shared/template";
import Adds from "../../../assets/images/adds-section.png";
import { Stack, Box, CircularProgress } from "@mui/material";
import { trendSales } from "components/newCommerce/data/commerceMock";
import sugBusiess from "components/newCommerce/data/suggestedBusiness";
import Suggested from "components/newCommerce/layout/suggestedBus";
import { useState, useEffect } from "react";
import { getProduct } from "api/commerce/Apiactions";
import Stacked from "components/newCommerce/shared/Stacked";
const Search = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const [searchresult, setSearchresult] = useState([]);
  const [searchload, setSearchload] = useState(true);
  const [searcherror, setsearcherror] = useState(null);
  const [searchsuccess, setSearchsuccess] = useState(false);
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await getProduct();
        setSearchresult(response.data);
        setSearchload(false);
        setSearchsuccess(true);
      } catch (err) {
        setsearcherror(err);
        setSearchsuccess(false);
      } finally {
        setSearchload(false);
      }
    };

    fetchSearch();
  }, []);

  // get-filtered-and-checkit-it-contains-the-provided-input

  const filteredResult = searchresult.filter((searched) => {
    const result = searched.name.toLowerCase().includes(query.toLowerCase());
    return result;
  });

  // console.log(filt)
  return (
    <div className="flex-[7] pt-2 pb-3 bg-[#f5f5f5] cart_mobile">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center gap-3">
          <BsArrowLeft fontSize="20px" onClick={() => window.history.back()} />
          <Header title="Search" />
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
      {/* search-valueandmore */}
      <div className="flex justify-between items-center pt-4 w-full gap-x-8">
        {/* search */}
        <div className="w-full">
          <InputField
            value={query}
            styles={valueStyles}
            r=""
            l="2.3rem"
            cname=""
          />
        </div>
        {/* icon-drop */}
        <div className="bg-[#ffff] px-6 py-[1.1rem] rounded-lg border-solid border-[1px] border-[#0000003b] cursor-pointer">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.69971 8.0013V2.66797M13.033 13.3346V11.3346M3.69971 13.3346V10.668M13.033 8.66797V2.66797M8.36637 4.66797V2.66797M8.36637 13.3346V7.33464"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              d="M3.69954 10.6667C4.43592 10.6667 5.03288 10.0697 5.03288 9.33333C5.03288 8.59695 4.43592 8 3.69954 8C2.96316 8 2.36621 8.59695 2.36621 9.33333C2.36621 10.0697 2.96316 10.6667 3.69954 10.6667Z"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              d="M8.36605 7.33464C9.10243 7.33464 9.69938 6.73768 9.69938 6.0013C9.69938 5.26492 9.10243 4.66797 8.36605 4.66797C7.62967 4.66797 7.03271 5.26492 7.03271 6.0013C7.03271 6.73768 7.62967 7.33464 8.36605 7.33464Z"
              stroke="black"
              strokeLinecap="round"
            />
            <path
              d="M13.033 11.3346C13.7694 11.3346 14.3664 10.7377 14.3664 10.0013C14.3664 9.26492 13.7694 8.66797 13.033 8.66797C12.2967 8.66797 11.6997 9.26492 11.6997 10.0013C11.6997 10.7377 12.2967 11.3346 13.033 11.3346Z"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {/* container_search_results */}
      {searchload ? (
        <Stacked
          d="column"
          jc={"center"}
          g={4}
          cname={"mt-[20%] text-center"}
          ai={"center"}
        >
          <h4>Getting Search Results.....</h4>
          <CircularProgress />
        </Stacked>
      ) : (
        <>
          {searcherror && (
            <Stacked
              d="column"
              jc={"center"}
              g={4}
              cname={"mt-[25%] text-center"}
            >
              <h4>Error Getting Search Result</h4>
            </Stacked>
          )}

          {searchsuccess &&
            (filteredResult.length < 1 ? (
              <div className="mt-[25%] text-center">
                <h4>Awn, No Search Result Found...</h4>
              </div>
            ) : (
              <Stack direction="column" gap={3} mt={2} bgcolor="#ffff">
                {/* trnending-section */}
                <Box
                  bgcolor="#ffff"
                  pt={2}
                  pb={2}
                  pr={2}
                  pl={2}
                  className="box_trend"
                >
                  <Box pt={1} className="grid_commerce">
                    <Template content={filteredResult} />
                  </Box>
                </Box>
                {/* adds-section
              <Box
                sx={{
                  paddingInline: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
                }}
              >
                <img
                  src={Adds}
                  alt="adds-section"
                  className="img_ads"
                  style={{ width: "100%" }}
                />
              </Box> */}

                {/* Suggested-business-stick- */}
              </Stack>
            ))}
        </>
      )}
    </div>
  );
};

const valueStyles = {
  width: "100%",
  input: {
    paddingBlock: ".9rem !important",
    background: "white !important",
    textIndent: "2.7rem",
  },
  div: {
    borderRadius: "1.6rem",
  },
};
export default Search;
