import { generate, count } from "random-words";
import readline from "readline";
import chalk from "chalk";
import boxen from "boxen";

const inputString = "wake, doom, marvel, happy, sick, create, read";
const stringWithoutCommas = inputString.split(',').join('');
const stringWithChalk = chalk.white(stringWithoutCommas);


const style = {
  width: 100,
  borderStyle: 'single',
  borderColor: 'blue',
};

process.stdout.write('\x1Bc');

const boxContent = boxen(stringWithChalk, style);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question(`${boxContent}\n`, (userInput) => {
//   for (let i = 0; i < userInput.length; i++) {
//     if (stringWithChalk[i] !== userInput[i]) {
//       process.stdout.write(chalk.red(userInput[i]));
//     }
//   }

  if (userInput.trim() === stringWithoutCommas) {
    rl.setPrompt("correct\n");
  }else{
    rl.setPrompt("incorrect\n")
  }
  rl.prompt()
  rl.close()
});
