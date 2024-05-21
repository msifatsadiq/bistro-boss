import { FaCalendar, FaGripLinesVertical, FaHome, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu p-4 ">
                    <li>
                        <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                        <NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                        <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink>
                        <NavLink to='/dashboard/review'> <FaStar></FaStar> Add Review</NavLink>
                        <NavLink to='/dashboard/bookings'> <FaGripLinesVertical></FaGripLinesVertical> My Bookings</NavLink>

                    </li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;