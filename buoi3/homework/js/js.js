//1
// let str=prompt("Enter a sequence of numbers, the Numbers are separated by commas");
// let arr=str.split(",");
// let sum=Number(0);
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum+=Number(element);
// }
// alert(`The sum of them is ${sum}`);

//2
// let minNum=Number(arr[0]);
// for (let i = 1; i < arr.length; i++) {
//     const element = Number(arr[i]);
//     if (minNum>element) {
//         minNum=element;
//     }
// }
// alert(`The smallest number is ${minNum}`);

//3
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let key=Number(prompt("Enter the number?"));
// if (arr.indexOf(key)==-1) {
//     alert(`${key} is NOT found in the array`);
// } else {
//     alert(`${key} is found in the array at index ${arr.indexOf(key)}`);
// }

//4
// let arr=[5,7,300,90,24,50,75];
// //4.1
// console.log("Hello, my name is Cuong and here is my sheep sizes: ");
// console.log(arr);
// //4.2
// let maxSheep=Math.max(...arr);
// console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
// //4.3
// console.log(`After shearing, here is my flock`);
// let indexOfMax=arr.indexOf(maxSheep);
// arr[indexOfMax]=8;
// console.log(arr);
//4.4
// console.log(`MONTH 1`);
// console.log(`One month has, passed, my sheeps have grown, here are there sizes`);
// arr=arr.map(x => x+50);
// console.log(arr);
//4.5
// for (let i = 1; i < 4; i++) {
//     console.log(`MONTH ${i}`);
//     console.log(`${i} month has, passed, my sheeps have grown, here are there sizes`);
//     arr=arr.map(x => x+50);    
//     console.log(arr);
//     if (i!=3) {
//         maxSheep=Math.max(...arr);
//         console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
//         console.log(`After shearing, here is my flock`);
//         let indexOfMax=arr.indexOf(maxSheep);
//         arr[indexOfMax]=8;
//         console.log(arr);
//     }    
// } 
// //4.6
// let sumOfFlock=arr.reduce((a, b) => a + b, 0);
// console.log(`My flock has size in total ${sumOfFlock}`);
// console.log(`I would get ${sumOfFlock} * 2$ = ${sumOfFlock*2}`)

//5
//6
