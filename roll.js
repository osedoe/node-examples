function rollDice(max) {
    console.log(Math.floor(Math.random() * max + 1));
}

let max = process.argv0;
console.log(max);
rollDice(max);