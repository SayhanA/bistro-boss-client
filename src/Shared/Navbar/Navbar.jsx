
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../components/ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const [ cart ] = useCart();
    const [ isAdmin ] = useAdmin();
    const { user } = useAuth();
    const { logOut } = useContext(AuthContext)
    
    return (
        <nav className="h-[100px] px-10 fixed w-full z-40 bg-[#00000080] flex items-center font-extrabold text-white">
            <div>
                <h3 className='text-3xl font-extrabold'>BISTRO BOSS</h3>
                <p style={{ letterSpacing: "10px" }} className='uppercase'>Restaurant</p>
            </div>
            <ul className="flex ml-auto gap-5 text-gray-400">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/menu'>Our Menu</ActiveLink>
                <ActiveLink to='/order/salad'>Order Food</ActiveLink>
                <ActiveLink to='/contact'>Contact us</ActiveLink>
                <ActiveLink to={ isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome' }>Dashboard</ActiveLink>
            </ul>
            <Link to="/dashboard/myCart" className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{cart?.length || 0}</span>
                    </div>
                </label>
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg text-black">{cart?.length || 0} Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                    </div>
                </div>
            </Link>

            {/* <button className="btn btn-ghost normal-case font-extrabold">LogOut</button> */}

            {
                user ? <div className="dropdown dropdown-end text-black">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user.photoURL ? <img src={user.photoURL} alt="" /> : <FaUserCircle className='w-full text-4xl' />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logOut}><a>Logout</a></li>
                    </ul>
                </div> :
                    <Link to="/login" className="btn btn-ghost normal-case font-extrabold">LogIn</Link>

            }

        </nav>
    );
};

export default Navbar;