import React, { useReducer } from "react";
import { createContext } from "react";

const InitialState = {
    budget:2000,
    expenses:[
    {id:1,task:"Laundry",cost:300},
    {id:2,task:"Club",cost:200},
    {id:3,task:"Booze",cost:500}
    ]
}

const AppReducer =(state,action)=>{
    switch(action.type) {

        case('Add_Expense'):
            return {
                ...state,
                expenses:[...state.expenses,action.payload]
            }
        case('Edit_Budget'):
            return {
                ...state,
                budget:action.payload
                
            }
        case('REMOVE'):
        console.log(action.payload)
            let update = state.expenses.filter((user)=>user.id !== action.payload)
            return {
                ...state,
                expenses:update
            }
        default:
            return state
    }


}


export const AppContext = createContext()

const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(AppReducer,InitialState)
    return(
        <AppContext.Provider value={{
            budget:state.budget,
            expenses:state.expenses,
            dispatch
            }}>
            {children}

        </AppContext.Provider>
    )

}
export default AppProvider