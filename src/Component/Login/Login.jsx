import React, { useState } from 'react'
import "./Login.css"
import { signInWithEmailAndPassword} from 'firebase/auth';
import {Input,Box,Heading,useToast} from "@chakra-ui/react";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const toast=useToast()
  const navigate=useNavigate()
  const [submitBtn,setSubmitBtn]=useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
  setSubmitBtn(true)
   signInWithEmailAndPassword(auth,email,password)
    .then((res)=>{
     setSubmitBtn(false)
     const user=res.user
     toast({
       title: 'Login Successful.',
       description: "Welcome to todo page",
      
     })
     navigate('/todo')
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

    <Heading textAlign={'center'} fontWeight='500'>Please Login </Heading>
  <Box className='form-center'>
  <form className='form-data' onSubmit={(e)=>handleSubmit(e)}>
   <Box className='input-field'>
   <label>Email :</label>
  <Input type='email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
  <label>Password:</label>
  <Input type='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
</Box>
<button disabled={submitBtn} type='submit'  className='login-btn'>Login</button>
   </form>
  </Box>
    </div>
  )
}

export default Login