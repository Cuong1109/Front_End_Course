// const btnAdd=document.getElementById('btnAdd');
// let listContent=document.querySelector('.listContent');
// btnAdd.onclick= function(){
//     const inputContent= document.getElementById('inpContent');
//     console.log(inputContent.value);
//     let li=document.createElement('li');
//     li.innerText=inputContent.value;
//     listContent.appendChild(li);
// }
const mainForm=document.querySelector(".mainForm");
mainForm.onsubmit=function(){
    event.preventDefault();
    const li=mainForm.toDoContent.value;
    console.log(li);
    const deleteBtn=document.createElement('button');
    deleteBtn.innerText="Delete";
    li
}

//Sự kiện event.target