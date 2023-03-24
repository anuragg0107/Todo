import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { auth } from '../../firebase'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import Signup from '../Signup/Signup'
import Todo from '../Todo/Todo'

const AllRoute = () => {
  const [username,setUserName]=useState('')
  
  useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if(user){
      setUserName(user.displayName)
    }
    else{
      setUserName('')
    }
    console.log(user)
  })
  },[])
  return (
    <div>
    <Routes>
        <Route path='/' element={<Navbar name={username} />} />
        <Route path='/signin' element ={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/todo' element={<Todo />} />
    </Routes>
    </div>
  )
}

export default AllRoute