import { BiSearch } from "react-icons/bi";
// import { GoFilter } from "react-icons/go";
import "./style.css";
import { IoMdCloseCircle } from "react-icons/io";
// import { useState } from "react";
// import BussinessFilterModal from "../Modals/BussinessFilterModal";

const BusinessSearch = ({
  NearbyBiz,
  setNearbyBiz,
  searchQuery,
  setSearchQuery,
  handleClearSearch,
}) => {
  console.log("BusinessSearch", NearbyBiz);
  // const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      // If the query is empty, reset NearbyBiz to its original value
      handleClearSearch();
    } else {
      // Filter the NearbyBiz based on the search query
      const filteredResults = NearbyBiz.filter((biz) =>
        biz.business_name.toLowerCase().includes(query)
      );
      setNearbyBiz(filteredResults);
    }
  };

  return (
    <div className="business-search-container">
      <div className="search-container-busi">
        <BiSearch />
        <input
          type="text"
          className="search-inp-bus"
          placeholder="Find business"
          value={searchQuery}
          onChange={handleSearch}
        />

        <div onClick={handleClearSearch}>
          <IoMdCloseCircle color="#000" />
        </div>
      </div>
      {/* {isFilterOpen && <BussinessFilterModal />}
      <div className="filter-search-bus" onClick={handleFilterClick}>
        <GoFilter />
      </div> */}
    </div>
  );
};

export default BusinessSearch;
