import React,{useState,useContext} from 'react'
import UserContext from '../context/contextApi'

function Login() {
  const [userName,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const {setUser}=useContext(UserContext)



  const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({userName,password})

  }
  
  return (
    <div>
      <h3 className='text-3xl bg-green-3 border-amber-200'>Login page</h3>
      <input type="text" placeholder='userName' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <br />
      <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
