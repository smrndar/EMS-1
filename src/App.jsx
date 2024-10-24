import React, { useContext, useState } from "react";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
const userData = JSON.parse(loggedInUser) 
setUser(userData.role)
setloggedInUserData(userData.data)
}

  },[])
//complete above useEffect
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loogedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  // console.log(authData.employees);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log(user);
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee){
        setUser("employee");
        setloggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee",data:employee })
        );
      }
    
    } else {
      alert("Invalid Email and Password");
    }
  };

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()

  // },)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser}  /> : (user == "employee"? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData} /> : null )}
      {/* <Login/> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      {/* <AuthContext />
   <TaskContext /> */}
    </>
  );
};

export default App;
