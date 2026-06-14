'use client'

import { useState } from "react";
import { MdToggleOn, MdToggleOff} from "react-icons/md";
const page = () => {

const sitt=[
  {
    title:'Notifications',
    description:'Configure how you receive notifications.',
  },
   {
    title:'Email Notifications',
    description:'Configure how you receive notifications.',
    icon:<MdToggleOn size={40}/>

  },
  {
    title:'Push Notifications',
    description:'Receive push notifications for due tasks.',
icon:<MdToggleOn size={40}/>

  },
 
  {
    title:'Weekly Summary',
    description:'Get a weekly report of your productivity.',
    icon:<MdToggleOff size={40}/>

  }
]


const [settings, setSettings] = useState([
  { title: 'Email Notifications', description: 'Configure how you receive notifications.', enabled: false },
  { title: 'Push Notifications', description: 'Receive push notifications for due tasks.', enabled: false },
  { title: 'Weekly Summary', description: 'Get a weekly report of your productivity.', enabled: false },
])


const toggle = (index: number) => {
  setSettings(prev =>
    prev.map((item, i) => i === index ? { ...item, enabled: !item.enabled } : item)
  )
}



  return (
    <div className='m-5'>
      <div>
        <h1 className='text-2xl font-bold'>Settings</h1>
        <p className='text-gray-500'>Manage your account and preferences.</p>
      </div>


<div className='flex flex-col gap-5 mt-10 bg-white p-5 border border-gray-200 shadow-lg rounded-2xl'>
  <div>
    <h1 className='text-lg font-bold'>Profile</h1>
    <p className='text-gray-500 text-sm' >Update your personal information.</p>
  </div>

<div>
  <p>Name</p>
  <input type="text" placeholder='Mohamed abdulakdir' className='border p-1 border-gray-300 w-full rounded-lg '/>
  <p>Email</p>
  <input type="text" placeholder='moo@example.com'className='border p-1 border-gray-300 w-full rounded-lg '/>
</div>
<button className='bg-blue-500 font-bold text-white p-2 rounded-lg w-fit hover:bg-blue-500'>Save Changes</button>


</div>


<div className='mt-10 bg-white shadow-lg rounded-2xl'>
  {settings.map((item, index) => (
    <div key={index} className='flex flex-col p-5 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-bold text-md'>{item.title}</p>
          <p className='text-gray-500 text-sm'>{item.description}</p>
        </div>
        <button onClick={() => toggle(index)} className='text-blue-500'>
          {item.enabled ? <MdToggleOn size={40}/> : <MdToggleOff size={40} className='text-gray-400'/>}
        </button>
      </div>
    </div>
  ))}
</div>


  <div className='bg-white border border-gray-100 shadow-sm rounded-2xl p-5 space-y-5 mt-10'>
        <div>
          <h1 className='text-lg font-bold text-red-600'>Danger Zone</h1>
          <p className='text-gray-500 text-xs'>Irreversible and destructive actions.</p>
        </div>

        <div className='flex flex-col gap-3 pt-2 border-t border-gray-50'>
          <p className='text-gray-500 text-xs'>Permanently delete all your tasks.</p>
          <button className='bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-2 px-4 rounded-xl  text-center text-sm w-fit justify-self-end'>
            Delete All
          </button>
        </div>
      </div>





    </div>
  )
}

export default page
