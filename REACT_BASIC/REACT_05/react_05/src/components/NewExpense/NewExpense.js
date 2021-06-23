import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => { // Due to ExpenseForm props is a connection to ExpenseForm datas
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { // Datas function
      ...enteredExpenseData, // Fields to be completed
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  // Sending datas due to access to props from ExpenseForm
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/*"onSaveExpenseData" - it is a casual name*/}
        </div>
    );
};

export default NewExpense;