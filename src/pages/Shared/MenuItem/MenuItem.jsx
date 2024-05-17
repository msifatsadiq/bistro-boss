
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            <h3>{name}---------</h3>
            <p>{recipe}</p>
            <p className="text-yellow-400">${price}</p>

        </div>
    );
};

export default MenuItem;