import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

// const  [username, setUsername] = useState('')
// if(!data){
//   setUsername("Admin")
// }else{
//   setUsername(data.firstName)
// }
const logOutUser = ()=>{
  localStorage.setItem('loggeInUser',"")
  //For reloa window
  // window.location.reload()
  props.changeUser("")

}
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'> username 🖐️  </span> </h1>
    <button onClick={logOutUser} className='bg-red-500 font-medium text-lg text-white px-5 py-2 rounded-sm'>Log Out</button>
</div>
  )
}

export default Header