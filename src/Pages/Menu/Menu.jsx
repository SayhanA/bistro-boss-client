import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../assets/menu/banner3.jpg';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessert from "../../assets/menu/dessert-bg.jpeg"
import pizza from "../../assets/menu/pizza-bg.jpg"
import salad from "../../assets/menu/salad-bg.jpg"
import soup from "../../assets/menu/soup-bg.jpg"


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu </title>
            </Helmet>
            <Cover coverImg={coverImg} title="our menu" text="WOULD YOU LIKE TO TRY A DISH" />
            <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss" />
            <MenuCategory bannerImg={coverImg} category="offered" />
            <MenuCategory bannerImg={pizza} category="pizza" />
            <MenuCategory bannerImg={soup} category="soup" />
            <MenuCategory bannerImg={dessert} category="desser" />
            <MenuCategory bannerImg={salad} category="salad" />
            
        </div>
    );
};

export default Menu;