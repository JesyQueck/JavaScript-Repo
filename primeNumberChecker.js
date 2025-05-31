let userInput = prompt("Input a Number: ");
let userNumInput = `${userInput}`;
let isPrimeNumber =true;

if(userNumInput < 1){
     isPrimeNumber = false;
}else{
     for(let i =2; i < userNumInput; i ++){
          if(userNumInput % i  === 0){
               isPrimeNumber =false;
               break;
          }
     }
}

if(isPrimeNumber){
          console.log(`The Number you entered is a Prime Number`);
}else{
          console.log(`The Number you entered is not a Prime Number`);
};
