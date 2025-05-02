import React, { useState } from "react";
import PropertyRequest from "../pages/PropertyRequest";
import { createPortal } from "react-dom";
import Button from "./home/Button";

const RequestSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col items-center gap-8 py-12 px-6 md:px-[6rem] bg-gray-100 md:flex-row">
      <div className="md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold">Make A Property Request</h2>
        <p className="mb-6 text-gray-600">
          Can’t find what you want? Tell us what you need, and our agents will find it! Fill in your preferences, and we'll send matching listings within 24 hours.
        </p>
        <Button
          onClick={handleOpenModal}
          children={"Get Started"}
          className={"mt-10"}
        />
      </div>

      <div className="flex justify-end gap-4 md:w-1/2">
        <div className="w-1/2">
          <img
            src="../images/pexels-binyaminmellish-1396122 2.png"
            alt="Property"
            className="relative left-0 object-cover w-full rounded-lg top-20"
          />
        </div>
        <div className="w-1/2">
          <img
            src="../images/pexels-binyaminmellish-1396122 1.png"
            alt="Property"
            className="object-cover w-full rounded-lg"
          />
        </div>
      </div>

      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="">
              
              <PropertyRequest onclick={handleCloseModal} />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default RequestSection;
