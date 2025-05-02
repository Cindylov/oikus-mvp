import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../hero.css";
// import Button from "./home/Button";
import SearchForm from "./home/SearchForm";
// import { ReactTyped } from "react-typed";
// import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Redirect to /search and pass the query via state
    navigate("/search", { state: { query: searchQuery } });
  };

  return (
    <section id="hero-section" className="pb-10">
      <div className="w-full">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="/images/Background2.png"
              alt="Hero Background"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full px-6 mb-8 text-center md:w-1/2 md:mb-0">
            <div className="mb-6">
              <h3 className="mb-4 text-3xl font-bold leading-tight capitalize md:text-4xl">
                Search Less, Find More. <br /> Finally Enjoy The Hunt
              </h3>
              <p className="text-gray-600">
                Here’s the gist—we’re making your property search easier, our AI brings you perfect matches effortlessly.
              </p>
            </div>

            {/* <form onSubmit={handleSubmit}>
              <div className="relative">
                <FaSearch className="absolute left-[10px] top-[22px] text-white" />
                <ReactTyped
                  strings={[
                    "I'm looking for a 5 Bedroom House in Ajah",
                    "I want a 4 Bedroom House in Lekki",
                    "I want a 3 Bedroom duplex in Ikeja that cost 2,000,000 naira",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                >

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 px-8 rounded-full focus:outline-none text-white bg-[#21212180] placeholder-white"
                  />
                </ReactTyped>

              </div>
              <Button children={"search"} className={"block mx-auto mt-10"} />
            </form> */}
            <SearchForm onSubmit={handleSubmit} onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
