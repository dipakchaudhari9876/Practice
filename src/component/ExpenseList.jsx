import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../Context/AppContext'

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    // const expense = [
    //     { id: 1, task: "Shopping", cost: 300 },
    //     { id: 2, task: "Petrol", cost: 100 },
    //     { id: 3, task: "Holiday", cost: 100 },
    //     { id: 4, task: "Transport", cost: 300 },
    //     { id: 5, task: "Food", cost: 200 },
    // ]
    return (
        <ul className='list-group'>
            {expenses.map((exp) => {
                return (
                    <ExpenseItem key={exp.id} {...exp} />
                )
            })}
        </ul>
    )
}

export default ExpenseList