const numbers =[3,4,5,6,7,8];
// const output=[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result=element*element;
//     output.push(result);
    
// }

///Map function

// function square(element){
//     return element*element;
// }


// const result=  numbers.map(function(element){
//     return element*element;
// })

// //const result = numbers.map(x=>x*x);
// console.log(result);

const digit=[1,2,3,4,,6,7,8,9];
const result=digit.filter(x=>x>5); // bigger than 5 numbers
console.log(result);

const digit2=[1,2,3,4,,6,7,8,9];
const  result2= digit2.find(x=>x>5);
console.log(result2);