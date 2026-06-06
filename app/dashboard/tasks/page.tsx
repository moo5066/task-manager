'use client'
import  { useState,useEffect } from 'react'
import {priorities,statuses,categories,Review} from "./Tasks"
import { CiMenuKebab } from "react-icons/ci";

const Page = () => {

const [isOpen , setIsOpen]=useState(false)
const [tasks , setTasks]=useState<{ title: string;discription:string;priority:string;status:string;category:string;dueDate:string }[]>([])
const [title ,setTitle]=useState("")
const [discription ,setDescription]=useState("")
const [priority,setPriority]=useState("low")
const [status ,setStatus]=useState("To Do")
const [category ,setCategory]=useState("Work")
const [dueDate ,setDueDate]=useState("")
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










  return (
    <div>
    <div className='flex justify-between items-center'>
<div>
  <h1 className='text-3xl font-bold'>Tasks</h1>
  <p className='text-gray-400'>Manage and organize your tasks.</p>
</div>

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

<div>
  {Review.map((rev,index)=>(
    <div key={index}>

    </div>
  ))}
</div>








    </div>


    </div>
  )
}

export default Page
