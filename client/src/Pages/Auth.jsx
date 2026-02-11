import React, { useState } from 'react'

const Auth = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const [state,setState] = useState("login")
  return (
    <div className='bg-black flex flex-col inset-0 justify-center items-center fixed'>
        <form  onSubmit={handleSubmit} className='p-10 bg-white shadow-2xl rounded-md flex flex-col space-y-4'>
            {state  === "register" && <input type="text" name='name' placeholder='name' className='bg-gray-100 px-2 py-1 rounded '/>}
            <input type="email" name='email' placeholder='email' className='bg-gray-100 px-2 py-1 rounded '/>
            <input type="password" name='password' placeholder='password' className='bg-gray-100 px-2 py-1 rounded '/>
            <input type="submit" className='bg-blue-600 px-2 py-1 rounded w-full text-white' value={"submit"}/>
            <div className='flex'>
                <span>{state === "login" ? 
                "dont have an account ? "
                : 
                "have an account ? "
            }</span>
            <button onClick={()=>{state === "login" ? 
                setState("register")
                : 
                setState("login")}}>
                {
                state === "login" ? 
                "Register"
                : 
                "Login"
            }
            </button>
            </div>
        </form>
    </div>
  )
}

export default Auth