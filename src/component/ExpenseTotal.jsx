import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../Context/AppContext'

const ExpenseTotal = () => {

  const {expenses} = useContext(AppContext)
  // const [spent,setSpent] = useState(0)

  // useEffect(()=>{
  //   let temp = 0
  //   expenses.map((user)=>{
  //     temp+=parseInt(user.cost)
  //   })
  //   setSpent(temp)
    
  // },[expenses])

  let TotalExpenses = expenses.reduce((total,item)=>{
    return(total = total+parseInt(item.cost))
  },0)

  return (
    <div className="alert alert-primary">
        <span>Spent So Far : {TotalExpenses} Rs</span>
    </div>
  )
}

export default ExpenseTotal