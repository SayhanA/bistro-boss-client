import { IoTrashOutline } from 'react-icons/io5';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted response', res.data);
                        if (res.data.deletedCount > 0) {
                            
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
    }

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up" />
            <div className='mx-32 bg-white rounded-xl p-10 font-bold font-serif'>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054]'>
                            <tr>
                                <th className='bg-[#D1A054] text-white'>#</th>
                                <th className='bg-[#D1A054] text-white'>Item Image</th>
                                <th className='bg-[#D1A054] text-white'>Item Name</th>
                                <th className='bg-[#D1A054] text-white'>Price</th>
                                <th className='bg-[#D1A054] text-white'>Update</th>
                                <th className='bg-[#D1A054] text-white'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img src={item.image} className=" w-20 h-20" alt="" />
                                    </td>
                                    <td className='text-gray-500'>{item.name}</td>
                                    <td className='text-gray-500'>{item.email}</td>
                                    <td><button className='btn bg-[#D1A054] text-white border-0 text-2xl'> {item.role === "admin" ? "admin" : <FaUserShield />} </button></td>
                                    <td><button onClick={() => { handleDelete(item) }} className='btn bg-red-600 text-white border-0 text-2xl'> <IoTrashOutline /> </button></td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
};

export default ManageItems;