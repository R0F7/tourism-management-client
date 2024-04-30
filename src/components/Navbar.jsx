import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme || 'light';
      });

    const handleLogOut = () => {
        logOut();
    }

    const handleTheme = (event) => {
        const newTheme = event.target.checked ? 'synthwave' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
      }, [theme]);

    const NavLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[#7F8C8D] text-lg '}>Home</NavLink></li>
        <li><NavLink to='/all-tourists-spot' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium ' : 'text-[#7F8C8D] text-lg '}>All Tourists Spot</NavLink></li>
        <li><NavLink to='/add-tourists-spot' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[#7F8C8D] text-lg '}>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/my-list' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' :  ' text-[#7F8C8D] text-lg '}>My List</NavLink></li>
        {/* { !user && 
            <>
                <li><NavLink to='/login' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>Login</NavLink></li>
                <li><NavLink to='/register' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[rgba(19,19,19,0.80)] text-lg '}>Register</NavLink></li>
            </>
        } */}
    </>

    return (
        <div className="navbar bg-base-100 border-b lg:border-b-0 border-[#A88E64] pb-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
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
            <div className="w-[48.8%] justify-end">
                <label className="flex cursor-pointer gap-2 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input onChange={handleTheme} type="checkbox" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {
                    user ?
                        <div className='w-12 h-12 rounded-full tooltip  tooltip-bottom image-container z-10' data-tip={user?.displayName || 'Unknown'}>
                            <img className='w-full h-full rounded-full' src={user?.photoURL || 'https://i.ibb.co/51kxBQ8/istockphoto-1327592506-612x612.jpg'} alt="" />
                            <button onClick={handleLogOut} className="hover-button text-sm lg:text-base">Logout</button>
                        </div>

                        : <div className='flex gap-4'>
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[#7F8C8D] border px-5 py-1.5 rounded-md border-[#A88E64] '}>Login</NavLink>
                            <NavLink to='/register' className={({ isActive }) => isActive ? 'border-b-2 py-1.5 px-2 rounded-md border-[#A88E64] text-[#A88E64] text-lg font-medium' : 'text-[#7F8C8D] border py-1.5 px-3 rounded-md border-[#A88E64] '}>Register</NavLink>
                        </div>
                    // <Link to='/login' className="btn bg-cyan-400 text-white">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;