const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('What is your name? ', (answer) => {

    console.log(`Hello ${answer}!`)

    rl.close();
});