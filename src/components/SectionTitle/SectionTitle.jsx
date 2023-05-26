

const SectionTitle = ({heading, subHeading, color}) => {
    return (
        <div className="text-center w-[424px] mx-auto my-16">
            <p className="text-[#D99904] pb-3">---{subHeading}---</p>
            <hr className="border-[#E8E8E8] border-2" />
            <h3 className={`text-4xl py-5 uppercase ${color ? "text-white" : ""} `}>{heading}</h3>
            <hr className="border-[#E8E8E8] border-2" />
        </div>
    );
};

export default SectionTitle;