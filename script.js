This is the main assignment file. It covers variables, data types, user input, calculations, functions, and console output.

:::writing{variant="document" id="73164" title="script.js"} // ===================================================== // SpendWise - JavaScript Foundation // =====================================================

// 1. APPLICATION DATA // Variables used to store budgeting information.

let budget = 0; let expenses = 0; let remainingBalance = 0;

// 2. FUNCTION TO CALCULATE REMAINING BALANCE

function calculateBalance(budget, expenses) { return budget - expenses; }

// 3. FUNCTION TO START THE BUDGET CALCULATION

function startBudget() {

// Collect budget information from the user let budgetInput = prompt("Enter your total budget:");

// Collect expense information from the user let expensesInput = prompt("Enter your total expenses:");

// Convert user input from text to numbers budget = Number(budgetInput); expenses = Number(expensesInput);

// Check that the user entered valid numbers if (isNaN(budget) || isNaN(expenses)) {

console.log("SpendWise: Please enter valid numbers.");

return; }

// Calculate the remaining balance remainingBalance = calculateBalance(budget, expenses);

// Display results in the browser console console.log("========== SpendWise Budget Report =========="); console.log("Total Budget: KES " + budget); console.log("Total Expenses: KES " + expenses); console.log("Remaining Balance: KES " + remainingBalance);

// Check whether the user stayed within the budget if (remainingBalance > 0) {

console.log("Status: You are within your budget.");

} else if (remainingBalance === 0) {

console.log("Status: You have used your entire budget.");

} else {

console.log("Status: You have exceeded your budget."); }

console.log("============================================="); }

// 4. FUNCTION TO TEST THE CALCULATION

function testCalculation() {

let testBudget = 50000; let testExpenses = 15000;

let testBalance = calculateBalance(testBudget, testExpenses);

console.log("Test Budget: KES " + testBudget); console.log("Test Expenses: KES " + testExpenses); console.log("Test Remaining Balance: KES " + testBalance); }

// Run the test when the page loads console.log("SpendWise JavaScript loaded successfully.");

testCalculation(); :::