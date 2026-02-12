import React, { useState } from 'react'
import { EyeClosed } from 'lucide-react'
import { UseAuthContext } from '../Context/AuthContext';
const Auth = () => {
const {setUser} = UseAuthContext()

    const handleChange =(e)=>{
        setInputData((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }));
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser(inputData)
    }
    const [state,setState] = useState("login");
    const [inputData,setInputData] = useState("")
    const [visible,setVisible] = useState(false);
  return (
    <div className='bg-black/70 flex flex-col inset-0 justify-center items-center fixed'>
        <form  onSubmit={handleSubmit} className='p-10 bg-white shadow-2xl rounded-md flex flex-col space-y-4'>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>{state === "login" ? "Login" : "Register"}</h1>
            {state  === "register" && <input value={inputData?.name?inputData.name : ""} onChange={handleChange} type="text" name='name' placeholder='name' className='bg-gray-100 px-2 py-1 rounded '/>}
            <input value={inputData?.email?inputData.email: ""} onChange={handleChange} type="email" name='email' placeholder='email' className='bg-gray-100 px-2 py-1 rounded '/>
            <div className='relative'>
            <input value={inputData?.password?inputData.password : ""} onChange={handleChange} type={visible ? "text" : "password"} name='password' placeholder='password' className='w-full bg-gray-100 px-2 py-1 rounded '/>
            <button type='button' onClick={()=>setVisible(!visible)} className='absolute right-2 top-1'><EyeClosed/></button>
            </div>
            <input type='submit' className='bg-blue-600 px-2 py-1 rounded w-full text-white' value={state === "login" ? "Login" : "Register"}/>
            <div className='flex gap-4'>
                <span>{state === "login" ? 
                "dont have an account ? "
                : 
                "have an account ? "
            }</span>
            <button type='button' className='underline font-medium text-blue-600' onClick={()=>{setInputData({}) ; state === "login" ? 
                setState("register")
                : 
                setState("login");}}>
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