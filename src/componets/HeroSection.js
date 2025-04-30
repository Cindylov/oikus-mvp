import React from "react";
import "../hero.css";
import Button from "./home/Button";
import { ReactTyped } from "react-typed";


const HeroSection = () => {
  return (
    <>

      <section id="hero-section" className="pb-10">
        <div className="w-full">
          <div className="flex flex-col-reverse items-center md:flex-row">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/Background2.png"
                alt="Hero Background"
                className="w-full h-auto"
              />
            </div>

            {/* Right Text & Form Section */}
            <div className="w-full px-6 mb-8 text-center md:w-1/2 md:mb-0">
              <div className="mb-6">
                <h3 className="mb-4 text-3xl font-bold leading-tight capitalize md:text-4xl">
                  Search Less, Find More. <br /> Finally Enjoy The Hunt
                </h3>
                {/* <h3 className="mb-4 font-bold leading-tight capitalize md:text-4xl">
                  Search Less, Find More. <br /> Finally Enjoy The Hunt
                </h3> */}
                <p className="text-gray-600">
                  Here’s the gist—we’re making your property search easier, our AI brings you perfect matches effortlessly.
                </p>
              </div>

              <form>
                <ReactTyped
                  strings={[
                    "I'm looking for a 5 Bedroom House in Ajah",
                    "I want a 4 Bedroom House in Lekki",
                    "I want a 3 Bedroom duplex in ikeja that cost 2,000,000 naira",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                >
                  <input
                    type="text"
                    className="w-full p-4 rounded-full focus:outline-none text-gray-700 bg-[#21212180] placeholder-white"
                  />
                </ReactTyped>
                <Button children={"search"} className={"block mx-auto mt-10"}/>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
