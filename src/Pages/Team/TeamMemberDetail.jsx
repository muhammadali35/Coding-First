import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import teamMembers from './TeamData';

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find(member => member.id === parseInt(id));

  if (!member) {
    return <div>Team member not found.</div>;
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center justify-between">
        <img
          src={member.imgSrc}
          alt={member.name}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover mb-8 lg:mb-0 lg:mr-8"
        />
        <div className='w-full lg:w-[40%] shadow-2xl border-2 border-[#C32735] p-6 md:p-8'>
          <h1 className="text-xl md:text-2xl text-[#C32735] mb-2 font-bold">{member.name}</h1>
          <h2 className="text-lg md:text-xl mb-1 text-black">Position: <span className='text-[#C32735]'>{member.position}</span></h2>
          <h2 className="text-lg md:text-xl mb-1 text-black">Experience: <span className='text-[#C32735]'>{member.experience}</span></h2>
          <h2 className="text-lg md:text-xl mb-1 text-black">Contact: <span className='text-[#C32735]'>{member.contact}</span></h2>
          <h2 className="text-lg md:text-xl mb-1 text-black">Email: <span className='text-[#C32735]'>{member.email}</span></h2>
          <p className="mt-4">
            <a href={member.profileLink} className="text-[#C32735] hover:underline">
              View Profile
            </a>
          </p>
          <div className="mt-4 flex space-x-4">
            <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='text-black hover:text-[#C32735] h-5 w-5'/>
            </a>
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className='text-black hover:text-[#C32735] w-5 h-5'/>
            </a>
            <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-black hover:text-[#C32735] h-5 w-5'/>
            </a>
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='text-black hover:text-[#C32735] h-5 w-5'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
