import React from "react";

const RequestBar = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center w-full px-4 py-2 border rounded">
        <input
          type="text"
          placeholder="I'm looking for a 5 Bedroom House in Ajah"
          className="flex-grow outline-none"
        />
        <button className="text-gray-400">✈️</button>
      </div>

      <button className="bg-[#12AF9B] text-white px-14 py-2 rounded-lg mt-4 w-full md:w-auto">
        Submit Request
      </button>
    </div>
  );
};

export default RequestBar;
