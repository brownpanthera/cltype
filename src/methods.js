import readline from "readline"
// function animateLoading() {
//     const frames = ['-', '\\', '|', '/'];
//     let currentFrame = 0;
    
//     const interval = setInterval(() => {
//         // readline.clearLine(process.stdout, 0);
//         // readline.cursorTo(process.stdout, 0);
//         process.stdout.write(`Loading ${frames[currentFrame]}`);
//         currentFrame = (currentFrame + 1) % frames.length;
//     }, 250);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("\nLoading completed!");
//     }, 5000);
// }

// animateLoading();




//BACKSPACE
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// process.stdin.on('keypress', (str, key) => {
//     if (key && key.name === 'backspace') {
//         console.log('Backspace key pressed');
//     }
// });



const animals = ["ant", "bison", "camel", "duck", "elephant"];

const sc = animals.slice(2, 4);

console.log(sc);