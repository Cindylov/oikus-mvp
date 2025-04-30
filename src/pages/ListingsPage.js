import React from "react";
import HeaderSearch from "../componets/HeaderSearch";
import FilterOptions from "../componets/FilterOptions";
import PropertyLists from "../componets/PropertyLists";
import MapSection from "../componets/MapSection";

const ListingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderSearch />
      <FilterOptions />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <PropertyLists />
        </div>
        <MapSection />
      </div>
    </div>
  );
};

export default ListingsPage;
