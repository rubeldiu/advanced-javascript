function sum(first,second){
    let result=first+second+bonus;
    if(result>9){
        const mood ='happy'
        console.log(mood);
    }
   // console.log(mood); block scope
    return result;
}
let bonus =20;
const output=sum(3,7);
console.log(bonus);
console.log(output)

console.log(day); // undefined only variable declare but not assigned
var day= "friday";