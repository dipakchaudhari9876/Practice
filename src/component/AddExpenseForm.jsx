import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import {v4 as uuidv4} from 'uuid'

const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext)

    // const [data, setData] = useState({id:"", task: "", cost: "" })

    const [task,settask] = useState("")
    const [cost,setCost] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        // setData({ ...data, id: Date.now() })
        dispatch({
            type:"Add_Expense",
            payload:{id:uuidv4(),task:task,cost:cost } })
        
            settask("")
            setCost("")
        
    }

    return (
        <form action="#" method="post" onSubmit={onSubmitHandler} >
            <div className="row">
                <div className="col-sm mt-3">
                    <label htmlFor="name" className='me-3'>Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        required='required'
                        onChange={(e) => {
                            settask(e.target.value)
                        }}
                        value={task}
                    />
                </div>
                <div className="col-sm mt-3">
                    <label htmlFor="cost" className='me-3'>Cost</label>
                    <input type="number"
                        className="form-control"
                        id="cost"
                        required='required'
                        onChange={(e) => {
                            setCost(e.target.value)
                        }}
                        value={cost}
                    />
                </div>
                <div className="mt-4">
                    <button type="submit" className='btn btn-primary'>Save</button>
                </div>

            </div>
        </form>
    )
}

export default AddExpenseForm