import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { ReactTyped } from "react-typed";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ onSubmit, onChange, value, className }) => {

    // const [searchQuery, setSearchQuery] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!searchQuery.trim()) return;
    //     // Redirect to /search and pass the query via state
    //     navigate("/search", { state: { query: searchQuery } });
    // };
    return (

        <form onSubmit={onSubmit}>
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
                        value={value}
                        onChange={onChange}
                        className="w-full p-4 px-8 rounded-full focus:outline-none text-white bg-[#21212180] placeholder-white"
                    />
                </ReactTyped>

            </div>
            <Button children={"search"} className={`block mx-auto mt-10 ${className}`} />
        </form>
    )
}
export default SearchForm;