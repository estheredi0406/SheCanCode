//Question3

//a
function calculateBalance(transactions, accountHolder) {
  let balance = 0;
  transactions.forEach((transaction) => {
    if (transactions.accountHolder === accountHolder) {
      balance += transactions.amount;
    }
  });
  return balance;
}

console.log(calculateBalance([{ accountHolder: "John", amount: 100 }], "John"));

//b

function largeTransactions(transactions, minAmount) {
  let large = [];
  transactions.forEach((transaction) => {
    if (transaction.amount > minAmount) {
      large.push(transaction);
    }
  });
  return large;
}

//c

function sortHighestToLowest(transactions) {
  transactions.sort((a, b) => {
    return b.amount - a.amount;
  });
  return transaction;
}

//d
function generateTransactionHistory(transactions, accountHolder) {
  let history = [];
  transactions.forEach((transaction) => {
    if (transaction.accountHolder === accountHolder) {
      history.push(transaction);
    }
  });
  return `${accountHolder} deposited ${history}`;
}

console.log(
  generateTransactionHistory([{ accountHolder: "John", amount: 100 }], "John")
);
