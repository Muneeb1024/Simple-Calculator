#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a welcome messege.
console.log(`\n\tWelcome To \"Codewithmuneeb119\" - CLI Simple Calculator\n`);

//Asking questions from users through inquirer
let ans = await inquirer.prompt([
{message:"Enter First Number", type:"number", name: "num1"},
 {message:"Enter Second Number", type:"number", name: "num2"},
 {
    message :"Choose one operator to perform operations",
 type:"list",
 name:"operator",
 choices: ["Addition","Subtraction","Multiplication","Division"],
}

])
console.log(ans);

//conditional statements if-else.
if(ans.operator === "Addition"){
    console.log(ans.num1 + ans.num2);}

else if(ans.operator === "Subtraction"){
        console.log(ans.num1 - ans.num2);}

    else if(ans.operator === "Multiplication"){
        console.log(ans.num1 * ans.num2);}

else if (ans.operator === "Division"){
    console.log(ans.num1 / ans.num2);}

else {
    console.log("Invalid Input");
}
