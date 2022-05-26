import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  function onclick(){
    return (
        <>
          {name === process.env.REACT_APP_USERNAME & psswrd=== process.env.REACT_APP_PASSWORD ? 
          navigate("/profile") : alert("Wrong Credentials")}
        </>
    )
  }
  const [name,setName] = useState('');
  const [psswrd, setPsswrd] = useState('');
  return (
    <div className=' w-80 m-auto pt-44'>
        <h2 className=' text-2xl text-white py-3' style={{background: '#000033',borderRadius:'50px'}}>User Management System</h2>
        <input value={name} onInput={e => setName(e.target.value)} type="text" placeholder='Username' className="w-80 mt-10 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
        <input value={psswrd} onInput={e => setPsswrd(e.target.value)} type="text" placeholder='Password' className="w-80 mt-3 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
        
            <button onClick={onclick} className='py-2 px-5 text-white m-5' style={{background: '#000033',borderRadius:'50px'}}>Login</button>
        
    </div>
  )
}

export default Login