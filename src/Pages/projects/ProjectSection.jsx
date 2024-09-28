import React, { useState, useEffect } from 'react';
import ProjectsTitle from './ProjectsTitle';
import Project1 from '../../assets/images/project_1.png';
import Project2 from '../../assets/images/project_2.png';
import Project3 from '../../assets/images/project_3.png';
import Project4 from '../../assets/images/project_4.png';
import Project5 from '../../assets/images/project_5.png';
import Project6 from '../../assets/images/project_6.png';
import { IoAddSharp } from 'react-icons/io5';
import Modal from './ProjectModal';

const projects = [
    { id: 1, title: 'IT Consultancy', category: 'Technology', image: Project1 },
    { id: 2, title: 'Web Development', category: 'Technology', image: Project2 },
    { id: 3, title: 'Website Design', category: 'Technology', image: Project3 },
    { id: 4, title: 'SEO Optimization', category: 'Marketing', image: Project4 },
    { id: 5, title: 'Digital Marketing', category: 'Marketing', image: Project5 },
    { id: 6, title: 'Business Analysis', category: 'Business', image: Project6 },
];

const ProjectSection = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isModalOpen]);

    const handleOpenModal = (index) => {
        setCurrentProjectIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentProjectIndex(null);
    };

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className=''>
            <ProjectsTitle />
            <div className='mt-20 grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mb-10'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className='relative bg-cover bg-center text-white rounded-lg w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]'
                        style={{ backgroundImage: `url(${project.image})` }}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                            <div className='bg-[#C32735] p-4 rounded-md'>
                                <h1 className='text-lg font-bold'>{project.title}</h1>
                                <h3 className='text-sm'>{project.category}</h3>
                                <div
                                    className='w-10 h-10 bg-white group hover:bg-slate-900 absolute right-6 bottom-6 flex items-center justify-center cursor-pointer'
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <IoAddSharp className='text-[#C32735] group-hover:text-white h-6 w-6' /> 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    project={projects[currentProjectIndex]}
                    onNext={handleNextProject}
                    onPrevious={handlePreviousProject}
                />
            )}
        </div>
    );
}

export default ProjectSection;
