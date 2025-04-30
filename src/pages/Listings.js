import React from "react";
import FilterBar from "../componets/FilterBar";
import SearchHeader from "../componets/SearchHeader";
import PropertyGrid from "../componets/PropertyGrid";

const Listings = () => {
  return (
    <>
      <FilterBar />
      <SearchHeader />
      <PropertyGrid />
    </>
  );
};

export default Listings;
