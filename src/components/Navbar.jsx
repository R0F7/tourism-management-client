import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    const NavLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>Home</NavLink></li>
        <li><NavLink to='/all-tourists-spot' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium ' : 'text-[rgba(19,19,19,0.80)] text-lg '}>All Tourists Spot</NavLink></li>
        <li><NavLink to='/add-tourists-spot' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/my-list' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>My List</NavLink></li>
        {/* { !user && 
            <>
                <li><NavLink to='/login' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>Login</NavLink></li>
                <li><NavLink to='/register' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>Register</NavLink></li>
            </>
        } */}
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className="text-xl lg:text-2xl font-bold">Travel<span className='text-[#A88E64]'>Wise</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" gap-6 menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='w-12 h-12 rounded-full tooltip  tooltip-bottom image-container' data-tip={user?.displayName || 'Unknown'}>
                            <img className='w-full h-full rounded-full' src={user?.photoURL || 'https://i.ibb.co/51kxBQ8/istockphoto-1327592506-612x612.jpg'} alt="" />
                            <button onClick={handleLogOut} className="hover-button">Logout</button>
                        </div>
                        
                        : <div className='flex gap-4'>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg border-t-2 rounded-lg border-[#A88E64]'}>Login</NavLink>
                            <NavLink to='/register' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg border-t-2 rounded-lg border-[#A88E64]'}>Register</NavLink>
                        </div>
                    // <Link to='/login' className="btn bg-cyan-400 text-white">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;