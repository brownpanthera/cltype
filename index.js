import { generate, count } from "random-words";
import readline from "readline"
import chalk from "chalk";
import boxen from "boxen";

const arr = ["wake, doom, marvel, happy, sick, create, read"];
const stringWithoutCommas = arr[0].replace(/,/g, '');
const stringWithChalk = chalk.blue(stringWithoutCommas);

const style = {     
    width: 100,   
    borderStyle: 'single', 
    borderColor: 'green',
  };

const boxContent = boxen(stringWithChalk, style);
process.stdout.write('\x1Bc');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});


rl.question(`${boxContent}\n`,(userInput)=>{
    if(userInput.trim() == stringWithoutCommas){
        rl.close()
    }
});
