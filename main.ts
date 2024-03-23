#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => { return new Promise(resolve => setTimeout(resolve, 2000)); };
  
async function  wellcome(){
  let rainbowTiyle =chalkanimation.rainbow("let's play number guessing game");
  await sleep();
  rainbowTiyle.stop();
} 

await wellcome();  
const gameNumber = Math.floor(Math.random() * 6 + 1); 

const answer = await inquirer.prompt([{
  type: "number",
  name: "userNumber",
  message: (chalk.bgBlue("enter a number between 1 and 6"))
},

]);

 if (answer.userNumber === gameNumber) {
  console.log(chalk.bgBlueBright (" congratulations you won the game"));}

else if (answer.userNumber <= gameNumber ){
  console.log(chalk.greenBright (" Your gased number is smaller than the computer's number"));
}
else if (answer.userNumber >= gameNumber) {
  console.log(chalk.red (" Your gassed number is bigger than the computer's number"));
}

else {
  console.log(chalk.redBright("You are entering the wrong number"));

}