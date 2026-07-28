class BankAccount {
    #hashPrivate: string;
    constructor(
        private balance: number,
        readonly accountNumber: number,
        public readonly owner: string
    ) {
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.#hashPrivate = "privateKey456";
    }
    protected transfer(amount: number) {
        this.balance += amount;
    }
    getBalance() {
        console.log(this.balance);
        console.log(this.#hashPrivate, "PIN CODE");
    }
}
class SavingsAccount extends BankAccount {
    constructor(
        balance: number,
        readonly accountNumber: number,
        public readonly owner: string
    ) {
        super(balance, accountNumber, owner);
    }
    transferAmount(amount: number): void {
        this.transfer(amount);
    }
    getBalanceAmount(): void {
        this.getBalance();
    }
}
const acc = new SavingsAccount(10000, 3252135235, "Max");
acc.transferAmount(5000);
acc.getBalanceAmount();
