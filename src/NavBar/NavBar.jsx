import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import logo from './../assets/images/cf-removebg-preview.png'
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 bg-[#17123C] sticky top-0 z-20">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer transition-transform transform hover:scale-105" />

        {/* Navigation Links for Large Screens */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white font-bold">
          {[
            { name: 'Home', link: '/home' },
            { name: 'About Us', link: '/about' },
            { name: 'Service', link: '/services', subMenu: [{ name: 'Service 1', link: '/services1' }, { name: 'Service 2', link: '/services2' }] },
            { name: 'Project', link: '/project' },
            { name: 'Our Team', link: '/team' },
            { name: 'Contact', link: '/contact' },
          ].map((item, index) => (
            <li
            onClick={()=>setOpenMenu(false)}
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 lg:gap-2">
                <NavLink to={item.link} className="hover:text-[#C32735]">
                  {item.name}
                  <hr  className='hidden  border-none h-[4px] bg-[#C32735] transition-all duration-300 ease-in-out'/>
                </NavLink>
                {item.subMenu && (
                  <button
                    onClick={() => handleMenuClick(index)}
                    className="focus:outline-none "
                  >
                    {openMenu === index ? <FaMinus /> : <FaPlus />}
                  </button>
                )}
              </div>
              {item.subMenu && openMenu === index && (
                <ul
                  id={`parent-${index}`}
                  className="absolute bg-white text-black w-40 lg:w-48 p-2 origin-bottom transform transition-transform duration-300 ease-out scale-y-0 group-hover:scale-y-100 "
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={()=>setOpenMenu(false)} className="border-b-2 hover:bg-[#C32735] hover:text-white ">
                      <NavLink to={subItem.link} className="block px-4 py-2">
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* IT Support Button for Large Screens */}
        <button className="hidden md:block w-28 lg:w-32 py-2 text-black hover:text-white bg-white rounded-2xl relative overflow-hidden group">
          <span className="relative z-10">IT Support</span>
          <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
        </button>

        {/* Hamburger Menu for Small and Medium Screens */}
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(openMenu === 'mobile' ? null : 'mobile')} className="text-white focus:outline-none">
            {openMenu === 'mobile' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-[#17123C] text-white font-bold text-center sticky top-0 z-20 transition-all duration-500 ease-in-out ${openMenu === 'mobile' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul>
          {[
            { name: 'Home', link: '/home' },
            { name: 'About Us', link: '/about' },
            { name: 'Service', link: '/services', subMenu: [{ name: 'Service 1', link: '/services1' }, { name: 'Service 2', link: '/services2' }] },
            { name: 'Project', link: '/project' },
            { name: 'Our Team', link: '/team' },
            { name: 'Contact', link: '/contact' },
          ].map((item, index) => (
            <li key={index} className="relative border-[1px] group hover:bg-[#C32735]">
              <div className="flex justify-between transition-all px-4 py-2 ">
                <NavLink to={item.link} className="hover:text-white" onClick={() => setOpenMenu(false)}>
                  {item.name}
                </NavLink>
                {item.subMenu && (
                  <button
                    onClick={() => handleSubMenuClick(index)}
                    className="focus:outline-none"
                  >
                    {openSubMenu === index ? <FaMinus /> : <FaPlus />}
                  </button>
                )}
              </div>
              {item.subMenu && openSubMenu === index && (
                <ul className="border-[1px] bg-[#17123C] text-white transition-all duration-300 ease-in-out">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:text-[#C32735] border-[1px]">
                      <NavLink to={subItem.link} className="block px-4 py-2" onClick={() => setOpenMenu(false)}>
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;