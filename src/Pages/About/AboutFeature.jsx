import React from 'react';
import { FaCertificate, FaUsers } from 'react-icons/fa'; 
import About from './../../assets/images/about.png'

const AboutFeature = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
      {/* Left side: Wave border image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 group">
      <div className="group overflow-hidden w-full h-full relative">
  <img
    src={About}
    alt="Wave Border"
    className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-75"
  />
</div>



      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <h1 className=" lg:text-6xl md:text-3xl font-bold mb-6 ">
          We Are Increasing Business Success With IT Solution
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Collaboratively envisioneer user-friendly supply chains and cross-unit imperatives. 
          Authoritatively fabricate competitive resources and holistic synergy. 
          Uniquely generate efficient schemas before the future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <button className="relative flex items-center border-2  justify-center px-6 py-3  text-white text-lg font-semibold rounded-lg shadow overflow-hidden group  ">
            <FaCertificate className="mr-2 relative z-10 text-black group-hover:text-white" />
            <span className="relative  text-black z-10 group-hover:text-white">Certified Company</span>
            <span className="absolute inset-0 bg-[#C32735] transition-all duration-500 ease-in-out transform scale-x-0 origin-center group-hover:scale-x-100"></span>
          </button>

          <button className="relative flex items-center border-2 justify-center px-6 py-3  text-white text-lg font-semibold rounded-lg shadow overflow-hidden group ">
            <FaUsers className="mr-2 relative z-10 text-black group-hover:text-white" />
            <span className="relative text-black z-10 group-hover:text-white">Expert Team</span>
            <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutFeature;
