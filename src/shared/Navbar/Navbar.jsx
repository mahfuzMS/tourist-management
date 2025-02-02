import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = (
        <>
            <li className="text-base">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-base">
                <NavLink to="/allTouristSpot">All Tourist Spot</NavLink>
            </li>
            <li className="text-base">
                <NavLink to="/countryCard">Country Card</NavLink>
            </li>
        </>
    );
    const navLink = (
        <>
            {
                <button className="text-base gap-2 btn btn-active btn-accent">
                    Registred
                </button>
            }
        </>
    );
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">
                    Travel Management
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    {/* {
                        user ?
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div> : <div className="w-10 rounded-full">
                                <img src={userDefaultPic} />
                            </div>
                    } */}
                </label>
                {navLink}
            </div>
        </div>
    );
};

export default Navbar;
