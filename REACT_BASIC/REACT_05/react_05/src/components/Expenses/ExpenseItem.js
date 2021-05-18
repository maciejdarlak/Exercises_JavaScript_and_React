import React, { useState } from 'react'; // event: use 'useState'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title); // event: the rule is: [present value, value after 'event']

  const clickHandler = () => { 
    setTitle('Updated!'); // event: value after 'event'
    console.log(title); // event: calling 'title' after change
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div> 
      <button onClick={clickHandler}>Change Title</button> {/* event: calling 'clickHandler'*/}
    </Card>
  );
}

export default ExpenseItem;