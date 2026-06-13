'use client'
import  { useState } from 'react'
import {priorities,statuses,categories,Review,Review2,Review3,Review4,Review5} from "./Tasks"
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

type ReviewItem = {line:string;status:string;description:string;date:string;Icon:string}
type ReviewSection = "Review" | "Review2" | "Review3" | "Review4" | "Review5"

const [reviewList,setReviewList]=useState<ReviewItem[]>(Review || [])
const [review2List,setReview2List]=useState<ReviewItem[]>(Review2 || [])
const [review3List,setReview3List]=useState<ReviewItem[]>(Review3 || [])
const [review4List,setReview4List]=useState<ReviewItem[]>(Review4 || [])
const [review5List,setReview5List]=useState<ReviewItem[]>(Review5 || [])

const [opnMenu, setOpenMenu] = useState<{ section: string; index: number } | null>(null);
const [editingReview, setEditingReview] = useState<{ section: ReviewSection; index: number } | null>(null);

function resetForm() {
  setTitle("")
  setDescription("")
  setPriority("low")
  setStatus("To Do")
  setCategory("Work")
  setDueDate("")
  setEditingReview(null)
}

function AddTask(){
  setTasks([...tasks , {
    
    title:title,
    discription:discription,
  priority:priority,
  status:status,
  category:category,
  dueDate:dueDate

  
  }])
  resetForm()
  setIsOpen(false)
  
}


function deleteTask(indexToDelete:number){
  setTasks(
    tasks.filter((_,index)=>index!==indexToDelete)
  )
}

function deleteRevieewItem (section:ReviewSection,indexDelete:number){
if(section==='Review')setReviewList(reviewList.filter((_,i)=>i!==indexDelete))
  if(section==='Review2')setReview2List(review2List.filter((_,i)=>i!==indexDelete))
    if(section==='Review3')setReview3List(review3List.filter((_,i)=>i!==indexDelete))
      if(section==='Review4')setReview4List(review4List.filter((_,i)=>i!==indexDelete))
        if(section==='Review5')setReview5List(review5List.filter((_,i)=>i!==indexDelete))
      setOpenMenu(null)
}



function editReview(section: ReviewSection, index: number) {
  const updateItem: Partial<ReviewItem> = {
    Icon: "menu",
  };

  if (title.trim()) updateItem.line = title.trim();
  if (discription.trim()) updateItem.description = discription.trim();
  if (status) updateItem.status = status;
  if (dueDate) updateItem.date = dueDate;

  if (section === "Review") {
    const u = [...reviewList];
    u[index] = { ...u[index], ...updateItem };
    setReviewList(u);
  }

  if (section === "Review2") {
    const u = [...review2List];
    u[index] = { ...u[index], ...updateItem };
    setReview2List(u);
  }

  if (section === "Review3") {
    const u = [...review3List];
    u[index] = { ...u[index], ...updateItem };
    setReview3List(u);
  }

  if (section === "Review4") {
    const u = [...review4List];
    u[index] = { ...u[index], ...updateItem };
    setReview4List(u);
  }

  if (section === "Review5") {
    const u = [...review5List];
    u[index] = { ...u[index], ...updateItem };
    setReview5List(u);
  }

  setOpenMenu(null);
  resetForm();
  setIsOpen(false);
}

function startEditReview(section: ReviewSection, index: number, review: ReviewItem) {
  setTitle(review.line)
  setDescription(review.description)
  setStatus(review.status)
  setDueDate(/^\d{4}-\d{2}-\d{2}$/.test(review.date) ? review.date : "")
  setEditingReview({ section, index })
  setOpenMenu(null)
  setIsOpen(true)
}

function handleSubmitTask() {
  if (editingReview) {
    editReview(editingReview.section, editingReview.index)
    return
  }

  AddTask()
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
onClick={()=>{
  resetForm()
  setIsOpen(true)
}}
 className='flex flex-row gap-2 bg-blue-500 text-white p-2 rounded-lg font-bold'>
<span>+</span>
<p>Add Task</p>
</button>

{isOpen && (


<div className='fixed inset-0 flex justify-center bg-black/50  items-center z-50 '>
<div className='bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative'>

<button onClick={()=>{
  resetForm()
  setIsOpen(false)
}}
  className='absolute top-4 right-4 text-gray-500 hover:text-black'
  >
x
</button>


<div>
  <div className='flex flex-col justify-center items-center'>
  <h1 className='font-bold text-xl'>{editingReview ? "Edit Task" : "Add New Task"}</h1>
  <p className='text-gray-500'>{editingReview ? "Update the selected task." : "Create a new task to add to your list."}</p>
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
<textarea placeholder='Enter task description' value={discription} onChange={(e)=>setDescription(e.target.value)} className='outline-0 border w-full border-gray-300 p-2 rounded-lg hover:border-blue-500'/>

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
  <button onClick={()=>{
    resetForm()
    setIsOpen(false)
  }} className='border border-gray-300 p-2 font-semibold  rounded-lg'>Cancel</button>
  <button onClick={handleSubmitTask} className='bg-blue-500 p-2 font-semibold rounded-lg text-white'>
    {editingReview ? "Save Changes" : "Add Task"}
  </button>
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
  {reviewList.map((rev,index)=>(
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
      <button 
      onClick={()=>startEditReview('Review',index,rev)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button 
      onClick={()=>deleteRevieewItem('Review',index)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>
    </div>
  ))}
</div>
<div>
  {review2List.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
      <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>
<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'Review2' && opnMenu?.index === index ? null : { section: 'Review2', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'Review2' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button 
      onClick={()=>startEditReview('Review2',index,rev)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button 
      onClick={()=>deleteRevieewItem('Review2',index)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>
    </div>
  ))}
</div>
<div>



  {review3List.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
     <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>
<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'Review3' && opnMenu?.index === index ? null : { section: 'Review3', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'Review3' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button 
            onClick={()=>startEditReview('Review3',index,rev)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button 
      onClick={()=>deleteRevieewItem('Review3',index)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>
    </div>
  ))}
</div>
<div>
  {review4List.map((rev,index)=>(
     <div key={index} className='flex justify-between items-center'>
     <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>

<div className="relative">
  <button 
    onClick={() => setOpenMenu(opnMenu?.section === 'Review4' && opnMenu?.index === index ? null : { section: 'Review4', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'Review4' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button 
            onClick={()=>startEditReview('Review4',index,rev)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button 
      onClick={()=>deleteRevieewItem('Review4',index)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
        <MdDelete /> Delete
      </button>
    </div>
  )}
</div>

    </div>
  ))}
</div>
<div>
  {review5List.map((rev,index)=>(
    <div key={index} className='flex justify-between items-center'>
      <div>
<p className='text-lg font-semibold'>{rev.line}</p>
<p className='text-gray-500'>{rev.description}</p>
<p className='mt-2 text-red-600'>{rev.date}<span>(Overdue)</span></p>
</div>

<div className="relative">
  <button 
  
    onClick={() => setOpenMenu(opnMenu?.section === 'Review5' && opnMenu?.index === index ? null : { section: 'Review5', index })} 
    className="p-1 hover:bg-gray-100 rounded-full"
  >
    {Icon[rev.Icon]}
  </button>

  {opnMenu?.section === 'Review5' && opnMenu?.index === index && (
    <div className='absolute right-0 top-8 z-50 w-28 bg-white border rounded-lg shadow-lg py-1'>
      <button 
            onClick={()=>startEditReview('Review5',index,rev)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm'>
        <CiEdit /> Edit
      </button>
      <button 
      onClick={()=>deleteRevieewItem('Review5',index)}
      className='flex items-center gap-2 p-2 w-full hover:bg-gray-50 text-sm text-red-600'>
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
