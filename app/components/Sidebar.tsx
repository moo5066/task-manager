'use client'

import { MdOutlineTaskAlt } from "react-icons/md";
import  {dashboardList} from "../dashboard/Data"
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaTasksSolid } from "react-icons/lia";
import { BiCategory } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
const Sidebar = () => {

const [isOpen , setIsOpen ]=useState(false)


function handleIsOpen(){
  setIsOpen(prev=>!prev)
}

  const pathname=usePathname()


const icons: Record<string, React.ReactNode> = {
  dashboard: <LuLayoutDashboard size={20}/>,
  tasks: <LiaTasksSolid size={20}/>,
  categories: <BiCategory size={20}/>,
  settings:<IoSettingsOutline size={20}/>
}



  return (
    <div className=" h-full p-3 border-r border-gray-300">
      <div className="hidden lg:block">
    <div className="flex items-center gap-2 mb-10">
      <p className="bg-blue-500 p-0.5 text-white rounded-lg"><MdOutlineTaskAlt size={25}/></p>
      <h1 className="text-2xl font-bold">Task Manager</h1>
    </div>



<div className="mx-auto">
  {dashboardList.map((item,index)=>(
      <Link href={item.href} key={index} className={`flex items-center gap-2 mb-5 p-3 rounded-lg ${pathname === item.href ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
      {icons[item.icon]}
      {item.name}
      </Link>
  ))}
</div>
</div>


<div className="lg:hidden">
  <p onClick={handleIsOpen} className=""><CiMenuBurger size={25} /></p>
  {isOpen &&(
    <div className="mt-10">
<div className="mx-auto">
  {dashboardList.map((item,index)=>(
      <Link href={item.href} key={index} className={`flex items-center gap-2 mb-5 p-3 rounded-lg ${pathname === item.href ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>
      {icons[item.icon]}
      {item.name}
      </Link>
  ))}
</div>
    </div>
  )}
</div>


    </div>
  )
}

export default Sidebar
