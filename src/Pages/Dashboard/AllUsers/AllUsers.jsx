import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaUserShield, } from 'react-icons/fa';
import { IoTrashOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://bistro-boss-server-opal.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = () => {

    }

    return (
        <div>
            <SectionTitle heading="Wanna add more" subHeading="My Cart"></SectionTitle>

            <div className='mx-32 bg-white rounded-xl p-10 font-bold font-serif'>

                <Helmet>
                    <title>Bistro Boss | All users</title>
                </Helmet>

                <h3 className='text-3xl font-semibold mb-5'> Total Users: {users.length}</h3>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className='bg-[#D1A054]'>
                            <tr>
                                <th className='bg-[#D1A054] text-white'>#</th>
                                <th className='bg-[#D1A054] text-white'>Name</th>
                                <th className='bg-[#D1A054] text-white'>Email</th>
                                <th className='bg-[#D1A054] text-white'>Role</th>
                                <th className='bg-[#D1A054] text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className='text-gray-500'>{user.name}</td>
                                    <td className='text-gray-500'>{user.email}</td>
                                    <td><button onClick={() => handleMakeAdmin(user)} className='btn bg-[#D1A054] text-white border-0 text-2xl'> {user.role === "admin" ? "admin" : <FaUserShield />} </button></td>
                                    <td><button onClick={handleDelete} className='btn bg-red-600 text-white border-0 text-2xl'> <IoTrashOutline /> </button></td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;