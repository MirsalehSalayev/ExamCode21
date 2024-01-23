import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./swiper.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
    className='SwiperFashe'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="SwiperImg "src="https://preview.colorlib.com/theme/fashe/images/master-slide-03.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="SwiperImg " src="https://preview.colorlib.com/theme/fashe/images/master-slide-02.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="SwiperImg " src="https://preview.colorlib.com/theme/fashe/images/master-slide-03.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img  className="SwiperImg "src="https://preview.colorlib.com/theme/fashe/images/master-slide-04.jpg" alt="" /></SwiperSlide>
      
      
    </Swiper>
  );
};