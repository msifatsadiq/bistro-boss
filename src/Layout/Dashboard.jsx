import {  FaBook, FaCalendar, FaEnvelope, FaGripLinesVertical, FaHamburger, FaHome, FaList, FaShoppingCart, FaStar, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu p-4 ">
                    {
                        isAdmin ? <>
                        <li>
                        {/* <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink> */}
                        <NavLink to='/dashboard/userHome'> <FaHome></FaHome> Admin Home</NavLink>
                        <NavLink to='/dashboard/addItems'> <FaUtensilSpoon></FaUtensilSpoon> Add Items</NavLink>
                        <NavLink to='/dashboard/manageItems'> <FaList></FaList> Manage Items</NavLink>
                        <NavLink to='/dashboard/bookings'> <FaBook></FaBook> Manage Bookings</NavLink>
                        <NavLink to='/dashboard/users'> <FaGripLinesVertical></FaGripLinesVertical> All User</NavLink>
                    </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                                    <NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                                    <NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink>
                                    <NavLink to='/dashboard/review'> <FaStar></FaStar> Add Review</NavLink>
                                    <NavLink to='/dashboard/bookings'> <FaGripLinesVertical></FaGripLinesVertical> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> <FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'> <FaHamburger></FaHamburger> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'> <FaEnvelope></FaEnvelope> Contact</NavLink>
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