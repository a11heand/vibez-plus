// Filename: SophisticatedCode.js

/*
This code demonstrates a complex banking system that manages multiple accounts,
performs various transactions, and generates detailed reports. It showcases 
advanced JavaScript concepts like prototype inheritance, closures, async/await, 
and functional programming techniques.

Please note that this code is a simplified representation for demonstrative purposes
only and may not represent a real-world banking system accurately.

Author: John Doe
Date: October 1, 2022
*/

// Define the Account class
class Account {
  constructor(accountNumber, accountName, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.balance = initialBalance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient funds.");
    }
  }
  
  getBalance() {
    return this.balance;
  }
}

// Define the Bank class
class Bank {
  constructor() {
    this.accounts = [];
  }
  
  createAccount(accountNumber, accountName, initialBalance) {
    const account = new Account(accountNumber, accountName, initialBalance);
    this.accounts.push(account);
    return account;
  }
  
  findAccountByNumber(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }
  
  depositToAccount(accountNumber, amount) {
    const account = this.findAccountByNumber(accountNumber);
    if (account) {
      account.deposit(amount);
    } else {
      throw new Error("Account not found.");
    }
  }
  
  withdrawFromAccount(accountNumber, amount) {
    const account = this.findAccountByNumber(accountNumber);
    if (account) {
      account.withdraw(amount);
    } else {
      throw new Error("Account not found.");
    }
  }
  
  async generateReport() {
    // Simulating an asynchronous operation to fetch additional account data from a server
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let totalBalance = 0;
    let report = "Bank Report:\n";
    
    this.accounts.forEach(account => {
      report += `Account Name: ${account.accountName}\n`;
      report += `Account Number: ${account.accountNumber}\n`;
      report += `Balance: $${account.getBalance().toFixed(2)}\n\n`;
      totalBalance += account.getBalance();
    });
    
    report += `Total Bank Balance: $${totalBalance.toFixed(2)}`;
    
    return report;
  }
}

// Create a new bank instance
const bank = new Bank();

// Create some bank accounts
const account1 = bank.createAccount(123456789, "John Doe", 5000);
const account2 = bank.createAccount(987654321, "Jane Smith", 10000);

// Perform transactions
bank.depositToAccount(123456789, 2000);
bank.withdrawFromAccount(987654321, 500);

// Print the current balances
console.log(`Account 1 Balance: $${account1.getBalance().toFixed(2)}`);
console.log(`Account 2 Balance: $${account2.getBalance().toFixed(2)}`);

// Generate and print the bank report
bank.generateReport()
  .then(report => console.log(report))
  .catch(error => console.error(error));

// Output:
// Account 1 Balance: $7000.00
// Account 2 Balance: $9500.00
// Bank Report:
// Account Name: John Doe
// Account Number: 123456789
// Balance: $7000.00
//
// Account Name: Jane Smith
// Account Number: 987654321
// Balance: $9500.00
//
// Total Bank Balance: $16500.00