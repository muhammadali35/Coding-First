import React, { useEffect, useRef } from "react";
import bgimg from "./../../assets/images/tit.png";
import clint from "./../../assets/images/cleit.png";
import { FaStar } from "react-icons/fa6";

const clients = [
  { id: 1, name: "Thomas Roy", feedback: "Our collaboration was seamless, and the results exceeded our expectations. Highly professional and attentive to every detail", img: clint, desination: "CEO" },
  { id: 2, name: "Client 2", feedback: "We are delighted with the outcome. Highly recommend!", img: clint, desination: "Manager" },
  { id: 3, name: "Client 3", feedback: "The process was smooth and efficient. Amazing work!", img: clint, desination: "CTO" },
  { id: 4, name: "Client 4", feedback: "A truly professional experience. Couldn't ask for better!", img: clint, desination: "Director" },
  { id: 5, name: "Client 5", feedback: "Excellent service, great team!", img: clint, desination: "CEO" },
  { id: 6, name: "Client 6", feedback: "I am very impressed with the results.", img: clint, desination: "Owner" },
  { id: 7, name: "Client 7", feedback: "Highly professional and very responsive.", img: clint, desination: "Manager" },
  { id: 8, name: "Client 8", feedback: "Their expertise shows in the final product.", img: clint, desination: "Consultant" },
];

const Feedback = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScrollLeft = scrollWidth - clientWidth;

                if (scrollLeft < maxScrollLeft) {
                    scrollRef.current.scrollBy({ left: clientWidth / 3, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 1500); // scroll every 3 seconds

        return () => clearInterval(scrollInterval);
    }, []);

  return (
    <div
      className="flex flex-col items-center w-full p-4"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-lg font-bold mb-4 text-[#C32735]">Clients Feedback</h3>
      <h1 className="font-bold mb-4 text-white text-3xl">What Our Clients Say</h1>
      <h1 className="font-bold mb-4 text-[#C32735] text-3xl">About Us</h1>
      <div className="flex overflow-x-scroll space-x-4 w-full scrollbar-hide"
            ref={scrollRef}
>
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`min-w-[280px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] p-4 bg-white rounded-lg shadow-md flex-shrink-0 opacity-0 animate-fadeInUp`}
            style={{
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <div className="flex justify-between">
              <div className="bg-[#101A33] w-[30%] h-28 mt-[-30px]">
                <img
                  src={client.img}
                  alt={client.name}
                  className="p-2 object-cover rounded-md h-full"
                />
              </div>
              <div className="flex space-x-1 text-[#C32735]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#C32735]">{client.name}</h3>
              <h3 className="text-lg font-semibold">{client.desination}</h3>
              <p className="text-gray-600 px-4 max-w-[200px] sm:max-w-[250px] mx-auto truncate">
                {client.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
