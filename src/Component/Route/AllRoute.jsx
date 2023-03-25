import React, { useEffect, useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Todo from '../Todo/Todo'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AllRoute = () => {
  const [username,setUserName]=useState('')
  const auth = getAuth();
  useEffect(()=>{
  onAuthStateChanged(auth,user=>{
    if(user){
      setUserName(user.displayName)
    }
    else{
      setUserName('')
      
    }
  })

  },[auth])
  if(username){
   sessionStorage.setItem('username',username)
  }
  return (
    <div>
    <Routes>
        <Route path='/' element ={<Login />} username={username} />
        <Route path='/register' element={<Signup />} />
        <Route path='/todo' element={ <Todo /> } />
    </Routes>
    </div>
  )
}

export default AllRoute