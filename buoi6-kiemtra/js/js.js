//Bai1
// function reverseString(str){
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) 
//         newString += str[i]; 
//     return newString;
// }
// let str_input=prompt('Enter a string: ');
// let str_output=reverseString(str_input);
// alert(`You result ${str_output}`);

//Bai2
// function upCaseString(string){
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// let str_input=prompt('Enter a string: ');
// let str_output=upCaseString(str_input);
// alert(`You result ${str_output}`);

//Bai3
// let arr=['one','two','three','one','one','four','five','four','five'];
// console.log(...arr);
// let result=[];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (result.indexOf(element)<0) {
//         result.push(element);
//     }
// }
// console.log(...result);

//Bai4
// staffs=[
//     {
//         id:1,
//         name:'Cuong',
//         age:19,
//         salary:30,
//         position:'fresher'
//     },
//     {
//         id:2,
//         name:'Duong',
//         age:19,
//         salary:40,
//         position:'junior'
//     },
//     {
//         id:3,
//         name:'Quang',
//         age:26,
//         salary:50,
//         position:'senior'
//     },
// ];
// while (1) {
//     let isLoop=true;
//     let command=prompt("Enter your command(R: Read, C: Create, U: Update, D: Delete, print: read all)");
//     switch (command) {
//         case "C":
//             let newName=prompt("Enter new name: ");
//             let newAge=prompt("Enter new age: ");
//             let newSalary=prompt("Enter new salary: ");
//             let newPosition=prompt("Enter new position: ");
//             let newStaff={
//                 id: staffs.length+1,
//                 name: newName,
//                 age: newAge,
//                 salary: newSalary,
//                 position: newPosition,
//             }
//             staffs.push(newStaff);
//             break;
//         case "D":
//             let index2=prompt("Enter index you want to delete: ");
//             staffs.splice(index2,1);
//             break;
//         case "U":
//             let index=prompt("Enter index you want to update: ");
//             let newName1=prompt("Enter new name: ");
//             let newAge1=prompt("Enter new age: ");
//             let newSalary1=prompt("Enter new salary: ");
//             let newPosition1=prompt("Enter new position: ");
//             staffs[index].name=newName1;
//             staffs[index].age=newAge1;
//             staffs[index].salary=newSalary1;
//             staffs[index].position=newPosition1;
//             break;
//         case "R":
//             let index1=prompt("Enter index you want to read: ");
//             console.log(...staffs[index1])
//         case "print":
//             console.table(staffs);
//             break;
//         default:
//             isLoop=false;
//             break;
//     }
//     if (!isLoop) break;
// }

//Bai5
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
let day=prompt('Enter the day:');
let month=prompt('Enter the month:');
let year=prompt('Enter the year: ');
let nextDay=day;
let nextMonth=month;
let nextYear=year;
let month28=[2];
let month29=[2];
let month30=[4,6,9,11];
let month31=[1,3,5,7,8,10,12]
let isValid=true;
let isLeapYear=leapYear(year);
if (month>=1 && month<=12) { 
    if (month==2) {
        if (isLeapYear) {
            if (day<=0 || day>28) {
                isValid=false;
            }
        } else {
            if (day<=0 || day>29) {
                isValid=false;
            }
        }
    } else {
        if (month30.indexOf(month)>=0) {
            if (day<=0 || day>30) {
                isValid=false;
            }
        } else {
            if (day<=0 || day>31) {
                isValid=false;
            }
        }
    }
} else {
    isValid=false;
}
if (isValid) {
    day++;
} else {
    alert('Your date is not valid');
}