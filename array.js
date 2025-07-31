/* const studentScores = [
     { name: "Lyn", score: 85 },
     { name: "Dan", score: 54 },
     { name: "Roc", score: 75 },
     { name: "Mei", score: 35 },
     { name: "Arith", score: 95 },
     { name: "Lin", score: 15 }
]

function calculateGrade(score) {
     for (let i = 0; i < studentScores.length; i++)
          if (score >= 90) {
               return 'A';
          } else if (score >= 80) {
               return 'B';
          } else if (score >= 70) {
               return 'C';
          } else if (score >= 50) {
               return 'D';
          } else if (score >= 30) {
               return 'E'
          } else {
               return 'F'
          }
};

const result = studentScores.map(studentResult => ({
     name: studentResult.name,
     score: studentResult.score,
     grade: calculateGrade(studentResult.score)
}))


console.log(result) */


const userInput = prompt();
function countVowels(str) {
     const insensitiveStr = str.toLowerCase();
     let count = 0
     const countVowels = { a: 0, e: 0, i: 0, o: 0, u: 0 }
     for (let char of insensitiveStr) {
          if ('aeiou'.includes(char)) {
               count++
          };
          if (countVowels.hasOwnProperty(char)) {
               countVowels[char]++
          }
     }
     return countVowels
     return count
}

console.log(countVowels(userInput), count(userInput));

