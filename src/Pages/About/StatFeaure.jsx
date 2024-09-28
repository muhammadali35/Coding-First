import React from 'react';
import { FaProjectDiagram, FaSmile, FaUserTie, FaAward } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsFeature = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when the component enters the viewport
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const items = [
    { icon: <FaProjectDiagram size={30} />, title: 986, description: 'Finished Projects' },
    { icon: <FaSmile size={30} />, title: 896, description: 'Happy Clients' },
    { icon: <FaUserTie size={30} />, title: 396, description: 'Skilled Experts' },
    { icon: <FaAward size={30} />, title: 496, description: 'Honorable Awards' },
  ];

  return (
    <div className="bg-[#C32735] w-[80%] mx-auto p-8  mt-6 rounded-lg" ref={ref}>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white text-[#C32735] rounded-full">
              {item.icon}
            </div>
            <h2 className="text-4xl font-bold mb-2">
              {/* CountUp only starts when the component is in view */}
              {inView && <CountUp start={0} end={item.title} duration={3.5} />}
            </h2>
            <p className="text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsFeature;