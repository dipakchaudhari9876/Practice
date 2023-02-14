import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../Context/AppContext'

const Remaining = () => {
  // const [remain,setRemain] = useState(0)

  const {budget,expenses} = useContext(AppContext)
  // let temp= 0
  // useEffect(()=>{
    
  //   expenses.map((user)=>{
  //     temp+=parseInt(user.cost)
  //   })
    
  //   setRemain(parseInt(budget)-temp)
  // },[expenses])

  const TotalExpenses = expenses.reduce((total,item)=>{
    return(total=total+parseInt(item.cost))
  },0)


  let alert_Type = TotalExpenses > budget ?'alert-danger':'alert-success'

  return (
    <div className={`alert ${alert_Type}`}>
        <span>Remaining : {budget-TotalExpenses} Rs</span>
    </div>
  )
}

export default Remaining