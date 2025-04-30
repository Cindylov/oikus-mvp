import React, { useState, useEffect } from 'react';
import Searchlist from '../componets/Searchlist';
import "../search.css";
import { ReactTyped } from "react-typed";

const SidebarApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [isSubHeaderOpen, setIsSubHeaderOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-1">
      {/* Sidebar Toggle for small screens */}
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="fixed z-20 p-2 text-black bg-white rounded-md top-4 left-4 lg:hidden"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 border-r-2 shadow-lg transform transition-transform duration-300 navbar
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        ${isSidebarCollapsed ? 'w-20' : 'w-64'} 
        rounded-tr-3xl rounded-br-3xl lg:static`}
      >
        <nav className="relative flex flex-col h-full">
          {/* Collapse/Expand Arrow Toggle for large screens */}
          <button
            onClick={() => setIsSidebarCollapsed((prev) => !prev)}
            className="absolute z-10 hidden p-1 text-indigo-600 rounded-full shadow-md top-2 right-2 lg:block"
          >
            {/* {isSidebarCollapsed ? '→' : '←'} */}
            <img
  src="../../images/Vector.png"
  alt="Toggle Sidebar"
  className={`w-4 h-4 transition-transform duration-300 ${
    isSidebarCollapsed ? 'rotate-180' : ''
  }`}
/>

          </button>

          {/* Logo */}
          <div className="flex items-center justify-center flex-shrink-0 py-10">
            <a href="#">
            <span aria-hidden="true" className="p-2">
              <img
                className="w-24 h-auto"
                src="../../images/Oikusat logo_Primary Outline_Positive Landscape.png"
                alt="oikus-logo"
              />
              </span>
              {!isSidebarCollapsed && <span className='font-medium text-white'>oikus</span>}
            </a>
          </div>

          {/* Links */}
          <div className="flex-1 px-2 space-y-2 overflow-hidden hover:overflow-auto">
          <a
              href="#"
              className="flex items-center space-x-2 text-white transition-colors rounded-lg group hover:bg-[#12AF9B66] hover:text-white p-2"
            >
              {/* <span
                aria-hidden="true"
                className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
              >
                📄
              </span> */}
              {!isSidebarCollapsed && <span className='font-medium'>Your Saved Homes</span>}
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 text-[#12AF9B66] transition-colors rounded-lg group hover:bg-white hover:text-[#12AF9B66] p-2"
            >
              {/* <span
                aria-hidden="true"
                className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
              >
                📄
              </span> */}
              {!isSidebarCollapsed && <span className='font-medium'>2025-03</span>}
            </a>
            <a
              href="#"
              className="flex items-center w-full space-x-2 text-white bg-[#12AF9B66] rounded-lg p-2"
            >
              {/* <span aria-hidden="true" className="p-2 bg-[#12AF9B66] rounded-lg">
                🏠
              </span> */}
              {!isSidebarCollapsed && <span>Ikeja GRA · ₦6.5M/year</span>}
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 text-white transition-colors rounded-lg group hover:bg-[#12AF9B66] hover:text-white p-2"
            >
              {/* <span
                aria-hidden="true"
                className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
              >
                📄
              </span> */}
              {!isSidebarCollapsed && <span>Lekki Phase 1 · ₦13M/year</span>}
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 text-[#12AF9B66] transition-colors rounded-lg group hover:bg-white hover:text-[#12AF9B66] p-2"
            >
              {/* <span
                aria-hidden="true"
                className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
              >
                📄
              </span> */}
              {!isSidebarCollapsed && <span className='font-medium'>2025-02</span>}
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 text-white transition-colors rounded-lg group hover:bg-[#12AF9B66] hover:text-white p-2"
            >
              {/* <span
                aria-hidden="true"
                className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
              >
                📄
              </span> */}
              {!isSidebarCollapsed && <span>Ikate  · ₦5M/year </span>}
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 text-white transition-colors rounded-lg group hover:bg-[#12AF9B66] hover:text-white p-2"
            >
              {/* <span
                aria-hidden="true"
                className="p-2 transition-colors rounded-lg group-hover:bg-indigo-700 group-hover:text-white"
              >
                📄
              </span> */}
              {!isSidebarCollapsed && <span>Yaba  · ₦7M/year</span>}
            </a>
          </div>

          {/* Description Section */}
          <div className="flex-shrink-0 p-4 mt-10">
            {!isSidebarCollapsed && (
              <div className="hidden p-2 space-y-6 rounded-lg md:block">
                {/* Sidebar description */}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Main */}
      <main className="px-4 py-8 ">
        <p>Back</p>
      <Searchlist />
      <div className="w-10/12 mx-auto bg-white  inp">
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
                  className="w-full p-4 rounded-full focus:outline-none text-white bg-[#B2B2B233]"
                />
              </ReactTyped>
            </div>
      </main>

      {/* Settings Panel */}
      {isSettingsPanelOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsSettingsPanelOpen(false)}
          aria-hidden="true"
        ></div>
      )}
      <section
        className={`fixed inset-y-0 right-0 w-64 bg-white border-l border-indigo-100 rounded-l-3xl transition-transform duration-300 ${
          isSettingsPanelOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* <div className="px-4 py-8">
          <h2 className="text-lg font-semibold">Settings</h2>
        </div> */}
      </section>

      {/* Mobile sub-header */}
      {isSubHeaderOpen && (
        <div className="absolute flex items-center justify-between p-2 bg-white rounded-md shadow-lg sm:hidden top-16 left-5 right-5">
          <button
            onClick={() => {
              setIsSettingsPanelOpen(true);
              setIsSubHeaderOpen(false);
            }}
          >
            {/* Button logic */}
          </button>
        </div>
      )}

      {/* Footer Icons */}
      <div className="fixed flex items-center space-x-4 bottom-20 right-5 sm:bottom-5">
        {/* Footer icons */}
      </div>
    </div>
  );
};

export default SidebarApp;
