import React, { useState } from 'react'

const Login = ({handleLogin}) => {
//Two way binding
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const submitHandler = (e)=>{
  e.preventDefault()
  handleLogin(email,password)
  console.log("Email is", email);
  console.log("Password is", password);

  setEmail("")
  setPassword("")

  

}



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-600 p-20  border-x-emerald-400'>
      <form
      onSubmit={(e)=>{
       submitHandler(e)
      }}
       className=' flex flex-col items-center justify-center'> 
        
        <input 
        value={email}
        onChange={(e)=>{
        setEmail(e.target.value)
        }}
        
        required  className=' outline-none bg-transparent  border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder-gray-400' type="email" placeholder='Enter your email' /> 

      <input 
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)

      }}
      
      required className=' outline-none bg-transparent  border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-4 placeholder-gray-400'  type="password" placeholder='Enter password' />
      <button className='text-white  mt-5 outline-none border-none  bg-emerald-600 rounded-full text-xl py-4 px-4 placeholder-violet-100 w-72'   >Log in</button>
      
      </form>

      </div>
    </div>
  )
}

export default Login