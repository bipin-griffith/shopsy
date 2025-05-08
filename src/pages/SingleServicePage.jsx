// src/pages/SingleServicePage.jsx

import React from "react";

const SingleServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-primary mb-4">Ayurvedic Consultation</h1>
      <p className="text-gray-700 mb-6 max-w-3xl">
        Our personalized Ayurvedic consultations are designed to assess your dosha and lifestyle,
        guiding you through custom herbal remedies, diet, and routines to restore balance.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Dosha analysis by certified practitioners</li>
        <li>Custom herbal and lifestyle recommendations</li>
        <li>Follow-up care and seasonal adjustments</li>
        <li>Virtual or in-person consultations available</li>
      </ul>

      <button className="mt-8 bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition">
        Book Your Session
      </button>
    </div>
  );
};

export default SingleServicePage;
