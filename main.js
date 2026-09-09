const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const currentTime = new Date();

rl.question('What is your name? ', (answer) => {

    console.log(`Hello ${answer}!`)
    if (currentTime.getHours() >= 5 && currentTime.getHours() <= 11) {
        console.log(`Good morning ${answer}!`)
    }
    else if (currentTime.getHours() >= 12 && currentTime.getHours() <= 18) {
        console.log(`Good day ${answer}!`)
    }
    else if (currentTime.getHours() >= 19 && currentTime.getHours() <= 22) {
        console.log(`Good evening ${answer}!`)
    }
    else if (currentTime.getHours() >= 23 && currentTime.getHours() <= 4) {
        console.log(`Why are you up at this hour? Go to sleep ${answer}!`)
    }
    rl.close();
});