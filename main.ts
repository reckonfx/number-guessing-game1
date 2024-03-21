#! /usr/bin/env node

import inquirer from "inquirer";
while (true){
const num1= await inquirer.prompt([{
    message:"Enter number to guess",name:"num1","type":"number"}
])
let num2:number = 55

if (num1.num1 == num2){
 console.log(" you predicted correct number");
} else if (num1.num1 > num2){
    console.log(" You predicted a higher number then original ");
}else {
    console.log("you predicted lower number then original")
}
const playAgain = await inquirer.prompt([
    { message:" do you want to play again",name:"play",type:"confirm"}
])
if (!playAgain.play){
    console.log("Thanks for Playing, Good Bye");
    break;
}
}