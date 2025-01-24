import React from 'react'
import { useState,useEffect} from 'react'
export default function Sessionex({setuser}) {
    const[email,setemail]=useState('');
    const [password,setPassword]=useState('');
    useEffect (()=>{

    },[])
    const handelogin=()=>
    {
    sessionStorage.setItem('user',email);
    setuser(email);
    }
  return (
   <>
   {/* Form */}
     <div className='container mt-5'>
        <h3 className='text-center display-2 mb-5'>Login page</h3>
      <form className='from-group '>
      <label className='w-100'> 
       Email:
      <input  className='form-control' value={email} onChange={(e)=>setemail(e.target.value)}/>
      </label>
      <label className='w-100'> 
       Password:
      <input  className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </label>
      <button className='btn btn-primary w-100 mt-3' onClick={handelogin}>
    Click me
      </button>
      </form>
     </div>
   </>
  )
}
