import bgImg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import desingImg from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        })
        
    }


    const handleCaptcha = event => {
        event.preventDefault();
        const value1 = event.target.value;
        console.log(value1)
        setValue(value1);
    }

    const handleKey = (e) => {
        // e.preventDefault();
        if (e.key === "Enter") {
            console.log("enter");
            if (validateCaptcha(value) == true) {
                setDisabled(false);
            }

            else {
                setDisabled(true)
            }
        }
    }


    return (
        <div className="relative">
            <div className="h-[100vh]">
                <img src={bgImg} className="h-full w-full" alt="" />
            </div>

            <form onSubmit={handleSubmit} className="absolute top-0 border shadow-xl border-gray-500 rounded-xl w-10/12 left-[50%] translate-x-[-50%] grid lg:grid-cols-2 my-20">
                <div className="flex justify-center items-center">
                    <img src={desingImg} alt="" />
                </div>
                <div className="card-body w-9/12 ml-10">
                    <h3 className="font-bold text-3xl text-center">Login</h3>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="w-full">
                        <LoadCanvasTemplate />
                        <input onKeyDown={handleKey} onChange={handleCaptcha} type="text" name="captcha" value={value} placeholder="type the captcha above" className="input input-bordered rounded-md w-full" />

                    </div>

                    <div className="form-control mt-6">
                        <button disabled={disabled} className="btn btn-primary">Login</button>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h5 className="text-[#D1A054] font-semibold">New here? <Link to="/signUp" className="font-extrabold">Create a New Account</Link></h5>
                        <p className="font-semibold"><span className="font-bold">Or</span> sign in with</p>
                        <SocialLogin />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;