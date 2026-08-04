/*
Level : Medium

Question : Create a class BankAccount with private fields #balance . Add methids deposit(amount) and withdraw(amount) Should not allow balance to go negative and getBalance() . Test all scenarios including invalid withdraws and deposits.
*/

//Solution:
class BankAccount {
    #balance=10000;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    withdraw(amount) {
        if (this.#balance >= amount) {
            this.#balance -= amount;
            return this.#balance;
        } else {
            console.log("Insufficient funds");
            return this.#balance;
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount("Nawaz");
acc.deposit(5000);
console.log(acc.getBalance());
acc.withdraw(2000);
acc.withdraw(15000); // Insufficient funds
console.log(acc.getBalance());

//Output: 15000
// Insufficient funds
// 13000