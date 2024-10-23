import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className=' rounded-xl w-[45%] py-6 px-9 bg-red-400 '  >
            <h2 className='text-2xl font-semibold'>
                {data.tasks.newTask}

            </h2>
            <h3 className='text-xl font-medium ' >
                New Task

            </h3>
        </div>

        <div className=' rounded-xl w-[45%] py-6 px-9 bg-blue-400 '  >
            <h2 className='text-2xl font-semibold'>
            {data.tasks.newTask}

            </h2>
            <h3 className='text-xl font-medium' >
                Completed Task

            </h3>
        </div>

        {/* 3rdCard */}
        <div className=' rounded-xl w-[45%] py-6 px-9 bg-green-400 '  >
            <h2 className='text-2xl font-semibold'>
            {data.tasks.completed}

            </h2>
            <h3 className='text-xl font-medium' >
                Accepted Task

            </h3>
        </div>
        {/* 4th-Card */}
        <div className=' rounded-xl w-[45%] py-6 px-9 bg-purple-400 '  >
            <h2 className='text-2xl font-semibold'>
            {data.tasks.failed}

            </h2>
            <h3 className='text-xl font-medium' >
                Failed Task

            </h3>
        </div>

    </div>
  )
}

export default TaskListNumbers