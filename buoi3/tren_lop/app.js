// let arr = ["string", 25, true,12];
//Create
// array.push() day vao cuoi 1 phan tu
// array.unshift() day vao dau 1 phan tu

//Read
//array[index]

//Remove
//array.pop() xoa phan tu cuoi cung va tra ve gt
//arr.shift() xoa phan tu dau tien va tra ve gt
// arr.splice(1,2); //Remove tu vi tri
// console.table(arr);

// let contact=["0982834842", "0782572098"];
// let enter="X";
// enter=prompt("Enter a word?");
// while (enter!="0") {    
//     if (enter=="C") {
//         let a=prompt("Enter your phone number");
//         contact.push(a);
//     }
//     if (enter=="R") {
//         let index=prompt("Enter the index");
//         alert(`The phone number at index ${index} is ${contact[index]}`);
//     }
//     if (enter=="U") {
//         let index=prompt("Enter the index");
//         let element=prompt("Enter the elemet");
//         contact[index]=element;
//     }
//     if (enter=="D") {
//         let index=prompt("Enter the index");
//         alert(`You have been deleted ${contact.splice(index,1)}`); 
//     }
//     if (enter=="K") {
//         console.table(contact);
//     }
//     enter=prompt("Enter a word?");
// }
let arr = ["string", 25, true,12];
arr.splice(1,0,"Cuong","Dep zai");
console.table(arr);