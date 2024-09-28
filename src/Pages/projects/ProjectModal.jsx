import React from 'react';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, project, onNext, onPrevious }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
      onClick={handleOverlayClick}
    >
      <div className='relative w-full max-w-lg mx-4 sm:mx-10'>
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          className='absolute left-2 sm:left-[-80px] top-1/2 transform -translate-y-1/2 text-white p-2 bg-[#C32735] rounded-full hover:bg-[#C32735] focus:outline-none z-10 shadow-lg transition-transform duration-200 ease-in-out'
        >
          <IoArrowBack size={24} />
        </button>

        {/* Modal Content */}
        <div className='bg-white p-4 sm:p-6 rounded-lg w-full relative flex flex-col sm:flex-row items-center'>
          {/* Close Button */}
          <button onClick={onClose} className='absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-600'>
            <IoClose size={24} />
          </button>

          {/* Image */}
          <img src={project.image} alt='Project' className='w-full sm:w-2/3 h-auto rounded-lg mx-auto' />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className='absolute right-2 sm:right-[-80px] top-1/2 transform -translate-y-1/2 text-white p-2 bg-[#C32735] rounded-full hover:bg-[#C32735] focus:outline-none z-10 shadow-lg transition-transform duration-200 ease-in-out'
        >
          <IoArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
