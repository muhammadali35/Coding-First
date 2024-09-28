import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgContact from '../../assets/images/contact.jpg';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (value) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.subject) newErrors.subject = 'Subject is required';
    if (!formValues.phone) newErrors.phone = 'Phone number is required';
    if (!formValues.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const alreadyAdded = false;

      if (alreadyAdded) {
        toast.error('Form already submitted!');
      } else {
        toast.success('Form submitted successfully!');
        console.log('Form Submitted', formValues);
        setFormValues({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: '',
        });
      }
    }
  };

  return (
    <div className="py-20 flex justify-center bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center bg-white p-10 shadow-lg rounded-lg">
        {/* Form Section */}
        <div>
          <div className="mb-4">
            <h4 className="text-[#C32735] text-lg font-semibold mb-3 uppercase tracking-wide">
              Contact With Us
            </h4>
            <h2 className="text-gray-900 text-3xl font-bold mb-2">
              Have Any Questions?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are here to help. Feel free to ask any questions or share your thoughts with us.
              Our team is eager to assist you with whatever you need.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Enter Your Name"
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black rounded transition ease-in-out duration-300`}
              />
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black rounded transition ease-in-out duration-300`}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="subject"
                value={formValues.subject}
                onChange={handleInputChange}
                className={`w-full p-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black rounded transition ease-in-out duration-300`}
              >
                <option value="">Select Subject</option>
                <option value="IT Consult">IT Consult</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Branding Solution">Branding Solution</option>
                <option value="Product Marketing">Product Marketing</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black rounded transition ease-in-out duration-300`}
              />
            </div>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Write Your Message"
              rows="5"
              className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black rounded transition ease-in-out duration-300`}
            />
           <button className="w-full border-2 py-2 text-black hover:text-white bg-white  relative overflow-hidden group">
              <span className="relative z-10">  Make an Appointment</span>
              <span className="absolute inset-0 bg-[#C32735] transform scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            </button>



          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <div className='relative overflow-hidden'>
          <img
            src={imgContact}
            alt="Contact Illustration"
            className="w-full h-auto object-cover rounded-lg shadow-md transform hover:scale-90 transition-transform duration-300"
          />
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />


    </div>
  );
};

export default ContactForm;
