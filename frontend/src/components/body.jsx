import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './sidebar'
import { useSelector } from 'react-redux'
import Navbar from './navvar'

const Body = () => {
  const {user}= useSelector(store=> store.app);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate("/login")

    }
  },[])

  return (
    <>
         <Navbar />
    <div className='flex'>
        
        <Sidebar/>
        <Outlet />
      </div>
    </>
   
          

  
  )
}

export default Body