import React from 'react'; // React ko import kiya
import '../../index.css';

const Header = (props) => { // Header component bana rahe hain
  const logOutUser = () => { // Logout function
    localStorage.setItem('loggedInUser', ""); // Logged in user ko local storage mein set kiya
    props.changeUser(""); // User ko change karte hain
  }

  return ( // Render hone wala JSX
    <div className='flex items-end justify-between'> {/* Layout for header */}
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 🖐️</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 font-medium text-lg text-white px-5 py-2 rounded-sm'>Log Out</button> {/* Logout button */}
    </div>
  );
}

export default Header; // Component ko export kiya
