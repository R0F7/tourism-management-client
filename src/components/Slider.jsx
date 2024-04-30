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
        


        <SwiperSlide><img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/VB2SmvN/activites-paris-junior-1100x700.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/LxpKvYQ/italy.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/RCDxwhW/sagrada-familia-top-spain-tourist-attractions-1030x713.jpg" alt="" /></SwiperSlide>
        {/* <SwiperSlide><img className='w-full h-[600px]' src="https://i.ibb.co/8P2fkY6/VIDEO-SHARE-12385.jpg" alt="" /></SwiperSlide> */}
        <SwiperSlide><img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/FgJBkwt/England-sliderjpg.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/dL2Zt3X/Netherlands-slider.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/TY1KRjT/Switzerland-slider.webp" alt="" /></SwiperSlide>
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