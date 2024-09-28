import { Pagination, A11y, Autoplay,  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax    } from 'swiper/modules'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import FeedBack from './FeedBack';

export default () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay,Parallax   ]}
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      parallax={true}
      speed={600}
    >
 
   
      <SwiperSlide>
        <FeedBack/>
      </SwiperSlide>
      <SwiperSlide>
    
      </SwiperSlide>
      <SwiperSlide>
      
      </SwiperSlide>
    </Swiper>
  );
};
