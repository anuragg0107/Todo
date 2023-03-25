import { ListItem } from '@chakra-ui/react'
import React from 'react'
import "./Todo.css"
const ListItemData = (props) => {

  return (
    <div className='list-data-item'>
     <img  src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='delete' className='dlt-img' 
     onClick={()=>{
      props.onselect(props.id)
     }} />
      <ListItem>{props.name}</ListItem>
    </div>
  )
}

export default ListItemData