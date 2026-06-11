'use client'
import  { useState,useEffect } from 'react'
import {priorities,statuses,categories,Review,Review2,Review3,Review4,Review5,menu} from "./Tasks"
import { CiMenuKebab,CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Page = () => {

const [isOpen , setIsOpen]=useState(false)
const [tasks , setTasks]=useState<{ title: string;discription:string;priority:string;status:string;category:string;dueDate:string }[]>([])
const [title ,setTitle]=useState("")
const [discription ,setDescription]=useState("")
const [priority,setPriority]=useState("low")
const [status ,setStatus]=useState("To Do")
const [category ,setCategory]=useState("Work")
const [dueDate ,setDueDate]=useState("")
// Replace: const [opnMenu, setOpenMenu] = useState<number | null>(null)
// With this:
const [opnMenu, setOpenMenu] = useState<{ section: string; index: number } | null>(null);
function AddTask(){
  const newTask={
    title:title
  };
  setTasks([...tasks , {
    
    title:title,
    discription:discription,
  priority:priority,
  status:status,
  category:category,
  dueDate:dueDate

  
  }])
  setTitle("")
  setDescription("")
  setPriority("low")
  setStatus("To Do")
  setCategory("Work")
  setDueDate("")
  setIsOpen(false)
  
}


function deleteTask(indexToDelete:number){
  setTasks(
    tasks.filter((_,index)=>index!==indexToDelete)
  )
}



const Icon:Record<string, React.ReactNode> =
  {
  menu:<CiMenuKebab size={20}/>
}






  return (
    <div>
    <div className='flex flex-row justify-between items-center w-full'>
<div>
  <h1 className='text-3xl font-bold'>Tasks</h1>
  <p className='text-gray-400'>Manage and organize your tasks.</p>
</div>
<div>
<button
onClick={()=>setIsOpen(true)}
 className='flex flex-row gap-2 bg-blue-500 text-white p-2 rounded-lg font-bold'>
<span>+</span>
<p>Add Task</p>
</button>

{isOpen && (


<div className='fixed inset-0 flex justify-center bg-black/50  items-center z-50 '>
<div className='bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative'>

<button onClick={()=>setIsOpen(false)}
  className='absolute top-4 right-4 text-gray-500 hover:text-black'
  >
x
</button>


<div>
  <div className='flex flex-col justify-center items-center'>
  <h1 className='font-bold text-xl'>Add New Task</h1>
  <p className='text-gray-500'>Create a new task to add to your list.</p>
</div>


<div>
  <p>Title</p>
<input
  type="text"
  placeholder="Enter task title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="outline-0 w-full border border-gray-300 p-2 rounded-lg"
/>
<p>Description</p>
<textarea placeholder='Enter task description' onChange={(e)=>setDescription(e.target.value)} className='outline-0 border w-full border-gray-300 p-2 rounded-lg hover:border-blue-500'/>

</div>

</div>


<div className='mt-10 grid grid-cols-2 gap-4'>
  <div>
    {priorities.map((item,index)=>(
      <div key={index}>
        <p>{item.title}</p>
  <select
  value={priority}
  onChange={(e)=>setPriority(e.target.value)}
  className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'>

<option value='low'>{item.low}</option>
<option value='medium'>{item.medium}</option>
<option value='high'>{item.high}</option>
  </select>

      </div>
    ))}
  </div>

  <div>
    {statuses.map((map,index)=>(
      <div key={index}>
<p>{map.title}</p>
  <select 
  value={status}
  onChange={(e)=>setStatus(e.target.value)}
  className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'>
<option value="low">{map.low}</option>
<option value="medium">{map.medium}</option>
<option value="high">{map.high}</option>
  </select>

      </div>
    ))}
  </div>



  <div>

{categories.map((mo,index)=>(
  <div key={index}>
<p>{mo.title}</p>
  <select 
  value={category}
  onChange={(e)=>setCategory(e.target.value)}
  className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'>
    <option value="low">{mo.Work}</option>
    <option value="medium">{mo.Personal}</option>
    <option value="medium1">{mo.Health}</option>
    <option value="high">{mo.Finance}</option>
    <option value="Urgent">{mo.Urgent}</option>
</select>
  </div>
))}
</div>

  <div>
  <p>Due Date</p>
  <input
  value={dueDate}
  onChange={(e)=>setDueDate(e.target.value)}
  type="date" className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'/>
  </div>
</div>

<div className='flex flex-col  mt-10 gap-2'>
  <button onClick={()=>setIsOpen(false)} className='border border-gray-300 p-2 font-semibold  rounded-lg'>Cancel</button>
  <button onClick={AddTask} className='bg-blue-500 p-2 font-semibold rounded-lg text-white'>Add Task</button>
</div>

{tasks.map((task,index)=>(
    <div key={index} className='bg-white p-4 rounded-lg shadow-md border border-gray-100 mt-3'>
      <p className='font-bold'>{task.title}</p>
    <p className='text-gray-500 text-sm'>{task.discription}</p>

    <div className='flex flex-row gap-2 mt-3'>
    <p  className='bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full'>{task.priority}</p>
     <p className='bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full'>{task.status}</p>
     <p className='bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full'>{task.category}</p>
     <p className='bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full'>{task.dueDate}</p>


<button onClick={()=>deleteTask(index)}>
Delete
</button>

    </div>
    </div>





))}


</div>
</div>
)}

    </div>
    </div>
<div className='flex flex-col gap-10 mt-20'>
<div>
  {Review.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
     <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>
<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'Review' && opnMenu?.index === index ? null : { section: 'Review', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'Review' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>
    </div>
  ))}
</div>
<div>
  {Review2.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
      <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>
<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'review2' && opnMenu?.index === index ? null : { section: 'review2', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'review2' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>
    </div>
  ))}
</div>
<div>



  {Review3.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
     <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>
<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'review3' && opnMenu?.index === index ? null : { section: 'review3', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'review3' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>
    </div>
  ))}
</div>
<div>
  {Review4.map((rev,index)=>(
     <div key={index} className='flex justify-between items-center'>
     <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>

<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'review4' && opnMenu?.index === index ? null : { section: 'review4', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'review4' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>

    </div>
  ))}
</div>
<div>
  {Review5.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
      <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>

<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'review5' && opnMenu?.index === index ? null : { section: 'review5', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'review5' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>

    </div>
  ))}
</div>
</div>


    </div>
  )
}

export default Page
