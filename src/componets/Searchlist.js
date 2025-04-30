import React from 'react';
import PropertyCard from "./PropertyCard";

const Searchlist = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="flex justify-between">
      <div>
      <p className="text-gray-600 font-bold mb-6">Showing  1024 active listings of “2 Bedroom flats in Surulere”</p>
      </div>

      <div>
      <select>
        <option className='text-gray-600'>Sort by <span className='text-[#12AF9B]'>Relevant Listings</span></option>
        <option>Sort by important Listings</option>
        <option>Sort by some Listings</option>
      </select>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <PropertyCard key={item} />
        ))}
      </div>
    </section>
  );
};

export default Searchlist;