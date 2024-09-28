import React from 'react';
import TeamTop from '../../assets/images/teamTop.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BlogAreaRight from '../BlogAreaRight/BlogAreaRight';
const Blog = () => {
  return (
    <>
        <div
      className='flex items-center justify-center text-white h-[400px] md:h-[400px] lg:h-[400px]'
      style={{
        backgroundImage: `url(${TeamTop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left', // Adjust position for all screen sizes
      }}
    >
      <div className='text-center px-4 md:px-8'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>Blog</h1>
        <div className='flex justify-center items-center text-lg md:text-xl lg:text-2xl'>
          <h1>Home</h1>
          <MdKeyboardDoubleArrowRight className='h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mx-2' />
          <h1>Blog</h1>
        </div>
      </div>
    
    </div>
    <BlogAreaRight/>
    </>

  );
}

export default Blog;
