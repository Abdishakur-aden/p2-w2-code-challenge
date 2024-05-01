import React, { useState } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([
    {date: "2024-04-20", description: "testor", category: "test", amount: 100},
     ]);

     const formbar = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    }

     const [search, setSearch] = useState('');

     const filteredTransactions = transactions.filter((transaction) =>
     (transaction.description + transaction.category).toLowerCase().includes(search.toLowerCase()));

     
  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <SearchBar searchbar={setSearch}/>
      <TransactionForm formbar={formbar}/>
      <TransactionTable transactions={filteredTransactions}/>
    </div>
  )
}

export default App;
