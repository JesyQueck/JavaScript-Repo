/* //Data types
const userFullName = "Oyedokun Jesse";//Strings
let userAge = 18;//Integer
var isLearningJs = true;//Boolean
let noValue =null;//Null
let isUndefined;
let isEmpty="";


console.log(`My Fullname is ${userFullName}`);//template literals
console.log('My Fullname is a ' + typeof userFullName,);//typeof Strings

console.log(`My age is ${userAge}`)
console.log(`My age is a ` + typeof userAge,);//typeof integer

console.log(`Am I learning JS: ${isLearningJs}`);
console.log('Am a' + typeof isLearningJs);//typeof boolean

console.log(`Am ${isUndefined}`);
console.log('Its ' + typeof isUndefined);//typeof undefined
 */

/* //Array
let userNamesArray = ["Ayo", "Jesse", "Al-meen", "Rasheed"];//Declaring the string Array
console.log(userNamesArray);//Console logging...

let userAgesArray = [19, 18, 20, 18];//Declaring the integer Array
console.log(userAgesArray);//Console logging...

let userLearningJs = [false, true, true, true]//Declaring the Boolean Array
console.log(userLearningJs);//Console logging...

let userDontLoveJs = [null, null, null, null]//Declaring the Null Array
console.log(userDontLoveJs);//Console logging...

let userUndefinedValues = [undefined, undefined,undefined, undefined]//Declaring the Undefined Array
console.log(userUndefinedValues);//Console logging...

let userJesseArray = ["Jesse", 18, true, null, undefined]//Declaring three Data types in an Array
console.log(userJesseArray);//Console logging...
 */

/* 
-VAR IS FUNCTION SCOPED NOT BLOCK AND CAN BE ACCESSED WITHIN THE FUNCTION THEY'RE WRITTEN IN WHILE CONST AND LET ARE BLOCK SCOPED AND CAN ONLY BE ACCESSED WITHIN THE BLOCK THEY'RE WRITTEN IN.
-BOTH VAR AND LET CAN BE REASSIGNED AND RE-DECLEARED WHILE CONST CAN'T.

STRING- COMPRISES OF TEXTS
INTEGER- COMPRISES OF NUMBERS
BOOLEAN- COMPRISES OF TRUE OR FALSE INPUTS
NULL-
UNDEFINED-
EMPTY-
*/

/*  //Using Concatenation
const firstName = "Oyedokun";
const lastName = "Jesse";
const age = 18;
const country = "Nigeria";
const email = "oyedokunolumuyiwa07@gmail.com"
const isAdmin = true;

const profileSummary = "My Name is " + firstName +" "+ lastName +
                       ", I am " + age + " years old from " + country +
                       ". My Admin status is:" + isAdmin;

console.log(profileSummary);

//Using Template literals
const profileSummary2 =`My Name is ${firstName} ${lastName}, I am ${age} years old from ${country}. My Admin Status is ${isAdmin}.`;
console.log(profileSummary2);
 */

/* 
//Object
let name = "Tunde";
let surname = "Adeyemi";
let age = 22;
let userLocation = "Lagos";
let balance = 30000;
let isPremium = true;
let hobbies = ["Reading", "Coding", "gaming"]

const userProfile ={
     Name: name,
     Surname: surname,
     Age: age,
     Location: userLocation,
     Balance: balance,
     isPremium: true,
     Hobbies: hobbies,
}
console.log(userProfile);

{
     let balance =55000;//Changes the value of balance
     console.log(balance)
}

delete userProfile.Location;// Deletes the location key 

userProfile["membershipTier"] = "Gold";//Adds new key to objects
console.log(userProfile); 

const recentTransaction = [5000, 4000, 2500];
console.log("The Third transaction is: ",recentTransaction[2]);//concatenation
console.log(`The Third transaction is: `, recentTransaction[2]);//Template literals
 */
