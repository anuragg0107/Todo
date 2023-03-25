import { Box, Heading, OrderedList } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import "./Todo.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import ListItemData from './ListItemData';

const Todo = () => {
const [data,setData]=useState('')
const [items,setItems]=useState([])

const handleSubmit=()=>{
   setItems((prev)=>{
    return [...prev,data]
   })
   setData('')
}

const deleteItem=(id)=>{
  setItems((prev)=>{
    return prev.filter((arrayEle,index)=>{
      return index !== id;
    })
  })
}

const navigate=useNavigate()
  const auth = getAuth();
  useEffect(()=>{
  onAuthStateChanged(auth,user=>{
    if(!user){
       navigate('/')
    }
  })

  },[auth,navigate])
  return (
    <div>
    <Box>
      <Navbar />
    </Box>
    <Heading textAlign={'center'} fontWeight='50'>Todo Data</Heading>
<Box className='center-div'>
 <Box className='center-data'>
 <input type='text' placeholder='Add a data' className='input-data' value={data} onChange={(e)=>setData(e.target.value)} />
   <button onClick={handleSubmit} className='plus_button'>+</button>
  <OrderedList>

    {/* <ListItem>{data}</ListItem> */}
  {
    items.map((el,index)=>{
      return (
         <ListItemData 
         name={el}
         key={index}
         id={index} 
          onselect={deleteItem}
         />
      )
    })
  }
  </OrderedList>
 </Box>
</Box>
    
    </div>
  )
}

export default Todo