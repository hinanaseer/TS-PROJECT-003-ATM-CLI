// This is the interface for the ATMTransaction object.
import inquirer from "inquirer";
// This function prompts the user for their user ID, PIN, account type, transaction type, and amount.
const transaction = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Please enter your user ID",
        description: "This is your unique identifier for the ATM",
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter your PIN",
        description: "This is your personal identification number",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current Account", "Saving Account"],
        message: "Please select your account type",
        description: "This is the type of account you want to transact on",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Please select your transaction type",
        description: "This is the type of transaction you want to perform",
        when(answers) {
            return answers.accountType === "Current Account";
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 3000, 5000, 10000],
        message: "Please select your transaction amount",
        description: "This is the amount of money you want to transact",
        when(answers) {
            return answers.transactionType === "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter your transaction amount",
        description: "This is the amount of money you want to transact",
        when(answers) {
            return answers.transactionType === "Withdraw";
        },
    },
]);
const balance = Math.floor(Math.random() * 1000000000);
console.log("Your current balance is", balance);
const enteredAmount = transaction.amount;
if (balance >= enteredAmount) {
    const remainingBalance = balance - enteredAmount;
    console.log("Your remaining balance is", remainingBalance);
}
else {
    console.log("Insufficient balance");
}
