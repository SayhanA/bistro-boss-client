import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])


    return (
        <section className="w-10/12 mx-auto">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="grid grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItems item={item} key={item._id} />)
                }

            </div>
                <div className="w-fit mt-16 mx-auto"><button className="btn btn-ghost border-0 border-b-4 border-black px-10">View Full Menu</button></div>
        </section>
    );
};

export default PopularMenu;