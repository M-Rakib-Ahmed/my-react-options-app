import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] =useState(false)
    const routes = [
        {id:1, path: '/', name: 'Home'},
        {id:2, path: '/about', name: 'About'},
        {id:3, path: '/services', name: 'Services'},
        {id:4, path: '/contact', name: 'Contact'},
        {id:5, path: '/*', name: 'NotFound'}
    ]
    return (
        <div className="  bg-yellow-200 p-6">
            {
                open===true? <FaWindowClose  onClick={()=> setOpen(!open)}className="text-2xl text-black"></FaWindowClose>:<AiOutlineMenu  onClick={()=> setOpen(!open)}className="text-2xl text-black"></AiOutlineMenu>
            }
         <nav className="text-black bg-yellow-200">
         
           <ul className={`md:flex absolute duration-1000 bg-yellow-200 px-6 rounded-xl ${open? "top-16":"-top-60"}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul> 
           
        </nav> 
        </div>
    );
};

export default Navbar;