import React from "react";

const HeaderSearch = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md flex-wrap gap-3">
      <h1 className="text-xl font-semibold text-green-700">Oikus</h1>
      <input
        type="text"
        placeholder='Show me 2 Bedroom flats in Surulere'
        className="border rounded-full px-4 py-2 w-full md:w-[400px]"
      />
      <div className="flex items-center gap-2">
        <button className="bg-gray-200 px-4 py-2 rounded text-sm">Grid</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Map</button>
      </div>
    </header>
  );
};

export default HeaderSearch;
