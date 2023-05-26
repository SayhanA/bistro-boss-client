import { useEffect, useState } from 'react';
import coverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const Order = () => {
    const [length, setLength] = useState(0)
    const allCategories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = allCategories.indexOf(category);

    const [categories, setCategories] = useState('salad')
    const [tabIndex, setTabIndex] = useState(initialIndex);

    useEffect(() => {
        fetch(`http://localhost:5000/menu`)
            .then(res => res.json())
            .then(data => {
                const recommendedRecommended = data.filter(data => data.category === categories)
                setLength(recommendedRecommended.length)
            })
    }, [tabIndex]);

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const totalPages = Math.ceil(length / itemsPerPage);

    const pageNumbers = [...Array(totalPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/menu/${categories}?pages=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [tabIndex, currentPage, itemsPerPage])

    // console.log(data)

    // const options = [ 5, 10, 20 ];
    // const handleSectionChange = event => {
    //     setItemsPerPage(parseInt(event.target.value));
    //     setCurrentPage(0);
    // }
    // console.log("Page Numbers:",pageNumbers.length)
    // console.log("Current Page:",currentPage)
    

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover coverImg={coverImg} title="OUR SHOP" text="Would you like to try a desert" />


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='w-10/12 mx-auto py-20' >
                <TabList className="flex gap-10 text-xl font-semibold w-fit mx-auto">
                    <Tab onClick={() => setCategories("salad")} style={{ outline: "none" }} className={`border-0 w-fit ${tabIndex == 0 ? "border-0 border-b-4 border-yellow-600 text-yellow-500" : ""} `}>Salad</Tab>
                    <Tab onClick={() => setCategories("pizza")} style={{ outline: "none" }} className={`border-0 w-fit ${tabIndex == 1 ? "border-0 border-b-4 border-yellow-600 text-yellow-500" : ""} `}>pizza</Tab>
                    <Tab onClick={() => setCategories("soup")} style={{ outline: "none" }} className={`border-0 w-fit ${tabIndex == 2 ? "border-0 border-b-4 border-yellow-600 text-yellow-500" : ""} `}>soups</Tab>
                    <Tab onClick={() => setCategories("dessert")} style={{ outline: "none" }} className={`border-0 w-fit ${tabIndex == 3 ? "border-0 border-b-4 border-yellow-600 text-yellow-500" : ""} `}>desserts</Tab>
                    <Tab onClick={() => setCategories("drinks")} style={{ outline: "none" }} className={`border-0 w-fit ${tabIndex == 4 ? "border-0 border-b-4 border-yellow-600 text-yellow-500" : ""} `}>drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            data.map(data =>
                                <div key={data._id} className="card rounded-none border bg-[#F3F3F3]">
                                    <div className='relative'>
                                        <img src={data.image} className='w-full' alt="" />
                                        <div className='absolute top-0 w-full h-full p-6 flex justify-end text-lg'> <button className='btn rounded-none'>${data.price}</button> </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p>{data.recipe.slice(0, 80)}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost border-0 border-b-4 border-yellow-700">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            data.map(data =>
                                <div key={data._id} className="card rounded-none border bg-[#F3F3F3]">
                                    <div className='relative'>
                                        <img src={data.image} className='w-full' alt="" />
                                        <div className='absolute top-0 w-full h-full p-6 flex justify-end text-lg'> <button className='btn rounded-none'>${data.price}</button> </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p>{data.recipe.slice(0, 80)}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost border-0 border-b-4 border-yellow-700">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            data.map(data =>
                                <div key={data._id} className="card rounded-none border bg-[#F3F3F3]">
                                    <div className='relative'>
                                        <img src={data.image} className='w-full' alt="" />
                                        <div className='absolute top-0 w-full h-full p-6 flex justify-end text-lg'> <button className='btn rounded-none'>${data.price}</button> </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p>{data.recipe.slice(0, 80)}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost border-0 border-b-4 border-yellow-700">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            data.map(data =>
                                <div key={data._id} className="card rounded-none border bg-[#F3F3F3]">
                                    <div className='relative'>
                                        <img src={data.image} className='w-full' alt="" />
                                        <div className='absolute top-0 w-full h-full p-6 flex justify-end text-lg'> <button className='btn rounded-none'>${data.price}</button> </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p>{data.recipe.slice(0, 80)}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost border-0 border-b-4 border-yellow-700">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel className="grid grid-cols-3">
                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            data.map(data =>
                                <div key={data._id} className="card rounded-none border bg-[#F3F3F3]">
                                    <div className='relative'>
                                        <img src={data.image} className='w-full' alt="" />
                                        <div className='absolute top-0 w-full h-full p-6 flex justify-end text-lg'> <button className='btn rounded-none'>${data.price}</button> </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{data.name}</h2>
                                        <p>{data.recipe.slice(0, 80)}</p>
                                        <div className="card-actions">
                                            <button className="btn btn-ghost border-0 border-b-4 border-yellow-700">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>

            <div className='pagination w-fit mx-auto flex items-center'>
                {
                    currentPage === 0 || <FaAngleLeft onClick={() => { setCurrentPage(currentPage-1) }} className='text-5xl text-gray-500 hover:bg-gray-500 hover:text-white w-[53px] h-[53px]'/>
                }
                {
                    pageNumbers.map(number => <button key={number} className={currentPage === number ? "selection border px-7 py-3 text-xl font-bold bg-gray-500" : " border px-7 py-3 text-xl font-bold hover:bg-gray-300"} onClick={() => { setCurrentPage(number) }} >{number + 1}</button>)
                }
                {
                    pageNumbers.length == currentPage+1 ? "" : <FaAngleRight onClick={() => { setCurrentPage(currentPage+1) }} className='text-5xl text-gray-500 hover:bg-gray-500 hover:text-white w-[53px] h-[53px]' />
                }
            </div>

        </div>
    );
};

export default Order;