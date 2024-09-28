import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import Sikandar from '../../../assets/images/skinder.png'
import { Link } from 'react-router-dom';
const contactInfo = [
    {
        icon: <FaPhoneAlt className='text-white' />,
        label: 'Phone Number',
        value: '0301-6658497',
        href: 'tel:+19356542587',
        bgColor: 'bg-[#C32735]'
    },
    {
        icon: <MdEmail className='text-white' />,
        label: 'Email Address',
        value: 'codingsfirst@gmail.com',
        href: 'mailto:rachana@traga.com',
        bgColor: 'bg-[#C32735]'
    },
    {
        icon: <IoLocationSharp className='text-white' />,
        label: 'Office Address',
        value: '1403 Washington Ave',
        href: 'https://www.google.com/maps',
        bgColor: 'bg-[#C32735]'
    }
];

const TeamMember = () => {
    return (
        <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row">

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={Sikandar}
                        alt="Sikander"
                        className="rounded-md"
                        width="494"
                        height="500"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:ps-4 lg:ps-5 mt-8 md:mt-0">
                    <div className="space-y-6">

                        {/* Name */}
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Sikandar Hayat</h2>
                        </div>

                        {/* Position */}
                        <div>
                            <p className="text-xl text-[#C32735] mb-4">CEO, of Coding First</p>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-600 mb-6">
                                Enthusiastically parallel task 2.0 niches wherea end-to-end strategic theme area. Dramatically harness e-business ROI and granular service. Quickly target enabled internal organic sources after cross-unit methods of empowerment. Seamlessly e-enable intuitive applications before end-to-end applications. Uniquely matrix seamless supply chains for resource-leveling.
                            </p>
                        </div>
                        <hr className='border-[1px] mb-6' />

                        {/* Contact Info */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center px-5 py-3 bg-[#F5F5F5] rounded-md">
                                    <div className={`h-12 w-12 p-4 ${info.bgColor} rounded-md`}>
                                        {info.icon}
                                    </div>
                                    <div className='ml-4'>
                                        <h6 className="text-sm font-bold text-gray-600">{info.label}</h6>
                                        <Link className="text-[#C32735]" to={info.href}>{info.value}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className='border-[1px] mt-5' />

                        {/* Button */}
                        <div className="mt-4 ">
                            <button className="relative flex items-center border-2 justify-center px-6 py-3  text-white text-lg font-semibold  shadow overflow-hidden group ">
            <span className="relative text-black z-10 group-hover:text-white">  MAKE AN APPOINTMENT</span>
            <IoMdArrowForward className="mr-2 relative z-10 text-black group-hover:text-white" />
            <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </button>
                          
                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default TeamMember;
