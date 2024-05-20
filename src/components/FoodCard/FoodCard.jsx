import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;

    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const { user } = UseAuth();
    const handelAddToCart = food => {
        // console.log(food, user.email);
        if (user && user.email) {
            // TODO Send cart item to DB
            console.log(user.email, food);

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })


        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "PLease login for adding to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });

        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => { handelAddToCart(item) }} className="btn btn-outline mt-4 border-0 border-b-4 bg-slate-100  border-orange-400 ">Add to Cart</button>

                </div>
            </div>
        </div>
    );
};

export default FoodCard;