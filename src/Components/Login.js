import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
    <div className=' w-80 m-auto pt-44'>
        <h2 className=' text-2xl text-white py-3' style={{background: '#000033',borderRadius:'50px'}}>User Management System</h2>
        <input type="text" placeholder='Username' className="w-80 mt-10 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
        <input type="text" placeholder='Password' className="w-80 mt-3 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
        <Link to='/profile'>
            <button className='py-2 px-5 text-white m-5' style={{background: '#000033',borderRadius:'50px'}}>Login</button>
        </Link>
    </div>
  )
}

export default Login