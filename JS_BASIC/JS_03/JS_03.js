const readline = require('readline'); //https://nodejs.org/api/readline.html

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function testVar() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }

    console.log(i);
}
testVar();

rl.question('Press any key.', (answer) => { rl.close(); }); // This is an "Console.ReadKey()" equivalent.
