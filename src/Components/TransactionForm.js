import React, { useState } from "react";

function TransactionForm ({formbar}) {
    
    const [date, setDate] = useState();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState();

    function handleSubmit (e) {
        e.preventDefault();
        const newTransaction = {date, description, category, amount};
        formbar(newTransaction);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}/>
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
            <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)}/>
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}/>
            <div>
            <button type="submit">Add Transaction</button>
            </div>
        </form>
    )
}

export default TransactionForm 