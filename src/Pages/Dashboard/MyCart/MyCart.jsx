
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';
import {  FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)

    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (id) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-opal.vercel.app/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })



        fetch(`https://bistro-boss-server-opal.vercel.app/carts/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='mx-32 bg-white rounded-xl p-10 font-bold font-serif'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='flex justify-between pb-7 items-center'>
                <h3 className="text-2xl">Total Items: {cart.length}</h3>
                <h3 className="text-2xl">Total price: ${total}</h3>
                <Link to="/dashboard/payment" className='btn bg-[#D1A054] normal-case border-0 text-lg px-5'>Pay</Link>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-[#D1A054] rounded-xl">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white uppercase'>
                        <tr className=''>
                            <th className='bg-transparent text-[16px]'>
                                #
                            </th>
                            <th className='bg-transparent text-[16px]'>Item image</th>
                            <th className='bg-transparent text-[16px]'>Item Name</th>
                            <th className='bg-transparent text-[16px]'>Price</th>
                            <th className='bg-transparent text-[16px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='font-sans'>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <td> {index + 1} </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" w-32 h-32 rounded-xl">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{row.name}</div>
                                </td>
                                <td>{row.price}$</td>
                                <td>
                                    <button onClick={() => handleDelete(row._id)} className="btn btn-error text-white text-2xl "><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyCart;