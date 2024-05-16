import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-20"
        >
            <SwiperSlide> <img src={slide1} alt="" /> <p className='text-4xl text-center uppercase text-white -mt-16 '>Salad</p> </SwiperSlide>
            <SwiperSlide> <img src={slide2} alt="" /> <p className='text-4xl text-center uppercase text-white -mt-16 '>Pizzas</p> </SwiperSlide>
            <SwiperSlide> <img src={slide3} alt="" /> <p className='text-4xl text-center uppercase text-white -mt-16 '>Soups</p> </SwiperSlide>
            <SwiperSlide> <img src={slide4} alt="" /> <p className='text-4xl text-center uppercase text-white -mt-16 '>Dessert</p> </SwiperSlide>
            <SwiperSlide> <img src={slide5} alt="" /> <p className='text-4xl text-center uppercase text-white -mt-16 '>Salad</p> </SwiperSlide>

        </Swiper>
    );
};

export default Category;