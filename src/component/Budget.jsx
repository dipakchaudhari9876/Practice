import React, { useContext, useState } from 'react'

import { AppContext } from '../Context/AppContext'
import "./budget.css"



const Budget = () => {
  const { budget,dispatch } = useContext(AppContext)
  const [onEdit, setOnEdit] = useState(true)
  const [editValue, setEditValue] = useState("")

  const onEditHandler = () => {
    setEditValue(budget)
    setOnEdit(!onEdit)
    if(onEdit === false){
      dispatch({
        type:"Edit_Budget",
        payload:editValue
      })
      setEditValue("")

    }
  }
  return (
    <div className="alert alert-secondary budget">
      {onEdit && <span>Budget: {budget} Rs</span>}
      {!onEdit && <input type="number"
        className="form-control"
        onChange={(e) => {
          setEditValue(e.target.value)
        }}
        value={editValue}
      />}
      {onEdit && <button className='butn blue' onClick={onEditHandler}>Edit</button>}
      {!onEdit && <button className='butn green' onClick={onEditHandler}>Save</button>}

    </div>

  )
}

export default Budget