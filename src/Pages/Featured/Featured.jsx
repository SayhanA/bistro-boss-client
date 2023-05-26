import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className="mt-[130px] relative text-white">
            <div style={{backgroundImage: `url(${featuredImg})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover"}}  className="h-[650px] w-full">
                {/* <img className="h-[650px] w-full" src={featuredImg} alt="" /> */}
            </div>
            <div className="bg-[#000000a0] absolute top-0 w-full h-full">
                <SectionTitle heading="check it out" subHeading="Featured Item" color="White" />
                <div className="grid grid-cols-2 w-9/12 mx-auto">
                    <img src={featuredImg} className="pl-20" alt="" />
                    <div className="p-16">
                        <h4 className="text-xl">March 20, 2023</h4>
                        <h4 className="text-xl">WHERE CAN I GET SOME?</h4>
                        <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-ghost border-b-4 border-0 text-white border-white">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;