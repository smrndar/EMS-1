import React, { useContext, useState, useEffect } from "react"; // React aur hooks ko import kiya
import Login from "./components/Auth/Login"; // Login component ko import kiya
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"; // EmployeeDashboard ko import kiya
import AdminDashboard from "./components/Dashboard/AdminDashboard"; // AdminDashboard ko import kiya
import { AuthContext } from "./context/AuthProvider"; // AuthContext ko import kiya
import './index.css';


const App = () => { // App component bana rahe hain
  const [user, setUser] = useState(null); // User ke liye state banayi
  const [loggedInUserData, setloggedInUserData] = useState(null); // Logged in user data ke liye state banayi
  const [userData, setUserData] = useContext(AuthContext); // User data ko context se access kiya

  useEffect(() => { // Component mount hone par ye function chalega
    const loggedInUser = localStorage.getItem('loggedInUser'); // Local storage se logged in user ko get kiya
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser); // JSON string ko object mein convert kiya
      setUser(userData.role); // User role ko set kiya
      setloggedInUserData(userData.data); // User data ko set kiya
    }
  }, []); // Dependency array khali rakha

  const handleLogin = (email, password) => { // Login function
    if (email === "admin@me.com" && password === "123") { // Agar admin ke credentials match karein
      setUser("admin"); // User ko admin set kiya
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" })); // Local storage mein admin data set kiya
    } else if (userData) { // Agar user data available ho
      // User data se employee ko find karna
      const employee = userData.employees.find((e) => email === e.email && e.password === password);
      if (employee) { // Agar employee mil gaya
        setUser("employee"); // User ko employee set kiya
        setloggedInUserData(employee); // Employee data ko set kiya
        localStorage.setItem( // Local storage mein employee data set kiya
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else { // Agar email aur password invalid ho
        alert("Invalid Email and Password"); // Alert show karo
      }
    } else {
      alert("Invalid Email and Password"); // Alert show karo agar user data nahi hai
    }
  };

  return ( // Render hone wala JSX
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""} {/* Agar user nahi hai to Login component dikhaiye */}
      {user === "admin" ? ( // Agar user admin hai
        <AdminDashboard changeUser={setUser} /> // AdminDashboard ko render karo
      ) : user === "employee" ? ( // Agar user employee hai
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> // EmployeeDashboard ko render karo aur koch nahe
      ) : null} 
    </>
  );
};

export default App; // Component ko export kiya
