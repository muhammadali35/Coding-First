import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaMobile, FaWordpress, FaArrowRight } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { HiSpeakerphone } from "react-icons/hi";
import { IoCameraReverseOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    no: "1",
    icon: <FaShoppingCart size={35} />,
    title: 'E-Commerce Website',
    description: 'A successful e-commerce website is accessible, easily browsable, and has a safe payment method.',
    link: 'ecom',
  },
  {
    id: 2,
    no: "2",
    icon: <CgWebsite size={35} />,
    title: 'Website Designing',
    description: 'We offer state-of-the-art, creative, secure, fast, SEO friendly, and responsive designs.',
    link: 'webdes',
  },
  {
    id: 3,
    no: "3",
    icon: <FaMobile size={35} />,
    title: 'Mobile Application Development',
    description: 'Mobile app development involves creating applications for mobile devices.',
    link: 'single-services.html',
  },
  {
    id: 4,
    no: "4",
    icon: <HiSpeakerphone size={35} />,
    title: 'Social Media Marketing',
    description: 'Invest in social media marketing to enhance your business’s online presence.',
    link: 'single-services.html',
  },
  {
    id: 5,
    no: "5",
    icon: <IoCameraReverseOutline size={35} />,
    title: 'Search Engine Optimization',
    description: 'Optimize your brand to be more searchable and reachable through effective SEO strategies.',
    link: 'single-services.html',
  },
  {
    id: 6,
    no: "6",
    icon: <FaWordpress size={35} />,
    title: 'WordPress Development',
    description: 'Expert WordPress development for customized and feature-rich websites.',
    link: 'single-services.html',
  },
];

const ServicItem = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = (id) => {
    setActiveService(id);
  };

  return (
    <section className="py-16 lg:px-10 font-serif">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8"></div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8 relative group ${activeService === service.id ? 'bg-gray-100' : ''}`}
              onClick={() => handleClick(service.id)}
            >
              <div
                className={`relative flex flex-col h-full bg-white p-6 rounded-lg border-2 overflow-hidden transition-all duration-300 ${activeService === service.id ? 'border-[#C32735]' : ''}`}
              >
                <div className={`flex items-center justify-center group-hover:bg-white group-hover:text-black w-16 h-16 rounded-full bg-[#C32735] text-white text-2xl font-semibold ml-[-35px] z-10 mt-[-45px] shadow-lg shadow-gray-500 transition-colors duration-300 ${activeService === service.id ? 'bg-white text-black' : ''}`}>
                  {service.no}
                </div>
                {/* Gradient overlay for hover effect */}
                <div className="absolute inset-0 bg-[#202E4B] opacity-70 transition-transform duration-700 transform translate-y-full group-hover:translate-y-0 z-0"></div>

                <div className={`relative z-10 flex items-center justify-center mb-4 w-16 h-16 rounded-full mx-auto bg-[#FCD5D5] text-[#202E4B] group-hover:bg-white group-hover:text-black transition-colors duration-300 ${activeService === service.id ? 'bg-white text-black' : ''}`}>
                  {service.icon}
                </div>
                <h3 className={`relative z-10 text-2xl font-semibold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300 text-center ${activeService === service.id ? 'text-[#C32735]' : ''}`}>
                  {service.title}
                </h3>
                <p className={`relative z-10 text-gray-600 mb-4 group-hover:text-white transition-colors duration-300 text-center ${activeService === service.id ? 'text-[#C32735]' : ''}`}>
                  {service.description}
                </p>
                <div className="relative z-10 text-center mt-auto">
                  <Link
                    to={service.link}
                    className="relative text-black group-hover:text-white py-2 px-4 bg-[#FCD5D5] flex items-center justify-center rounded-lg overflow-hidden group"
                  >
                    <span className="relative z-10">Read More</span>
                    <FaArrowRight className="relative z-10 ml-2" />
                    <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicItem;
