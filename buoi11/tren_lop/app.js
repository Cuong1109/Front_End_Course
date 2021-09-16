console.log(document);
// HTML Selector
const h1=document.getElementById('name');
console.log(h1);
const university=document.getElementsByClassName('university');
// console.log(university);
// for (const i of university) {
//     console.log(i);
// }
// querySelector, querySelectorAll
// Propertires
// console.dir(university);

// text and content
// console.log(h1.innerHTML);

// Style
// console.log(h1.style);
// console.log(h1.style.backgroundColor);
// h1.style.backgroundColor="Black";

// // // Children, partenElement
// const list=document.getElementById("list");
// console.log(list);
// console.log(list.children);
// console.log(list.children[2]);

// Method
// Remove,appChild()

// Event
// Click
// const btn=document.getElementById("btn");
// btn.onclick= function(){
//     if (btn.textContent=="Buy") {
//         btn.textContent="Add";
//         alert("Buy");
//     } else {
//         btn.textContent="Buy";
//         alert("Add");
//     }
// }
// Bài 1
let arr=[];
const square=document.getElementById("square");
square.onclick= function(){
    square.style.backgroundColor='#'+(Math.random()*0xffffff).toString(16).slice(-6);
}
const input=document.querySelector("#input");
const btnAdd=document.querySelector('#btnAdd');
const btnRemove=document.querySelector('#btnRemove');
const list=document.querySelector('#list');
btnAdd.onclick= function(){
    let newInput= document.createElement('li');
    newInput.innerHTML=input.value;
    list.appendChild(newInput);
    input.value=null;
}
btnRemove.onclick= function(){
    if (list.children.length!=0){
    list.removeChild(list.children[list.children.length-1]);
    }
}

