import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/cf-removebg-preview.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        
        {/* Header Section within Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-6 lg:space-y-0">
          
          {/* Company Logo */}
          <div className="flex justify-center lg:justify-start">
          <img src={logo} alt="Company Logo" className="w-20 h-20 object-contain   cursor-pointer transition-transform transform hover:scale-105" />
          </div>

          {/* Call Option */}
          <div className="flex justify-center  cursor-pointer lg:justify-start items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Call Us</h4>
              <p className="text-sm">+123 456 7890</p>
            </div>
          </div>

          {/* Email Option */}
          <div className="flex justify-center cursor-pointer lg:justify-start items-center space-x-4">
            <div className="bg-green-600 p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Email Us</h4>
              <p className="text-sm">info@example.com</p>
            </div>
          </div>

          {/* Location Option */}
          <div className="flex justify-center cursor-pointer lg:justify-start items-center space-x-4">
            <div className="bg-[#C32735] p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Our Location</h4>
              <p className="text-sm">123 Main Street, City, Country</p>
            </div>
          </div>
          
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4">ABOUT COMPANY</h4>
            <p className="mb-4">
              We are a leading IT solutions provider, offering innovative services to help businesses achieve success in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-2 rounded-full">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-[#C32735]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C32735]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#C32735]">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-[#C32735]">Blogs</Link></li>
              <li><Link to="/projects" className="hover:text-[#C32735]">Projects</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">IT SERVICES</h4>
            <ul className="space-y-2">
              <li className="flex items-center cursor-pointer" ><FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Web Development</li>
              <li className="flex items-center cursor-pointer"><FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Mobile App Development</li>
              <li className="flex items-center cursor-pointer"><FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Cloud Computing</li>
              <li className="flex items-center cursor-pointer" ><FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> IT Consulting</li>
              <li className="flex items-center cursor-pointer"><FaCheckCircle className="text-[#C32735] mr-2 cursor-pointer" /> Cybersecurity</li>
              <li className="flex items-center cursor-pointer"><FaCheckCircle className="text-[#C32735] mr-2 c" /> Data Analytics</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-xl font-semibold mb-4">RECENT POSTS</h4>
            <ul className="space-y-4">
              <li>
                <a href="/post1" className="hover:text-[#C32735]">
                  How to Secure Your IT Infrastructure
                </a>
                <p className="text-sm text-[#C32735]">August 15, 2024</p>
              </li>
              <li>
                <a href="/post2" className="hover:text-[#C32735]">
                  The Future of Cloud Computing
                </a>
                <p className="text-sm text-[#C32735]">August 10, 2024</p>
              </li>
              <li>
                <a href="/post3" className="hover:text-[#C32735]">
                  Best Practices for Data Management
                </a>
                <p className="text-sm text-[#C32735]">August 5, 2024</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>Created BY <span className='text-[#FF0000]'>Muhammad Ali</span> &&<span className='text-[#FF0000]'>Wali haider Jalali</span> </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="/careers" className="hover:text-white">Careers</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
