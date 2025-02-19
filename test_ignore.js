// function calculateBalance(transactions, accountHolder) {
//   let initialBalance = 0;
//   transactions.forEach((transaction) => {
//     if (transaction.accountHolder === accountHolder) {
//       initialBalance += transaction.amount;
//     }
//   });
//   return initialBalance;
// }

// function calculateBalance(transactions, accountHolder) {
//   let balance = 0;
//   transactions.forEach((transaction) => {
//     if (transactions.accountHolder === accountHolder) {
//       balance += transaction.amount;
//     }
//   });
//   return balance;
// }

// console.log(calculateBalance([{ accountHolder: "John", amount: 100 }], "John"));

/*function largeTransactions(transactions, minAmount) {
  let larger = [];
  transactions.forEach((transaction) => {
    if (transaction.amount > minAmount) {
      larger.push(transaction);
    }
  });
  return larger;
}

console.log(largeTransactions([{ accountHolder: "mika", amount: 500 }], 499));*/

function generateTransactionHistory(transactions, accountHolder) {
  let history = [];
  transactions.forEach((transaction) => {
    if (transaction.accountHolder === accountHolder) {
      history.push(transaction);
    }
  });
  return `${accountHolder} deposited ${hisory}`;
}

console.log(
  generateTransactionHistory([{ accountHolder: "John", amount: 100 }], "John")
);
