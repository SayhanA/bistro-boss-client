import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChideRecommended from "../ChiefRecommended/ChideRecommended";
import PopularMenu from "../PopulatMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home </title>
            </Helmet>
            <Banner />
            <Category />
            <BistroBoss />
            <PopularMenu />
            <CallUs />
            <ChideRecommended />
            <Featured />
            <Testimonial />
            <h2>this is home</h2>
        </div>
    );
};

export default Home;