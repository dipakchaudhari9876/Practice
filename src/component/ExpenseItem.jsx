import React, { useContext } from 'react'
import "./expense.css"
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../Context/AppContext'
const ExpenseItem = ({id,task,cost}) => {
  const {dispatch} = useContext(AppContext)
  return (
    <li className='list-group-item d-flex justify-content-between align-item-center'>
     {task}
     <div >
      <span className="cost mr-5">Rs {cost}</span>
      <TiDelete onClick={()=>{dispatch(
        {
          type:'REMOVE',
          payload:id
        }
      )
      console.log("its worlking")
      }} size='2em'></TiDelete>
     </div>
     
    </li>
  )
}

export default ExpenseItem