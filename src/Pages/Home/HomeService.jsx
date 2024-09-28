import React from 'react'
import { MdOutlineContactless } from "react-icons/md";
// import bgimg from './../../assets/images/tit.png'
import ServicItem from '../Services/ServiceItem';

const HomeService = () => {
  return (
    <>
      <div className='w-full bg-[#F5F5F5] py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='flex justify-center items-center text-red-600 text-xl gap-2 mb-4'>
              <MdOutlineContactless size={25} />
              <h3>Our Services</h3>
            </div>
            <h1 className='text-3xl font-bold'>
              We Provide Exclusive Service For <span className='text-red-600'>Your Business!</span>
            </h1>
          </div>
          <ServicItem />
        </div>
      </div>
    </>
  )
}

export default HomeService
