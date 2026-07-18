// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This tries to build a greeting using the customer's first name.
// It logs "undefined Rivera" instead of "Alex Rivera". What's wrong?

// const customerName = "alex rivera";
// const cleanName    = customerName.trim().toLowerCase();

// // Trying to capitalise the first letter:
// const titled = cleanname[0].toUpperCase() + cleanname.slice(1);
// console.log(`Hello, ${titled}!`);

// What's wrong ↓
// cleanname instead of cleanName

// Your fix ↓
const customerName = "alex rivera";
const cleanName    = customerName.trim().toLowerCase();

// Trying to capitalise the first letter:
const titled = cleanName[0].toUpperCase() + cleanName.slice(1);
console.log(`Hello, ${titled}!`);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This calculates the total for an order item.
// The result is "79.992" instead of 159.98. What's wrong?

// const itemPrice = "79.99";  // from a form input
// const itemQty   = 2;

// const lineTotal = itemPrice * itemQty;  // works — * coerces
// const receipt   = `Total: $${itemPrice + lineTotal}`; // bug here

// console.log(receipt); // "Total: $79.99159.98" — wrong

// What's wrong ↓
// lineTotal is multiplying a string with a number which is going to work but when trying to sum the itemPrice and the lineTotal without parsing "+" concanates them

// Your fix ↓
const itemPrice = "79.99";  // from a form input
const itemQty   = 2;

const lineTotal = itemPrice * itemQty;  // works — * coerces
const receipt   = `Total: $${parseFloat(itemPrice) + lineTotal}`; // bug here

console.log(receipt);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This builds a discount label and checks if a code is valid.
// There are TWO bugs — one produces a wrong boolean,
// one produces a wrong string.

const rawCode     = "  save10  ";
const validCode   = "SAVE10";

// Bug 1: comparing without cleaning
// const isValid = rawCode === validCode;
// console.log(`Code valid: ${isValid}`);  // false — wrong, should be true

// Bug 2: building a label with the raw code
// const label = `Discount code: ${rawCode} — valid: ${isValid}`;
// console.log(label); // shows messy whitespace in the label

// Bug 1 ↓
// the variables were straight up compared without being cleaned up.

// Bug 2 ↓
// spaces were not trimmed off from rawCode

// Your fix for both ↓
const isValid = rawCode.toUpperCase().trim() === validCode;
console.log(`Code valid: ${isValid}`);

const label = `Discount code: ${rawCode.trim()} — valid: ${isValid}`;
console.log(label);
