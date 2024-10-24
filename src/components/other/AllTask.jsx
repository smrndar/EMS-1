import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  console.log();
  return (
    <div className="bg-[#1c1c1c] p-4 mt-5 rounded  ">
      <div className="bg-red-400   mb-2  py-2 px-4 flex justify-between rounded ">
        <h2 className=" text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">NEW Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>

     <div className=" overflow-auto">
     {userData.employees.map(function (elem,idx) {
     
     return <div key={idx} className="border-2  mb-2  py-2 px-4 flex justify-between rounded ">
          <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
          <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.tasks[0].newTask}</h3>
          <h5 className="text-lg font-medium w-1/5 text-purple-700">{elem.tasks[0].active}</h5>
          <h5 className="text-lg font-medium w-1/5 text-white">{elem.tasks[0].completed}</h5>
          <h5 className="text-lg font-medium w-1/5 text-yellow-300">{elem.tasks[0].failed}</h5>
        </div>;
      })}
     </div>
    </div>
  );
};

export default AllTask;
