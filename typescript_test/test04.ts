

//let arr1: number[] = [1,2,3,4,5];
//let arr2: Array<number> = [1,2,3,4,5];
//const MAX_NUMBER: number = 1000;

let params = ['happy', 1000];
let pName = params[0];
let pNum = params[1];
let [pName1, pNum1] = params;

let [head, ...rest] = params;
console.log(head);
console.log(rest);
