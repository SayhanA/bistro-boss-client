import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="w-10/12 mx-auto">
            <SectionTitle heading={"Order Online"} subHeading={"From 11.00ap to 10.00pm"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-[450px]"
            >
                <SwiperSlide><img src={slider1} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Salad</h3> </SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Pizzas</h3> </SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Supes</h3> </SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Deserts</h3> </SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Salad</h3> </SwiperSlide>
                <SwiperSlide><img src={slider1} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Salad</h3> </SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Pizzas</h3> </SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Supes</h3> </SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Deserts</h3> </SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /><h3 className="text-3xl text-white absolute bottom-16 left-[45%] translate-x-[-50%] uppercase font-serif" style={{ textShadow: "4px 5px 7px black" }}>Salad</h3> </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;