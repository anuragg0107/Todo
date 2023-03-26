import React, { useState } from 'react'
import "./Signup.css"
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {Input,Box,Heading, useToast} from "@chakra-ui/react";
import Navbar from '../Navbar/Navbar';
import { auth } from '../../firebase';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate()
  const toast=useToast()
  const [email,setEmail]=useState('')
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [submitBtn,setSubmitBtn]=useState(false)
  const handleSubmit=async(e)=>{
   e.preventDefault()
   console.log(email,password)
 setSubmitBtn(true)
   createUserWithEmailAndPassword(auth,email,password)
   .then((res)=>{
    setSubmitBtn(false)
    const user=res.user;
    updateProfile(user,{displayName:username})
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
     
    })
    navigate('/')
    console.log(user);
    console.log(res);
   })
   .catch((err)=>{
    setSubmitBtn(false)
    toast({
      description: err.message
    })
    console.log(`${err.message}`)
   })
}
  return (
    <div>
   <Box mb='10'>
  <Navbar />
   </Box>

    <Heading textAlign={'center'} fontWeight='500'>Please Signup First</Heading>
  <Box className='form-center'>
  <form className='form-data' onSubmit={(e)=>handleSubmit(e)}>
   <Box className='input-field'>
   <label>Name :</label>
  <Input type='text' placeholder='Enter your name' value={username} onChange={(e)=>setUserName(e.target.value)} />
   <label>Email :</label>
  <Input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
  <label>Password:</label>
  <Input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
</Box>
<button disabled={submitBtn} type='submit'  className='login-btn'>Register</button>
   </form>
  </Box>
    </div>
  )
}


export default Signup