import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = () => {
    return <div className='new-expense'>
        <ExpenseForm/> {/* A form */}
    </div>
};

export default NewExpense;