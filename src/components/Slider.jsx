// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        


        <SwiperSlide><img className='w-full h-[600px]' src="https://i.ibb.co/NWF5Rkr/slider3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px]' src="https://i.ibb.co/HxDXQvc/slider1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[600px]' src="https://i.ibb.co/WW36tsT/slider2.jpg" alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}