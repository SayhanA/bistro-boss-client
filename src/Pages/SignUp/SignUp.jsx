import bgImg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import desingImg from "../../assets/others/authentication2.png";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUser(name, photo)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
                
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className="relative">
            <div className="h-[100vh]">
                <img src={bgImg} className="h-full w-full" alt="" />
            </div>

            <form onSubmit={handleSubmit} className="absolute top-0 border shadow-xl border-gray-500 rounded-xl w-10/12 left-[50%] translate-x-[-50%] grid lg:grid-cols-2 my-20">
                <div className="card-body w-9/12 ml-20">
                    <h3 className="font-bold text-3xl text-center">Login</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered rounded-md " />
                    </div>
                    <div className="form-control">
                        
                        <input name="photo" type="text" placeholder="your photo" className="input input-bordered rounded-md " />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered rounded-md " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input name="password" type="text" placeholder="password" className="input input-bordered rounded-md " />
                     
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h5 className="text-[#D1A054] font-semibold">Already have an Account? <Link to="/login" className="font-extrabold">Login</Link></h5>
                        <p className="font-semibold"><span className="font-bold">Or</span> sign in with</p>
                        <div className="flex gap-10">
                            <div className="w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full border border-2 border-black"> <FaFacebookF /> </div>
                            <div onClick={handleGoogleLogin} className="w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full border border-2 border-black"> <FaGoogle /> </div>
                            <div className="w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full border border-2 border-black"> <FaGithub /> </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={desingImg} alt="" />
                </div>
            </form>

        </div>
    );
};

export default SignUp;