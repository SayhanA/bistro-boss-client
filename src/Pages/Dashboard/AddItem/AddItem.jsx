import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    
    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            const imgURL = imgResponse.data.display_url;
            const { name, price, category, recipe} = data;
            const newItem = { name, price: parseFloat(price), category, recipe, image:imgURL }
            console.log(newItem)
            axiosSecure.post('./menu', newItem)
            .then(data => {
                console.log('after posting  new menu item', data.data)
            })

        })
        
        console.log(data)
    };

    return (
        <div>
            <SectionTitle subHeading="What's new" heading="Add an item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="border-4 border-blue-300 w-9/12 p-10 rounded-xl mx-auto">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Name*</span>
                    </label>
                    <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Recipe Name" className="input input-bordered w-full" />

                    <div className="grid grid-cols-2 gap-10 py-5">
                        <div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Category*</span>
                                </label>
                                <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                    <option>Category</option>
                                    <option>pizza</option>
                                    <option>soup</option>
                                    <option>salad</option>
                                    <option>drinks</option>
                                    <option>dessert</option>
                                    <option>desi</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Price*</span>
                            </label>
                            <input type="text" {...register("price", { required: true, maxLength: 120 })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true, maxLength: 120 })} className="textarea textarea-bordered h-40" placeholder="Recipe Details"></textarea>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold pt-4">Pick a Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true, maxLength: 120 })} className="file-input file-input-bordered w-full max-w-xs mb-5" />
                    </div>

                </div>
                <input type="submit" id="submit" className="hidden" />

                <label className="btn border-0 rounded-sm px-10 bg-gradient-to-r from-[#835D23] to-[#B58130] " htmlFor="submit"> Add Item
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z" fill="white" />
                        <path d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z" fill="white" />
                    </svg>
                </label>

            </form>

        </div>
    );
};

export default AddItem;