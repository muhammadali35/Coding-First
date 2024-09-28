import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import why from './../../assets/images/why_1_1.png'
const WhyChooseUs = () => {
  const listItems = [
    "Big Data Analysis",
    "24/7 Online Support",
    "Business Improvement",
    "Professional IT Services",
    "Expert Consulting",
    "Scalable Solutions",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
      {/* Left side: Content */}
      <div className="w-full lg:w-1/2 lg:pr-12">
        <h4 className="flex items-center text-lg font-semibold text-gray-700 mb-4">
          <FaCheckCircle className="text-[#C32735] mr-2" /> WHY CHOOSE US
        </h4>
        <h1 className="lg:text-6xl md:text-3xl font-bold mb-6">
          We Deal With The Aspects Professional IT Services
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Collaboratively envisioneer user-friendly supply chains and cross-unit imperatives.
          Authoritatively fabricate competitive resources and holistic synergy.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center text-lg text-gray-700">
              <FaCheckCircle className="text-[#C32735] mr-2" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* /* Right side: */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={why} 
          alt="Wave Border"
          className="w-full h-auto object-cover rounded-3xl shadow-lg shadow-gray-500"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
