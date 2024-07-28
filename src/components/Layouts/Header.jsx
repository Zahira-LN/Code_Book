import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Search } from '../Search';
import { DropdownLoggedOut } from '../Element/DropdownLoggedOut';
import { DropdownLoggedIn } from '../Element/DropdownLoggedIn';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const {cartLists} = useCart();
  const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode"))||false);
  const [searchShow,setSearchShow] = useState(false);
  const [dropdown,setDropDown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

useEffect(()=>{
  localStorage.setItem("darkMode",JSON.stringify(darkMode))
  if(darkMode){
    document.documentElement.classList.add("dark");
  }else{
    document.documentElement.classList.remove("dark");
  }
},[darkMode])



  return (
    <>
<header className='w-full '>
  

<nav className="bg-white relative border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="codeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
           <Link to=""><span onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected'></span></Link>
           <Link to=""><span onClick={()=>setSearchShow(!searchShow)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search'></span></Link>
           <Link to="/cartpage"><span className='cursor-pointer relative text-xl text-gray-700 dark:text-white mr-5 bi bi-cart-fill' >
           <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartLists.length}</span>
            </span></Link>
           <Link to=""><span className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle' onClick={()=>setDropDown(!dropdown)}></span></Link>
           {dropdown && (token ? <DropdownLoggedIn setDropDown={setDropDown} /> : <DropdownLoggedOut setDropDown={setDropDown} />)}
        </div>
    </div>

</nav>


</header>

{searchShow && <Search/>}
</>
  )
}

export default Header