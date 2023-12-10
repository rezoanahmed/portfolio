import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
    const links = <>
        <li className=""><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 font-bold text-xl" : "text-xl"
        }>Home</NavLink></li>
        <li><NavLink to='/projects' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 font-bold text-xl" : "text-xl"
        }>Projects</NavLink></li>
        <li><NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 font-bold text-xl" : "text-xl"
        }>About</NavLink></li>
    </>
    return (
        <div className="z-100">
            <div className="fixed top-0 navbar bg-base-200 bg-opacity-70 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Logo></Logo>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;