#!/usr/bin/env node

import readline from "readline";
import chalk from "chalk";
import boxen from "boxen";
import { generate } from "random-words";

console.clear();

const termWidth = process.stdout.columns;
const termHeight = process.stdout.rows;


const wordString = generate({
  exactly: 10,
  minLength: 3,
  maxLength: 7,
  join: " ",
});

const boxedText = boxen("", {
  width: termWidth - 4,
  height: termHeight - 2,
  padding: 1,
  margin: 1,
  borderStyle: "single",
  borderColor: "green",
  default: "left",
});

let totalKeysPressed = 0;
let correctKeysPressed = 0;
let startTime = null;

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // function to render the current state
  const renderState = (state) => {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);

    let renderedText = "";
    for (let i = 0; i < wordString.length; i++) {
      if (i < state.length) {
        const char = state.charAt(i);
        if (char === wordString.charAt(i)) {
          renderedText += chalk.green(char);
          correctKeysPressed++;
        } else {
          renderedText += chalk.red(char);
        }
      } else {
        renderedText += wordString.charAt(i);
      }
    }
    process.stdout.write(renderedText);
  };

  let state = ""; // current state
  let cursorPosition = 0; // cursor position

  process.stdin.on("keypress", (char, key) => {
    totalKeysPressed++;

    if (!startTime) {
      startTime = Date.now();
    }

    if (key && key.name === "backspace") {
      if (state.length > 0) {
        state = state.slice(0, -1);
        cursorPosition--;
        renderState(state);
      }
    } else if (char) {
      state += char;
      cursorPosition++;
      renderState(state);
    }

    if (cursorPosition > 0) {
      readline.cursorTo(process.stdout, cursorPosition);
    }

    if (state === wordString) {
      const elapsedTime = (Date.now() - startTime) / (1000 * 60);
      const totalWords = totalKeysPressed / 5;
      const wpm = Math.floor(totalWords / elapsedTime);

      const accuracy = ((correctKeysPressed / wordString.length) * 100).toFixed(
        2
      );

      const awpm = Math.floor(wpm * (accuracy / 100));

      rl.write(`\n\nYour WPM: ${wpm}`);
      rl.write(`\nYour Accuracy: ${accuracy}%`);
      rl.write(`\nYour AWPM: ${awpm}`);
    }
  });

  rl.write(wordString);
}



main().catch((error) => {
  console.error("An error occurred:", error);
});
