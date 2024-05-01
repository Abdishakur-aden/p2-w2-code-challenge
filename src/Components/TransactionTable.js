import React from "react";

function TransactionTable ({transactions}) {
    return (
    <table className="table">
        <thead>
            <tr>
                <th className="table-header">Date</th>
                <th className="table-header">Description</th>
                <th className="table-header">Category</th>
                <th className="table-header">Amount</th>
            </tr>
        </thead> 
        <tbody>
            {transactions.map((transaction, index) => (
                <tr key={index}>
                    <td className="table-data">{transaction.date}</td>
                    <td className="table-data">{transaction.description}</td>
                    <td className="table-data">{transaction.category}</td>
                    <td className="table-data">{transaction.amount}</td>
                </tr>
            ))}
        </tbody> 
    </table>
    )
}

export default TransactionTable 