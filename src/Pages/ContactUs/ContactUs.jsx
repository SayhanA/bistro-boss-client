import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../assets/contact/banner.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { CgPhone } from "react-icons/cg";
import { MdLocationPin, MdWatchLater } from "react-icons/md";
import ContactForm from './ContactForm/ContactForm';

const ContactUs = () => {
    <Helmet>
        <title>Bistro Boss | Contact Us</title>
    </Helmet>

    return (
        <div>
            <Cover coverImg={coverImg} title="CONTACT US" text="Would you like to try a desert"  />

            <SectionTitle heading="our location" subHeading="Visit Us" />
            <div className='h-fit overflow-hidden grid lg:grid-cols-3 gap-5 w-10/12 mx-auto'>
                <div className='h-full'>
                    <div className='h-[80px] flex justify-center items-center bg-[#D1A054]'> <CgPhone className='text-white text-3xl' /> </div>
                    <div className='w-full h-full p-5 pb-14 text-center bg-[#f3f3f3]'>
                        <h4 className='uppercase text-xl font-bold pb-3'>phone</h4>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div>
                <div className='h-[80px] flex justify-center items-center bg-[#D1A054]'> <MdLocationPin className='text-white text-3xl' /> </div>
                    <div className='w-full h-full p-5 pb-14 text-center bg-[#f3f3f3]'>
                        <h4 className='uppercase text-xl font-bold pb-3'>address</h4>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div>
                <div className='h-[80px] flex justify-center items-center bg-[#D1A054]'> <MdWatchLater className='text-white text-3xl' /> </div>
                    <div className='w-full p-5 pb-14 text-center bg-[#f3f3f3]'>
                        <h4 className='uppercase text-xl font-bold pb-3'>working hours</h4>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            

            <SectionTitle heading="Contact form" subHeading="Send us a message" />
            
            <ContactForm />
            <h3>Contact us page</h3>
        </div>
    );
};

export default ContactUs;