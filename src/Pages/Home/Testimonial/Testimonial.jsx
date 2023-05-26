import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";


const Testimonial = () => {

    const [review, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <>
            <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-20 w-8/12">

                {
                    review.map(data => <SwiperSlide key={data._id}><Rating isRequired style={{ maxWidth: 250 }} className="mx-auto" value={data.rating} readOnly />
                        <FaQuoteLeft className="mx-auto text-8xl my-10" />
                        <p className="w-9/12 mx-auto text-center">{data.details}</p>            <h3 className="text-2xl font-semibold text-center mt-5 uppercase text-[#CD9003]">{data.name}</h3>
                    </SwiperSlide>)
                }

                

            </Swiper>
        </>
    );
};

export default Testimonial;

{/* <div className="flex flex-col ">
            <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS" />
            <Rating isRequired style={{ maxWidth: 250 }} className="mx-auto" value={rating} readOnly />
            <FaQuoteLeft className="mx-auto text-8xl my-10" />
            <p className="w-9/12 mx-auto text-center">{details}</p>
            <h3 className="text-2xl font-semibold text-center mt-5 uppercase text-[#CD9003]">{name}</h3>

            

        </div> */}