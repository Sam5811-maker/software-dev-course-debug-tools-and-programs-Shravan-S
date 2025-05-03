const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

// const cart = []; //throws cart is empty // case scenarios

// const cart = [{ name: "Laptop", price: 1000 }]; //case scenarios

function calculateTotal(cartItems) {
  let total = 0;
  debugger;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be < // fixed
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  // validation added
  if(isNaN(discountRate), discountRate < 0 || discountRate >1){
      console.Error(`Invalid discount rate`);
      return total;
  } else {
      return total - (total * discountRate); // Bug: Missing validation for discountRate
  }
  
}
function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  if(cartItems.length ===0){
    throw new Error(`The cart is empty....!`)
  } else {
      cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
}
  
  receipt += `Total: $${Number(total).toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
// const discountedTotal = applyDiscount(total, 0.2); // 20% discount
// const discountedTotal = applyDiscount(total, 0); // 0% discount
const discountedTotal = applyDiscount(total, 1); // 100% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


// Tasks
// 1. Identify Errors:
// ○ Use the Console tab to locate syntax and runtime errors.
// ○ Use the Sources tab to set breakpoints in the calculateTotal, applyDiscount, and generateReceipt functions.
// 2. Debug and Fix Errors:
// ○ Analyze error messages and the call stack to understand the rootcause.
// ○ Use the debugger statement to pause execution in loops and inspect variable values.

// 3. Validate Fixes:
// ○ Test the corrected program with the given cart and a few edge cases:
// i. An empty cart.
// ii. A cart with one item.
// iii. A discountRate of 0 or 1.

// /////////////*******************//////////////
// 4. Write a Summary:
//  ○ Document the errors you found and how you fixed them in comments within your GitHub Repo.
    // Errors: no validation for applydiscount and discountRate 
    // Fixes:
    // REMOVED = FROM calculateTotal in loop 
    // Added validation 
    // formatted total to number in receipt
// ○ Explain how debugging tools helped you locate and resolve issues in comments within your GitHub Repo.
    // used debugger; to pause while debugging the code
    // Also used browser error stack traces to understand the errors
    // Also tried to place manual break points to understand the code