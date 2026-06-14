import React from 'react'
import { IoBag } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { cat1 }  from "./Catg";

const Icons={
bag:<IoBag size={20}/>,
people:<IoIosPeople size={20}/>,
heart:<FaHeart size={20}/>,
money:<RiMoneyPoundCircleFill size={20}/>,
dots:<HiOutlineDotsHorizontal size={20}/>
}



const page = () => {
  return (
    <div>
      <div className='flex flex-col  mt-5'>
      <h1 className='text-2xl font-bold'>Categories</h1>
      <p className='text-gray-500 text-md'>View tasks organized by category.</p>
    </div>


<div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
    {cat1.map((item,index)=>(
      <div key={index} className='bg-white p-5 border border-gray-200 shadow-lg rounded-2xl flex flex-col gap-5'>
        <div className='flex flex-row gap-1 items-center'>
        <div className={` p-2 rounded-lg w-fit h-fit ${item === cat1[0] ? 'bg-blue-200 text-blue-500 ' : item === cat1[1] ? 'bg-green-200 text-green-500 ' : item === cat1[2] ? 'bg-yellow-200 text-yellow-500 ' : item === cat1[3] ? 'bg-red-200 text-red-500 ' : item=== cat1[4] ? 'bg-gray-200 text-gray-500 ' : ''}`}>
<span>
  {item=== cat1[0] ? Icons.bag : item=== cat1[1] ? Icons.people : item=== cat1[2] ? Icons.heart : item=== cat1[3] ? Icons.money : item=== cat1[4] ? Icons.dots : ''}
</span>
          </div>
<p>{item.title}</p>
</div>
<p className='text-3xl font-bold'>{item.num}</p>

<div className='flex flex-row gap-2'>
<p className='bg-green-200 text-green-600 p-1 rounded-lg'>{item.status1}</p>
<p className='bg-blue-200 text-blue-600 p-1 rounded-lg'>{item.status2}</p>
<p className='bg-gray-200 p-1 rounded-lg'>{item.status3}</p>
</div>

      </div>
    ))}
  </div>


</div>



    </div>
  )
}

export default page
