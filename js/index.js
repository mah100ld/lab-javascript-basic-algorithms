// Iteration 1: Names and Input

let hacker1 = 'Max';
let hacker2 = 'Ivan';


console.log (`The drivers name is: ${hacker1}.`);
console.log (`The navigators name is: ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name it has ${hacker1.length} characters.`);
  
  } else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  
  } else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names,       ${hacker2.length} characters!`);

}

// Iteration 3: Loops
// 3.1

let SpaceInBetween = ""
    
for (i = 0; i < hacker1.length; i++) {
  
    SpaceInBetween += hacker1[i].toUpperCase() + " ";

}

// 3.2 solution as function
function reverse(hacker){

    return hacker.split("").reverse().join("");
}
reverse (hacker2);

// 3.2 solution as loop
let reversedStr = "";    
  
    for (i = hacker2.length - 1; i >= 0; i--){ 
    reversedStr += hacker2[i];
  }

// 3.3 
let compareOrder = [hacker1, hacker2];
 
    compareOrder.sort (function (hacker1, hacker2){
 
    if(hacker1 > hacker2){
    console.log(`The driver's name goes first.`);

    } else if(hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);

    } else if (hacker1 == hacker2) {
   console.log(`What?! You both have the same name?`);
   
  }
 })