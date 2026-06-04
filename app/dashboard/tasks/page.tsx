'use client'
import  { useState } from 'react'
import {priorities,statuses,categories} from "./Tasks"

const Page = () => {

const [isOpen , setIsOpen]=useState(false)



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
  <input type="text" placeholder='Enter task title' className='outline-0 w-full border border-gray-300 p-2 rounded-lg hover:border-blue-500'/>

<p>Description</p>
<textarea placeholder='Enter task description' className='outline-0 border w-full border-gray-300 p-2 rounded-lg hover:border-blue-500'/>

</div>

</div>


<div className='mt-10 grid grid-cols-2 gap-4'>
  <div>
    {priorities.map((priority,index)=>(
      <div key={index}>
        <p>{priority.title}</p>
  <select className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'>

<option value='low'>{priority.low}</option>
<option value='medium'>{priority.medium}</option>
<option value='high'>{priority.high}</option>
  </select>

      </div>
    ))}
  </div>

  <div>
    {statuses.map((status,index)=>(
      <div key={index}>
<p>{status.title}</p>
  <select className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'>
<option value="low">{status.low}</option>
<option value="medium">{status.medium}</option>
<option value="high">{status.high}</option>
  </select>

      </div>
    ))}
  </div>



  <div>

{categories.map((category,index)=>(
  <div key={index}>
<p>{category.title}</p>
  <select className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'>
    <option value="low">{category.Work}</option>
    <option value="medium">{category.Personal}</option>
    <option value="medium1">{category.Health}</option>
    <option value="high">{category.Finance}</option>
    <option value="Urgent">{category.Urgent}</option>
</select>
  </div>
))}
</div>

  <div>
  <p>Due Date</p>
  <input type="date" className='outline-0 border border-gray-300 p-2 rounded-lg hover:border-blue-500'/>
  </div>
</div>

<div className='flex flex-col  mt-10 gap-2'>
  <button onClick={()=>setIsOpen(false)} className='border border-gray-300 p-2 font-semibold  rounded-lg'>Cancel</button>
  <button className='bg-blue-500 p-2 font-semibold rounded-lg text-white'>Add Task</button>
</div>





</div>
</div>
)}


    </div>


    </div>
  )
}

export default Page
