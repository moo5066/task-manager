import { FaTasks } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { WiTime10 } from "react-icons/wi";
import { CgDanger } from "react-icons/cg";
import { cards, tasks, categories } from "./Data";
import React from 'react'
const Page = () => {


const icons: Record<string, React.ReactNode> = {
  tasks: <FaTasks size={20}/>,
  check: <CiCircleCheck size={20}/>,
  time: <WiTime10 size={20}/>,
  danger: <CgDanger size={20}/>,
}
const colors: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  red: "bg-red-500"
}


const statusColors: Record<string, string> = {
  low: "bg-green-500 text-green-200",
  medium: "bg-yellow-500 text-yellow-200",
  high: "bg-red-500 text-red-200",
}






  return (
    <div className='m-10 '>
      <h1 className="text-3xl font-bold ">Dashboard</h1>
      <p className="text-gray-500">Welcome back! Here's an overview of your tasks.</p>


<div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-10'>
  {cards.map((card,index)=>(
    <div key={index} className='bg-white p-5 rounded-lg shadow-md'>
      <div className="flex flex-row gap-2">
<div className={`${colors[card.color] || 'bg-gray-500'} w-10 h-10 flex items-center justify-center rounded-full text-white`}>{icons[card.icon]}</div>

      <div>
      <h2 className="text-gray-500">{card.title}</h2>
      <p className="font-bold text-2xl">{card.total}</p>
    </div>
    </div>
    </div>
  ))}
</div>


<div className="flex flex-col lg:flex-row gap-5 mt-10">

<div className="mt-10 bg-white p-5 shadow-lg rounded-lg lg:w-[50%]">
  <h1 className="mb-10 text-xl font-bold text-black ">Recent Tasks</h1>
  <div>
  {tasks.map((task,index)=>(
    <div key={index} className="flex flex-col gap-5 mb-5 p-5 border-b border-gray-300 rounded-lg">
      <div className="flex justify-between items-center">
      <div>
      <p>{task.title}</p>
      <p className="text-gray-400 text-sm">{task.date}</p>
      </div>
<p className={`${statusColors[task.status.toLowerCase()]} py-2 px-4 rounded-full text-sm`}>{task.status}</p>

    </div>
    </div>
  ))}
</div>
</div>


<div className="mt-10 bg-white p-5 shadow-md rounded-lg lg:w-[50%] lg:h-[300px]">
  <h1>Progress by Category</h1>
  <div className="mt-5 flex flex-col gap-5">
{categories.map((category, index) => (
  <div key={index} className="flex flex-col gap-1">
    <div className="flex justify-between">
      <p className="font-bold">{category.title}</p>
      <p className="text-gray-400 text-sm">{category.completed}/{category.total} completed</p>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className={`${category.line} h-2 rounded-full`} 
        style={{ width: `${(category.completed / category.total) * 100}%` }}>
      </div>
    </div>
  </div>
))}

</div>


</div>
</div>
</div>
  )
}

export default Page
