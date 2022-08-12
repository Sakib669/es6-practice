// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;    
// }

const doubleIt = num => num * num;
// const doubleIt = (num) => num * num;

const add = (x, y) => x + y;

const sum = add(11, 22);

const five = () => 5;

const giveMeFive = five();

const doSum = (x, y) => {
    const sum = x + y;
    const difference = x - y;
    const result = sum * difference;
    return result;
}

const doingSum = doSum(10, 5);
const result = doubleIt(50);
console.log(doingSum);