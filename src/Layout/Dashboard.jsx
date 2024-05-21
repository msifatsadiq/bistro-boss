import { FaCalendar, FaGripLinesVertical, FaHamburger, FaHome, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu p-4 ">
                    <li>
                        <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                        <NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                        <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink>
                        <NavLink to='/dashboard/review'> <FaStar></FaStar> Add Review</NavLink>
                        <NavLink to='/dashboard/bookings'> <FaGripLinesVertical></FaGripLinesVertical> My Bookings</NavLink>

                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> <FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'> <FaHamburger></FaHamburger> Menu</NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;