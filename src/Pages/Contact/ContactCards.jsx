import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactCards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 p-6 lg:p-10 py-12 lg:py-20">
      {/* Office Address Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 lg:p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 w-full sm:w-1/2 lg:w-1/3 text-white">
        <div className="flex items-center">
          <div className="bg-white p-4 lg:p-5 rounded-xl text-indigo-600">
            <FaMapMarkerAlt size={24} />
          </div>
          <div className="ml-3 lg:ml-4">
            <h3 className="font-bold text-lg lg:text-xl">
              Office Address
            </h3>
            <p className="mt-1 lg:mt-2 text-sm lg:text-base">Burnsville, MN 55337 Street, United States</p>
          </div>
        </div>
      </div>

      {/* Call Us Anytime Card */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 lg:p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 w-full sm:w-1/2 lg:w-1/3 text-white">
        <div className="flex items-center">
          <div className="bg-white p-4 lg:p-5 rounded-xl text-teal-600">
            <FaPhoneAlt size={24} />
          </div>
          <div className="ml-3 lg:ml-4">
            <h3 className="font-bold text-lg lg:text-xl">
              Call Us Anytime
            </h3>
            <p className="mt-1 lg:mt-2 text-sm lg:text-base">(+65) - 48596 - 5789</p>
            <p className="mt-1 text-sm lg:text-base">+190-8800-0393</p>
          </div>
        </div>
      </div>

      {/* Send An Email Card */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 lg:p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 w-full sm:w-1/2 lg:w-1/3 text-white">
        <div className="flex items-center">
          <div className="bg-white p-4 lg:p-5 rounded-xl text-purple-600">
            <FaEnvelope size={24} />
          </div>
          <div className="ml-3 lg:ml-4">
            <h3 className="font-bold text-lg lg:text-xl">
              Send An Email
            </h3>
            <p className="mt-1 lg:mt-2 text-sm lg:text-base">info.example@traga.com</p>
            <p className="mt-1 text-sm lg:text-base">info@traga.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
