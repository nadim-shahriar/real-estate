import { NavLink } from "react-router-dom";
import logo from '../../assets/images/Logo.png'
import { IoPersonOutline } from "react-icons/io5";


const NavBar = () => {

    const links = <>
        <li><NavLink className='text-lg ' to={'/'}>Home</NavLink></li>
        <li><NavLink className='text-lg ' to={'/updateProfile'}>Update Profile</NavLink></li>
        <li><NavLink className='text-lg ' to={'/userProfile'}>User Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-white h-[100px] px-[100px] sticky -top-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }

                    </ul>
                </div>
                <img className="w-[50px] h-[45px]" src={logo} alt="" />
                <a className="btn btn-ghost text-2xl font-semibold">BaRI LAGbe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end ">

                <a className="btn h-[60px] border-cyan-950 hover:bg-cyan-950 hover:text-white rounded-full text-lg px-10">
                    <IoPersonOutline></IoPersonOutline>
                    Sing In
                </a>
            </div>
        </div>
    );
};

export default NavBar;