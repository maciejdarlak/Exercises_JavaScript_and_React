import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(''); // empty space - useState('')
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => { // empty space --> filled space
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => { // send button
    event.preventDefault(); // prevents it from being automatically uploaded to the server after clicking the "Submit" button

    const expenseData = { // datas to send
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate) // date will parse that date string and converted into a date object
    };

    props.onSaveExpenseData(expenseData); 
    setEnteredTitle(''); // empty space again after sending
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}> {/* submitHandler function for all bellow */}
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
          type='text' 
          value={enteredTitle} // associated with "console.log(expenseData)"
          onChange={titleChangeHandler} // empty space --> filled space
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount} 
            onChange={amountChangeHandler} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate} 
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;