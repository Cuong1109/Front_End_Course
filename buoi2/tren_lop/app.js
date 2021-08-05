// const boolean=true;
// if (boolean==true)
//     alert("Hello");
// else
//     alert("Khong phai true");

// let a='2';
// let b=2;
// if (a===b) {
//     alert("Cuong dz");
// } else {
//     alert("Cuong van dep zai")
// }

// let a=1;
// let b=1;
// console.log(a>=b);

//Bai1
// let yourAge=prompt("Mời bạn nhập số tuổi: ");
// if (yourAge<18) {
//     alert("Mày chưa đủ tuổi");
// } else {
//     if (yourAge<21) {
//         alert("Mày đủ tuổi nhưng không được phép uống rượu");
//     } else {
//         alert("Lớn rồi thích làm gì thì làm");
//     }
// }

//Bai2
// let height=prompt("Enter your height:");
// let weight=prompt("Enter your weight:");
// let BMI=weight/(height*2);
// alert(BMI);

//Bai3

//Vong lap while
//Bai 1
 
// let a=3;
// while (a<2) {
//     console.log(a);
//     a++;
// }

// let b=Math.floor(Math.random() * 10);
// let a=2;
// while (1){
//     a=prompt("Moi ban nhap so");
//     if (a==b) {
//         alert("Chuc mung ban da trung thuong");
//         break;
//     }
//     if (a>10) {
//         alert("too high");
//     }
//     if (a<10) {
//         alert("too low");
//     }
// }

//Bai 1
// let a=1;
// while (a<20) {
//     if (a % 4==0) console.log(a);
//     a++;
// }

//Bai2
// let b=5;
// while (b<50){
//     if (b%3==0 || b%5==0){
//         console.log(b);
//     }
//     b++;
// }

//Bai3
// let c=30
// while (c<50) {
//     if (c % 2==1) console.log(c);
//     c++;
// }

//Vong lap for
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// 1. tính tổng các số từ 1 > 10
// let tong=0;
// alert("Chương trình tính tổng các số từ 1 đến 10");
// for (let i = 0; i < 11; i++) {
//     tong+=i;
// }
// alert(`Tong la: ${tong}`)

// 2. tính giai thừa (cho dùng nhập vào số bắt đầu)
// let a=prompt("Nhap so can tinh giai thua: ");
// let result=1;
// for (let i=1; i<=a; i++) result*=i; 
// alert(result);

// 3. in ra các số 1 -> 20 mỗi số cách nhau 3 đơn vị
