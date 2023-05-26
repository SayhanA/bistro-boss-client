import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-2 text-white ">
                <div className="bg-[#1F2937] flex justify-center items-center flex-col p-20">
                    <h3 className="text-3xl mb-6">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] flex justify-center items-center flex-col p-20 ">
                    <h3 className="text-3xl mb-6">Follow US</h3>
                    <p>Join us on social media</p>
                    <div className="flex gap-5 mt-6">
                        <FaFacebookF className="text-2xl hover:scale-125 transition-all hover:text-blue-400" />
                        <FaInstagram className="text-2xl hover:scale-125 transition-all hover:text-blue-400" />
                        <FaTwitter className="text-2xl hover:scale-125 transition-all hover:text-blue-400" />
                    </div>
                </div>
            </div>
            <div className="h-[70px] bg-[#151515] text-white flex justify-center items-center text-xl">Copyright © CulinaryCloud. All rights reserved.</div>

        </footer>
    );
};

export default Footer;