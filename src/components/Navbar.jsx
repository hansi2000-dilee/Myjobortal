import React, { useState } from 'react'
import logo from '../img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const[ismenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () =>{
        setIsMenuOpen(!ismenuOpen)
    };

    const navItems = [
        {path: "/",title: "Start a search"},
        {path: "/my-job",title: "My Jobs"},
        {path: "/salary",title: "Salary Estimate"},
        {path: "/post-job",title: "Post a Job"},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
        <a href="/" className='flex items-center gap-2 '><img src={logo} style={{width: '55px', height: '55px'}} /></a>
        <ul className='hidden md:flex gap-12'>
            {
                navItems.map(({path,title}) => (
                    <li key={path} className='text-base text-primary'>
                          <NavLink
                    to={path}
                    className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending": ""} >
                        {title}
                  </NavLink>
                    </li>
                ))
            }
        </ul>

        {/*signup button and login btn */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            <Link to="/login" className="py-2 px-5 border rounded">Log In</Link>
            <Link to="/sign-up" className="py-2 px-5 border rounded bg-red-500 text-white" >Sign Up</Link>
        </div>


        {/*mobile menu */}
<div className='md:hidden block'>
    <button onClick={handleMenuToggler}>
        {
            ismenuOpen ?  <FaXmark className='w-5 h-5 text-primary '/> :  <FaBarsStaggered className='w-5 h-5 text-primary '/>
        }
       
    </button>
</div>
        </nav>
        {/* mobile view navigation*/}
        <div className={`px-4 bg-black py-5 rounded-sm ${ismenuOpen ? "" : "hidden"}`}>
        <ul className=''>
            {
                navItems.map(({path,title}) => (
                    <li key={path} className='text-base text-white first:text-white py-1'>
                          <NavLink
                    to={path}
                    className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending": ""} >
                        {title}
                  </NavLink>
                    </li>
                ))
            }
                <li className='py-3'><Link to="/login" className="py-2 px-6 border rounded  text-white">Log In</Link></li>
            <li className='py-3'><Link to="/sign-up" className="py-2 px-5 border rounded bg-red-500 text-white" >Sign Up</Link></li>
        </ul>
        </div>
    </header>
  )
}

export default Navbar