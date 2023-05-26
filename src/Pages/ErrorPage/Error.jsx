import errorImg from "../../assets/404.gif"
import './Error.css'
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    // console.log(error);
    
    return (
        <div className='flex flex-col justify-center items-center relative'>
           <img src={errorImg} alt="" />
            <div className='absolute -bottom-14'>
                <p className='text-6xl font-bold text-gray-500 text-center'>Page {error.statusText}</p>
                <p className='text-2xl font-bold text-center pt-3 text-blue-100'>{error.data}</p>
            <Link to='/' className='btn btn-primary w-[200px] bg-blue-300 mx-auto  flex justify-center'>Go to Home page</Link>
            </div>
        </div>
    );
};

export default Error;