import { useEffect, useState } from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import { Link } from 'react-router-dom';

const MenuCategory = ({bannerImg, category}) => {
    console.log(bannerImg)

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === category)
                setItems(popularItems)
            })
    }, [])

    
    return (
        <div>
            <div className={`mx-auto relative  w-10/12 ${category === "offered" ? "hidden" : ""}`}>
                <div style={{ background: `url(${bannerImg}) no-repeat fixed center/cover`, }} className="h-[600px] w-full">
                </div>
                <div className=' h-full w-full absolute top-0 py-44 px-60 text-white'>
                    <div className=' bg-[#0000007a] w-full h-full flex flex-col items-center justify-center gap-5'>
                        <h3 className='text-4xl font-mono text-center uppercase'>{category}</h3>
                        <p className='px-10 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 w-10/12 mx-auto mt-20">
                {
                    items.map(item => <MenuItems item={item} color="text-white" key={item._id} />)
                }

            </div>
            <div className='w-fit mx-auto mt-5 mb-20'><Link to={`/order/${category}`} className="btn btn-ghost border-b-4 border-0 border-black">ORDER YOUR FAVOURITE FOOD</Link></div>


        </div>
    );
};

export default MenuCategory;