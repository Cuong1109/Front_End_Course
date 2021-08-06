
//1a
// for (let i = 0; i < 7; i++) {
//     console.log(i);  
// }

//1b
// let n=prompt("Enter a number?");
// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

//1c
// let n=prompt("Enter a number?");
// for (let i = 3; i < n; i++) {
//     console.log(i);
// }

//1d
// let c=prompt("Enter a number start?");
// let n=prompt("Enter a number end?");
// for (let i = c; i < n; i++) {
//     console.log(i);
// }

//1e
// let c=Number(prompt("Enter a number start?"));
// let n=Number(prompt("Enter a number end?"));
// for (let i = c; i < n; i+=3) {
//     console.log(i);
// }

//1f
// let c=Number(prompt("Enter a number start?"));
// let n=Number(prompt("Enter a number end?"));
// let s=Number(prompt("Enter the space?"));
// for (let i = c; i < n; i+=s) {
//     console.log(i);
// }

//2
// let n=Number(prompt("Enter a number"));
// let result=Number(1);
// for (let i=1; i<=n; i++){
//     result=result*i;
// }
// alert(`The factorial of ${n} is ${result}`);

//3
// let age=Number(prompt("Enter your age?"));
// if (age<14) {
//     alert("You are not old enough to view this content");
// } else {
//     alert("Enjoy!");
// }

//-----------------------SERIOUS EXERCISES--------------------------------
//4
// let a=Number(prompt("Enter a number"));
// while (a<0 || a>9) {
//     alert("You must enter a number from 0 to 9");   
//     a=Number(prompt("Enter a number"));
// }
// if (a<=4) {
//     alert("Lower half of 9");
// } else {
//     alert("Higher half of 9");
// }

//5
// let x=Number(prompt("Enter x?"));
// let n=Number(prompt("Enter n"));
// while (x<0 || x>n) {
//     alert(`You must enter a number from 0 to ${n}`);   
//     x=Number(prompt("Enter x?"));
// }
// if (x<=n/2) {
//     alert(`${x} is lower half of ${n}`);
// } else {
//     alert(`${x} is higher half of ${n}`);
// }

//6
// let x=Number(prompt("Enter x?"));
// if (x % 2==0) {
//     alert(`${x} is even number`);
// } else {
//     alert(`${x} is odd number`);
// }

//8
// let height=Number(prompt("Enter your height in cm?"));
// let weight=Number(prompt("Enter your weight in kg?"));
// let bmi=weight/(height*height);
// alert(`Your BMI= ${bmi}`);
// if (bmi<=16) {
//     alert("You are Severely underweigh");
// } else {
//     if (bmi<=18.5) {
//         alert(`You are Underweight`)
//     } else {
//         if (bmi<=25) {
//             alert(`You are Normal`);
//         } else {
//             if (bmi<=30) {
//                 alert("You are Overweight");
//             } else {
//                 alert("Obese");
//             }
//         }
//     }
// }