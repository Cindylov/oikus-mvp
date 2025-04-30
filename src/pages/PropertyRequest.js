import React from "react";
import RequestFilters from "../componets/RequestFilters";
import RequestBar from "../componets/RequestBar";



const PropertyRequest = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-md w-full text-center md:w-[70%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="mx-auto text-lg font-semibold">Add a Property Request</h2>
          <button className="text-xl text-gray-500">×</button>
          {/* <button onClick={onClose}>Close</button> */}
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Use our filters or our request bar to tell us your property needs and
          our <br></br> agents will find matching listings for you.
        </p>
        <h2 className="mx-auto text-lg font-semibold text-left">Request Filters</h2>
        <RequestFilters />

        {/* <div className="flex justify-center my-4 text-sm text-gray-500">OR</div> */}
        <div className="flex items-center gap-4 w-[70%] mx-auto my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <h2 className="mx-auto text-lg font-semibold text-left">Request Bar</h2>
        <RequestBar />
      </div>
    </div>
  );
};

export default PropertyRequest;
