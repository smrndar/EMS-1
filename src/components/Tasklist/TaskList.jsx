import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const TaskList = ({data}) => {
    console.log(data);
    
  return (
    <div  id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10' >
        {/* <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl '>
         <div className='flex justify-between items-center' > 
        <h2 className='bg-red-600 text-sm px-3 py-1 rounded ' >High</h2>
        <h4 className='text-sm'>22-OCt-2024</h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold' >Make a youtube videos</h2>
        <p className='text-sm  mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corrupti iusto recusandae voluptate debitis ullam.
        </p>

        </div> */}
        {data.tasks.map((elem)=>{
            if(elem.active){
                return <AcceptTask />
            }
            if (elem.NewTask) {
                return <NewTask />
                
            }
            if (elem.completed) {
                return <CompleteTask />

                
            }
            if (elem.failed) {
                return <FailedTask />
                
            }
           
        })}
        {/* <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl '>
         <div className='flex justify-between items-center' > 
        <h2 className='bg-red-600 text-sm px-3 py-1 rounded ' >High</h2>
        <h4 className='text-sm'>22-OCt-2024</h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold' >Make a youtube video</h2>
        <p className='text-sm  mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corrupti iusto recusandae voluptate debitis ullam.
        </p>

        </div> */}
       
        
        
       
        
       
    </div>
  )
}

export default TaskList