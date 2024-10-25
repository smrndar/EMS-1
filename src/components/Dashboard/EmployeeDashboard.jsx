import React from 'react'; // React ko import kiya
import Header from '../other/Header'; // Header component ko import kiya
import TaskListNumbers from '../other/TaskListNumbers'; // TaskListNumbers component ko import kiya
import TaskList from '../Tasklist/TaskList'; // TaskList component ko import kiya

const EmployeeDashboard = (props) => { // EmployeeDashboard component bana rahe hain
  return ( // Render hone wala JSX
    <div className='p-10 bg-[#1c1c1c] h-screen'> {/* Dashboard ka layout */}
      <Header changeUser={props.changeUser} data={props.data} /> {/* Header ko render kiya */}
      <TaskListNumbers data={props.data} /> {/* Task list numbers ko render kiya */}
      <TaskList data={props.data} /> {/* Task list ko render kiya */}
    </div>
  );
}

export default EmployeeDashboard; // Component ko export kiya
