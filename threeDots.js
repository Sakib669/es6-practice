const firstMarks = [40, 28, 56, 19];
const secondMarks = [33, 40, 54, 69];
const thirdMarks = [51, 68, 72, 81];
const comapareMarks = firstMarks.concat(secondMarks).concat(thirdMarks );
const comapareMarks2 = [...firstMarks, ...secondMarks,23, ...thirdMarks];
// console.log(comapareMarks2);

const business = 650;
const minister = 250;
const actor = 170;
const netWorth = [650, 250, 170];
const maximum = Math.max(...netWorth);
console.log(maximum);