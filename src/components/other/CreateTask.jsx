import React, { useState, useContext } from 'react'; 
import { AuthContext } from '../../context/AuthProvider'; // AuthContext ko import kiya
import "../../index.css";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext); // userData ko context se access kiya
  const [taskTitle, setTaskTitle] = useState(''); // Task title ke liye state banayi
  const [taskDescription, setTaskDescription] = useState(''); // Task description ke liye state banayi
  const [taskDate, setTaskDate] = useState(''); // Task date ke liye state banayi
  const [asignTo, setAsignTo] = useState(''); // Assign to employee ke liye state banayi
  const [category, setCategory] = useState(''); // Category ke liye state banayi

  const submitHandler = (e) => { // Submit hone par ye function call hoga
    e.preventDefault(); // Default form submission ko rokne ke liye

    const newTask = { // Naya task object banaya
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // User data ko update karte hain assigned employee ke liye
    const updatedEmployees = userData.employees.map((employee) => {
      if (asignTo === employee.firstName) { // Agar assigned employee ka naam match kare
        employee.tasks.push(newTask); // Naya task us employee ki tasks mein daal diya
        employee.tasks.newTask = (employee.tasks.newTask || 0) + 1; // Naye task ki count increment ki
      }
      return employee; // Employee ko return kiya
    });

    // Updated userData ko set karna
    setUserData({ ...userData, employees: updatedEmployees });

    // Form inputs ko clear karna
    setTaskTitle(''); 
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return ( // Render hone wala JSX
    <div className="p-3 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex w-full flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)} // Input value ko update karna
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a Task" // Placeholder text
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)} // Input value ko update karna
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date" // Input type date
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)} // Input value ko update karna
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee Name" // Placeholder text
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)} // Input value ko update karna
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc" // Placeholder text
            />
          </div>
        </div>

        <div className="w-2/5 flex-col flex items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)} // Input value ko update karna
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-300 px-5 rounded text-sm mt-4 w-full">Create Task</button> {/* Submit button */}
        </div>
      </form>
    </div>
  );
};

export default CreateTask; // Component ko export kiya
