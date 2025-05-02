import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { useNavigate } from "react-router-dom";
import SearchForm from "./home/SearchForm";

const Searchlist = () => {
  const location = useLocation();
  const query = location.state?.query || "";
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(query, "qwery");


  useEffect(() => {
    if (!query) return;

    const fetchProperties = async () => {
      try {
        const response = await axios.post(
          "https://search-feature-eight.vercel.app/get_property/",
          { text: query }
        );
        setProperties(response.data || []);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [query]);

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Redirect to /search and pass the query via state
    navigate("/search", { state: { query: searchQuery } });
  };

  return (
    <section className="px-6 py-12 bg-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <p className="font-bold text-gray-600">
          Showing {properties.length} result{properties.length !== 1 && "s"} for “{query}”
        </p>

        <select className="self-start md:self-auto">
          <option>Sort by Relevant Listings</option>
          <option>Sort by Recent Listings</option>
        </select>
      </div>

      {loading ? (
        <p className="mt-6">Loading...</p>
      ) : properties.length === 0 ? (
        <p className="mt-6">No properties found for your search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      )}
      <div className="">
        <div className="fixed bottom-0 z-50 w-full max-w-screen-xl px-6 transform -translate-x-1/2 bg-white shadow-md left-1/2 md:w-[70%] lg:ms-36">
          <SearchForm
            onSubmit={handleSubmit}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            // className={"hidden"}
          />
        </div>

      </div>
    </section>
  );
};

export default Searchlist;
