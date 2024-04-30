import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Zoom, Rotate } from 'react-awesome-reveal';

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

        <SwiperSlide>
          <div className='relative '>
            <img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/VB2SmvN/activites-paris-junior-1100x700.jpg" alt="" />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[rgb(0,0,0,.5)] h-full w-full'>
              <Rotate>
                <h4 className='font-bold font-playfair text-3xl text-white mb-2 '>France</h4>
              </Rotate>
              <Zoom>
                <p className='text-white w-[90%] md:w-[60%] text-center text-xs md:text-base mx-auto'>Embark on a journey through France's rich cultural tapestry, where every corner holds a story waiting to be discovered. Experience the allure of timeless beauty and vibrant heritage</p>
              </Zoom>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative '>
            <img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/LxpKvYQ/italy.webp" alt="" />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[rgb(0,0,0,.5)] h-full w-full'>
              <Rotate>
                <h4 className='font-bold font-playfair text-3xl text-white mb-2 '>Italy</h4>
              </Rotate>
              <Zoom>
                <p className='text-white w-[90%] md:w-[60%] text-center text-xs md:text-base mx-auto '>Explore Italy's breathtaking landscapes, iconic landmarks, and delectable cuisine. From the romance of Venice to the history of Rome, immerse yourself in a journey of art, culture, and passion</p>
              </Zoom>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative '>
            <img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/RCDxwhW/sagrada-familia-top-spain-tourist-attractions-1030x713.jpg" alt="" />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[rgb(0,0,0,.5)] h-full w-full'>
              <Rotate>
                <h4 className='font-bold font-playfair text-3xl text-white mb-2'>Spain</h4>
              </Rotate>
              <Zoom>
                <p className='text-white w-[90%] md:w-[60%] text-center text-xs md:text-base mx-auto'>Experience the enchanting beauty of Spain's diverse landscapes, from the sun-kissed beaches of Costa del Sol to the historic allure of Alhambra in Granada. Unveil the essence of Spanish culture</p>
              </Zoom>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative '>
            <img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/FgJBkwt/England-sliderjpg.jpg" alt="" />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[rgb(0,0,0,.5)] h-full w-full'>
              <Rotate>
                <h4 className='font-bold font-playfair text-3xl text-white mb-2 '>England</h4>
              </Rotate>
              <Zoom>
                <p className='text-white w-[90%] md:w-[60%] text-center text-xs md:text-base mx-auto'>Explore England's diverse landscape, from historic landmarks in London to picturesque countryside villages. Immerse yourself in its rich history, culture, and timeless charm that captivates travelers worldwide</p>
              </Zoom>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative '>
            <img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/dL2Zt3X/Netherlands-slider.jpg" alt="" />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[rgb(0,0,0,.5)] h-full w-full'>
              <Rotate>
                <h4 className='font-bold font-playfair text-3xl text-white mb-2 '>Netherlands</h4>
              </Rotate>
              <Zoom>
                <p className='text-white w-[90%] md:w-[60%] text-center text-xs md:text-base mx-auto'>Explore the Netherlands, a land of charming windmills, picturesque canals, and vibrant tulip fields. Immerse yourself in its rich history, art, and diverse cultural experiences</p>
              </Zoom>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative '>
            <img className='w-full h-[220px] md:h-[350px] lg:h-[600px]' src="https://i.ibb.co/TY1KRjT/Switzerland-slider.webp" alt="" />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center bg-[rgb(0,0,0,.5)] h-full w-full'>
              <Rotate>
                <h4 className='font-bold font-playfair text-3xl text-white mb-2 '>Switzerland</h4>
              </Rotate>
              <Zoom>
                <p className='text-white w-[90%] md:w-[60%] text-center text-xs md:text-base mx-auto'>Explore the picturesque landscapes of Switzerland, where majestic mountains, pristine lakes, and charming villages captivate every traveler's heart. Discover adventure, tranquility, and timeless beauty in every corner</p>
              </Zoom>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </>
  );
}