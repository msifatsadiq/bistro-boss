
const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline mt-4 border-0 border-b-4 bg-slate-100  border-orange-400 ">Add to Cart</button>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;