let arr= prompt("Enter array?");
let newArr= arr.split(",");
console.log(newArr);
let sum=0;
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    sum+=element;
}
alert(sum);