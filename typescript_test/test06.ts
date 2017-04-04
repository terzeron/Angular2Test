let text: string = "abcdefg";
let isEmpty: boolean = false;
let index: number = 0;

let operate: (x: number, y: number) => number = function(x, y) { return x+y; }; 

//let content: string = `${expression} and ${expression}`
let one: number = 1;
let two: number = 2;
let multiline: string = `
one = ${one}
two = ${two}
one + two = ${one + two}
`;
console.log(multiline);