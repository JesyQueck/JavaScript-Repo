//EVEN AND ODD COUNTER

let even = 0;
let odd = 0;

for( i = 1; i <= 100; i++){
     if(i % 2 === 0){
          even++;
     }else{
          odd++;
     }
};
console.log(`Even Num = ${even}`);
console.log(`odd Num = ${odd}`);

//MULTIPLICATION TABLE

let userInput = (prompt("Enter A Number"));

for( i = 1; i <= 12; i++){
     console.log(`${userInput} *${i} = Multiplication ${userInput * i}`);
}; 
     
//GRADE ASSIGNER

let gradeInput = Number(prompt("Enter Score"));
if (gradeInput >= 90 && gradeInput <= 100){
     console.log(`Your Grade is A`)
}else if(gradeInput >=80 && gradeInput <=89 ){
     console.log(`Your Grade is B`)
}else if(gradeInput >= 70 && gradeInput <=79 ){
     console.log(`Your Grade is C`)
}else if(gradeInput >= 69 && gradeInput <=60 ){
     console.log(`Your Grade is D`)
}else if(gradeInput >= 0 && gradeInput <=59 )
     console.log(`Your Grade is F`)
else{
     console.log(`Invalid!`)
}


//PASSWORD CHECKER

const password = prompt("Enter your password");

const capitalLetters = /[A-Z]/;
const smallLetters = /[a-z]/;
const number = /[0-9]/;
const specailCharacters =/[!@#$%^&*()_+-~`?/>.,<":;'{}\|]/;

if (
     password.length >= 8 &&
     capitalLetters.test(password) &&
     smallLetters.test(password) &&
     number.test(password) &&
     specailCharacters.test(password) 
){
     console.log(`Strong password`)
}else if(
     password.length >= 8 &&
     specailCharacters.test(password)
){
     console.log(`Medium password`)
}else{
     console.log(`Weak Password`)
};


