//NO-1
function capitalizeName(firstName, lastName ){
     let fullName = firstName + " " + lastName;
     return fullName.toUpperCase();
}
console.log(capitalizeName("oyedokun", "jesse"));

//NO-2
function isAdult(person){
     if(person.Age >= 18){
          return person.name + " is an Adult"
     }else
          return person.name + " is not an Adult"
}
console.log(isAdult({name: 'Rasheed', Age: 50}));
console.log(isAdult({name: 'Al-meen', Age: 15}));

//NO-3
function capitalizeExpression(userName){
     let UserName = userName + '!!!';
     return UserName.toUpperCase();
}
console.log(capitalizeExpression("Emma"));

//NO-4
const getRemainder = (a, b) => a % b;
     console.log(getRemainder(10,3));

//NO-5
function typeChecker(a, b, c){
     return[typeof a, typeof b, typeof c];
}
console.log(typeChecker("Jesse", 18, true));

//NO-6
function describeHobby(hobby){
     return "I do " + hobby.title + " in the " + hobby.time;
}
console.log(describeHobby({ title: "Painting", time: "Evening" }));

//NO-7
function getEdges(getElem){
     return getElem[0] + getElem[getElem.length - 1];
}
console.log(getEdges("Hello"));