"use strict";
class BankAccount {
    balance;
    accountNumber;
    owner;
    #hashPrivate;
    constructor(balance, accountNumber, owner) {
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.#hashPrivate = "privateKey456";
    }
    transfer(amount) {
        this.balance += amount;
    }
    getBalance() {
        console.log(this.balance);
        console.log(this.#hashPrivate, "PIN CODE");
    }
}
class SavingsAccount extends BankAccount {
    accountNumber;
    owner;
    constructor(balance, accountNumber, owner) {
        super(balance, accountNumber, owner);
        this.accountNumber = accountNumber;
        this.owner = owner;
    }
    transferAmount(amount) {
        this.transfer(amount);
    }
    getBalanceAmount() {
        this.getBalance();
    }
}
const acc = new SavingsAccount(10000, 3252135235, "Max");
acc.transferAmount(5000);
acc.getBalanceAmount();
