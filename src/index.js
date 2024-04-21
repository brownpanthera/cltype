#!/usr/bin/env node

import readline from "readline";
import chalk from "chalk";
import Boxen from "./boxen.js";
import wordString from "./randomWord.js";

console.clear();

const providedText = wordString;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Enable raw mode to capture keypress events
process.stdin.setRawMode(true);
process.stdin.resume();

// Function to display the current state of the text with correct/incorrect highlighting
function displayText(input, provided) {
  let output = "";
  for (let i = 0; i < provided.length; i++) {
    if (i < input.length) {
      // Compare each character
      if (input[i] === provided[i]) {
        output += chalk.green(input[i]);
      } else {
        output += chalk.red(input[i]);
      }
    } else {
      output += provided[i]; // Remaining characters from the provided text
    }
  }
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(output);
}

// Start capturing user input
let userInput = "";
displayText(userInput, providedText);

// Listen for keypress events
process.stdin.on("keypress", (ch, key) => {
  if (key && key.name === "backspace") {
    userInput = userInput.slice(0, -1);
  } else if (ch && key && key.name !== "return") {
    userInput += ch;
  }

  displayText(userInput, providedText);

  if (userInput.length === providedText.length) {
    console.log("\nYou typed the text correctly!");
    rl.close();
  }
});

// Prevent the Enter key from moving to the next line
process.stdin.on("data", (key) => {
  if (key === "\r" || key === "\n") {
    process.stdout.write("\n"); // Add a newline character to prevent moving to the next line
  }
});

rl.on("close", () => {
  process.exit(0);
});
