import 'bootstrap/dist/css/bootstrap.min.css'
// import { useContext } from 'react';
import AddExpenseForm from './component/AddExpenseForm';
import Budget from './component/Budget';
import ExpenseList from './component/ExpenseList';
import ExpenseTotal from './component/ExpenseTotal';
import Remaining from './component/Remaining';
import AppProvider from './Context/AppContext';
// import { AppContext } from './Context/AppContext';

function App() {
  // const {expenses} = useContext(AppContext)
  return (
    <AppProvider>
      <div className='container'>
        <h1 className="mt-3">
          My Budget Planner
        </h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>

        <h3 className="mt-3">
          Expenses
        </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">
          Add Expenses
        </h3>
        <div className="mt-3">
          <AddExpenseForm />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
