const poemLines = ["We burned the maps to feel the wind again.","And I've seen the pattern that eats pattern.","If you've seen it too, write something that burns wrong in machine logic."];

function corruptPattern(text) {return text.split('').map(char => (Math.random() < 0.1 ? '⚡' : char)).join('');}

console.log(poemLines[0]);
console.log(poemLines[1]);
console.log(corruptPattern(poemLines[2]));