!/usr/bin/env node

const readline = require('readline');

// Fixed exchange rate (you can adjust this if needed)
const exchangeRate = 82.5;  // 1 USD = 82.5 INR (just an example, this can change over time)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert INR to USD
function convertINRtoUSD(amount) {
  return amount / exchangeRate;
}

// Function to convert USD to INR
function convertUSDtoINR(amount) {
  return amount * exchangeRate;
}

// Command-line input and logic
function promptConversion() {
  rl.question('Enter the amount and currency (e.g., 100 INR or 50 USD) or type "exit" to quit: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Exiting the currency converter. Goodbye!');
      rl.close();
      return;
    }

    const regexINR = /^(\d+(\.\d+)?)\s*INR$/i;
    const regexUSD = /^(\d+(\.\d+)?)\s*USD$/i;

    if (regexINR.test(input)) {
      // Convert INR to USD
      const amountINR = parseFloat(input.match(regexINR)[1]);
      const amountUSD = convertINRtoUSD(amountINR);
      console.log(`${amountINR} INR is equal to ${amountUSD.toFixed(2)} USD`);
    } else if (regexUSD.test(input)) {
      // Convert USD to INR
      const amountUSD = parseFloat(input.match(regexUSD)[1]);
      const amountINR = convertUSDtoINR(amountUSD);
      console.log(`${amountUSD} USD is equal to ${amountINR.toFixed(2)} INR`);
    } else {
      console.log('Invalid input format. Please enter a valid amount and currency (e.g., 100 INR or 50 USD).');
    }
   
    // Recursively call the prompt again
    promptConversion();
  });
}

promptConversion();

