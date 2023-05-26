
const MenuItems = ({item}) => {
    const { name, image, price, recipe } = item;
    
    return (
        <div className="flex gap-8">
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[120px] h-[105px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-bold text-xl">${price}</p>
        </div>
    );
};

export default MenuItems;