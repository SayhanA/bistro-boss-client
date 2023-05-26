import { useForm } from "react-hook-form";
// import { GrSend } from "react-icons/gr";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f3f3f3] w-10/12 mx-auto p-32 flex flex-col justify-center items-center gap-6">
            <div className="w-full grid lg:grid-cols-2 gap-10 ">
                <div>
                    <p className="pb-2 font-bold">Name*</p>
                    <input className="w-full border border-gray-400 h-[50px] rounded-md pl-5" {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your name" />
                </div>
                <div>
                    <p className="pb-2 font-bold">Email*</p>
                    <input className="w-full border border-gray-400 h-[50px] rounded-md pl-5" {...register("email", { required: true, maxLength: 20 })} placeholder="Enter your email" />
                </div>

            </div>
            <div className="w-full">
                <p className="pb-2 font-bold">Phone*</p>
                <input type="text" className="w-full border border-gray-400 h-[50px] rounded-md pl-5" {...register("phone", { required: true, maxLength: 20 })} placeholder="Enter your phone number" />
            </div>
            
            <div className="w-full">
                <p className="pb-2 font-bold">Message*</p>
                <textarea type="text" rows="8" className="w-full border border-gray-400  rounded-md pl-5 pt-5" {...register("phone", { required: true, maxLength: 20 })} placeholder="Write your message here" />
            </div>
            
            <label className="normal-case btn rounded-sm w-fit bg-gradient-to-r from-[#835D23] to-[#B58130]" htmlFor="submit">Send Message <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 ml-3"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg> </label>
            <input type="submit" id="submit" className="hidden" />
        </form>
    );
}

export default ContactForm;