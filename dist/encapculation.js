"use strict";
class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance");
        }
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
}
// Usage
const account = new BankAccount("1234567890");
account.deposit(1000);
console.log(account.getBalance()); // Output: 1000
account.withdraw(500);
console.log(account.getBalance()); // Output: 500
console.log(account.getAccountNumber()); // Output: 1234567890
