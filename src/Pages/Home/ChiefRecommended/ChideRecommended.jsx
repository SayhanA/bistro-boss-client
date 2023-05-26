import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";


import { FreeMode } from "swiper";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChideRecommended = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommendedRecommended = data.filter(data => data.recommended === true)
                setData(recommendedRecommended)
            })
    }, [])

    return (
        <>
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try" />
        
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper w-10/12 my-10"
            >
                {
                    data.map(data => <SwiperSlide key={data._id}>
                        <div className="card rounded-none border bg-[#F3F3F3]">
                            <img src={data.image} alt="" />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.recipe.slice(0, 80)}</p>
                                <div className="card-actions">
                                    <button className="btn btn-ghost border-0 border-b-4 border-yellow-700">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default ChideRecommended;