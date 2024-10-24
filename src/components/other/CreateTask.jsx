import React, { useState,useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")

  //array or data 
  const [newtask, setNewTask] = useState({})
  
  const submitHandler = (e)=>{
    e.preventDefault()
   setNewTask({taskTitle,taskDescription,taskDate, category,active:false,newTask:true,completed:false,})
  
     
   data.forEach(function(elem){
    if(asignTo == elem.firstName){
      elem.tasks.push(newtask)
      elem.tasks.newTask = elem.tasks.newTask + 1

    }
   })
   setUserData(data)

                      

   setTaskTitle("")
   setCategory("")
   setAsignTo("")
   setTaskDate("")
   setTaskDescription("")

 
    
  

  }
  // console.log(task)

  return (
    <div className="p-3 bg-[#1c1c1c]  mt-7 rounded">
    <form onSubmit={(e)=>{
      submitHandler (e)

    }}   className="flex w-full flex-wrap items-start justify-between">
        <div className="w-1/2">
        <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input  value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value)
        }}
         className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px ] border-gray-400 mb-4" type="text" placeholder="Make a Task " />
      </div>
        <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
        <input value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)
        }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px ] border-gray-400 mb-4" type="date" />
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5" >Assign To</h3>
        <input value={asignTo}
        onChange={(e)=>{
          setAsignTo(e.target.value)
        }}
        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px ] border-gray-400 mb-4 " type="text" placeholder="employee Name" />
      </div> 
      <div> 
        <h3 className="text-sm text-gray-300 mb-0.5" >Category</h3>
        <input value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px ] border-gray-400 mb-4" type="text" placeholder="design, dev, etc" />
      </div>
        </div>
      
      <div className="w-2/5 flex-col flex items-start ">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea value={taskDescription}
        onChange={(e)=>{
          setTaskDescription(e.target.value)
        }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"  name="" id=""></textarea>
      <button className="bg-emerald-500 py-3 hover:bg-emerald-300 px-5 rounded text-sm mt-4 w-full">Create Task</button>
      </div>
    
    </form>
  </div>  )
}

export default CreateTask