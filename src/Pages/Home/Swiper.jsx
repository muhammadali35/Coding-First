import { Pagination, A11y, Autoplay,  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import { Parallax    } from 'swiper/modules'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay,Parallax   ]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      parallax={true}
      speed={600}
    >
 
   
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero3 />
      </SwiperSlide>
    </Swiper>
  );
};
