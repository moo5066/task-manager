
'use client'

import { CiSearch } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Image from 'next/image';
// import { useTheme } from "next-themes";
// import { useState,useEffect } from 'react';

const Navbar = () => {

  // const {theme,setTheme}=useTheme()
// const [mounted, setMounted] = useState(false);

// useEffect(()=>{
//   setMounted(true)
// },[])



  return (
    <div className='flex justify-between items-center p-3 border bg-white border-gray-300 text-black'>
      <div className='flex flex-row gap-1 items-center bg-gray-100  p-2 rounded-lg mx-20 border border-gray-300 hover:border-blue-500'>
<CiSearch/>
<input
  type="text"
  placeholder="Search tasks....."
  className="border-none outline-0 bg-transparent "/>      
  </div>

<div className='flex justify-between items-center gap-3'>

 <div className="relative text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer p-1">
          <FaBell size={20} />
          {/* Notification Badge Badge count */}
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </div>
<Image src="/Mo.png" width={50} height={50} alt="profile" className='rounded-full'/>
      {/* <Image src='/midical care Background Removed.png' alt='logo' width={70} height={70} /> */}

</div>



    </div>
  )
}

export default Navbar
