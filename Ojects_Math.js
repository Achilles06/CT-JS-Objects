//Task 1
function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

//Task 2
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful! New balance: $${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal successful! New balance: $${this.balance}`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be positive.");
    }
};

//Task 3
Account.prototype.calculateCompoundInterest = function(rate, years, timesCompoundedPerYear) {
    const principal = this.balance;
    const amount = principal * Math.pow((1 + rate / timesCompoundedPerYear), timesCompoundedPerYear * years);
    const interest = amount - principal;
    console.log(`Compound interest after ${years} years at an annual rate of ${rate * 100}% is $${interest.toFixed(2)}.`);
    return interest;
};

//Example
// Creating a new account
const myAccount = new Account(123456, 'John Doe', 1000);

// Depositing funds
myAccount.deposit(500); // Output: Deposit successful! New balance: $1500

// Withdrawing funds
myAccount.withdraw(300); // Output: Withdrawal successful! New balance: $1200

// Calculating compound interest
myAccount.calculateCompoundInterest(0.05, 5, 4); 
// Output: Compound interest after 5 years at an annual rate of 5% is $345.59.
