// let person= {
//     name: "QuocCuong",
//     age: "18",
// };
// console.log(person);
// console.table(person);

//C/R/U/D-Create/Read/Update/Delete

//Create
// let person= {
//     name: "QuocCuong",
//     age: "18",
// };
// person.sex="female";
// console.table(person);

//Read
//Read one
// let person= {
//     name: "QuocCuong",
//     age: "18",
// };
// console.log(person.name);
// console.table(person);

//Read All
// let person= {
//     name: "QuocCuong",
//     age: "18",
// };
// for (const key in person) {
//     if (Object.hasOwnProperty.call(person, key)) {
//         const element = person[key];
//         console.log(element);
//     }
// }
// for (const iterator of object) {
    
// }

//Update
// let person= {
//     name: "QuocCuong",
//     age: "18",
// };
// person.name="Cuong";
// console.table(person);

//Delete
// let person= {
//     name: "QuocCuong",
//     age: "18",
// };
// delete(person.name);
// console.log(person);

// let people=[];
// let isLoop=true;
// let word="X";
// while (isLoop) {
//     word=prompt("Enter a word");
//     switch (word) {
//         case "C":
//             let id=prompt("Enter ID?");
//             let name=prompt("Enter name?");
//             let age=prompt("Enter age?");
//             let person={name,age};
//             people.push(person);
//             break;
//         case "R":
//             console.table(people);
//             break;
//         case "U":
//             let id_update=Number(prompt("Enter ID"));
//             if (people.indexOf(id_update)) {
//                 console.log("Ton tai id");
//                 let name=prompt("Enter name?");
//                 let age=prompt("Enter age?");
//                 people[id].name=name;
//                 people[id].age=age;
//                 console.table(people[id]);
//             } else {
//                 console.log("Khong ton tai");
//             }
//             break;
//         case "D":
//             let id_delete=Number(prompt("Enter ID"));
//             if (people[id_delete]) {
//                 people.splice(id_delete,1);
//                 console.log(`Da xoa phan tu thu ${id_delete}`);
//             } else {
//                 console.log("Khong ton tai");
//             }
//             break;
//         default:
//             isLoop=false;
//             break;
//     }
// }

//Function ()
function dienTichTamGiac(h, d){
    return 1/2*h*d;
}
console.log(dienTichTamGiac(4,2));
function dienTichHinhVuong(a){
    return a*a;
}
function dienTichHinhTron(r){
    return r*r*3,14;    
}