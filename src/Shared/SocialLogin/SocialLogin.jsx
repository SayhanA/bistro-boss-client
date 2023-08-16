import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;

                const saveUser = { name:user.displayName, email:user.email }
                
                fetch(`https://bistro-boss-server-opal.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser)
                }) 
                .then(res => res.json())
                .then(() => {
                        navigate(from, { replace: true });
                })
                
                
            })
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="flex gap-10">
            <div className="w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full  border-2 border-black"> <FaFacebookF /> </div>
            <div onClick={handleGoogleLogin} className="w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full border border-2 border-black"> <FaGoogle /> </div>
            <div className="w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full  border-2 border-black"> <FaGithub /> </div>
        </div>
    );
};

export default SocialLogin;