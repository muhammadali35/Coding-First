import React, { useEffect } from 'react';
import { MdOutlineContactless } from "react-icons/md";
import { SlEvent } from "react-icons/sl";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Process = [
    {
        id: 1,
        no: "1",
        icon: <SlEvent size={35} />,
        title: 'Select a project',
        description: 'Continua scale empowered metrics with cost effective innovation.',
        link: 'ecom',
    },
    {
        id: 2,
        no: "2",
        icon: <SlEvent size={35} />,
        title: 'Project analysis',
        description: 'Continua scale empowered metrics with cost effective innovation.',
        link: 'webdes',
    },
    {
        id: 3,
        no: "3",
        icon: <SlEvent size={35} />,
        title: 'Deliver result',
        description: 'Continua scale empowered metrics with cost effective innovation.',
        link: 'webdes',
    },
    {
        id: 4,
        no: "4",
        icon: <SlEvent size={35} />,
        title: 'Plan Execute',
        description: 'Continua scale empowered metrics with cost effective innovation.',
        link: 'webdes',
    },
];

const WorkProcess = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='w-full bg-[#F5F5F5] py-16'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <div className='flex justify-center items-center font-bold text-[#C32735] text-xl gap-2 mb-4'>
                        <MdOutlineContactless size={25} />
                        <h3>Work Process</h3>
                    </div>
                    <h1 className='text-3xl font-bold'>
                        How to work <span className='text-[#C32735]'>it!</span>
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' data-aos="fade-right">
                    {Process.map((item) => (
                        <div 
                            key={item.id} 
                            className='bg-[#FFFFFF] rounded-lg shadow-lg p-6 relative mb-8 group overflow-hidden'>
                            <div className='absolute top-[-23px] left-[-17px] bg-[#C32735] w-16 h-16 rounded-full text-white text-2xl font-semibold z-20 flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-black'>
                                {item.no}
                            </div>
                            
                            <div className='absolute inset-0 bg-[#202E4B] opacity-70 transition-transform duration-700 transform translate-y-full group-hover:translate-y-0 z-0'></div>
                            
                            <div className='flex flex-col items-center gap-4 pt-8 relative z-10 group-hover:text-white'>
                                <div className='text-[#C32735] group-hover:text-white'>
                                    {item.icon}
                                </div>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                                <p className='text-center'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorkProcess;
