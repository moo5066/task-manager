
export const cards =[
    {
    icon:'tasks',
    color:'blue',
    title:"Total Tasks",
    total: "6"

  },
  {
    icon:'check',
      color:"green",
    title:"Completed Tasks",
    total: "2"

  },
  {
    icon:'time',
      color:"yellow",
    title:"In Progress Tasks",
    total: "1"

  },
  {
    icon:'danger',
      color:"red",
    title:"Overdue",
    total: "2"

  },
]

export const tasks=[
    {
    title:"Team standup meeting",
    date:"Completed . Due May 31",
    status:"low",
  },
  {
    title:"Gym workout",
    date:"To Do · Due Jun 1",
    status:"medium",
  },
  {
    title:"Review design mockups",
    date:"To Do · Due Jun 5",
    status:"medium",
  },
  {
    title:"Call mom",
    date:"Completed ·  Due May 29",
    status:"low",
  },
  {
    title:"Complete project proposal",
    date:"In Progress · Due Jun 2",
    status:"high",
  },
]

export const categories = [
  {
    title:"Work",
    line:"bg-blue-500",
    completed:1 ,
    total:3,
    
  },
  {
    title:"Personal",
        line:"bg-blue-500",

    completed:1 ,
    total:1

    
  },
  {
    title:"Health",
        line:"bg-blue-500",

    completed:0 ,
total:1,
    
  },
  {
    title:"Finance",
        line:"bg-blue-500",

    completed:0 ,
    total:1,
    
  },
]

export const dashboardList = [
{ 
  name:"Dashboard",
   icon:"dashboard" ,
   href:"/dashboard"
  },

 { 
  name:"Tasks", 
  icon:"tasks",
   href:"/dashboard/tasks"
  },

 { name:"Categories",
   icon:"categories",
   href:"/dashboard/categories"
  },
{ name:"Settings",
   icon:"settings",
   href:"/dashboard/settings"
  },
]




