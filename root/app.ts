#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
const welcome = async (param: string) => {
  const welcomeScreen = chalkAnimation.rainbow(param);
  await sleep();
  welcomeScreen.stop();
};
let msg = `
    *************************************
    **** Welcome to MT Guess Game ****
    *************************************
`;
await welcome(msg);
let max: number = 10;
let randomNumber = Math.floor(Math.random() * max) + 1;
let userAnswer = true;
do {
  let userValue = await inquirer.prompt({
    name: "value",
    type: "number",
    message: "Select any number between 0 and 10",
  });
  let userInput: number = userValue.value;
  if (userInput === randomNumber) {
    userAnswer = false;
    console.log(chalk.bgBlackBright("You Won!"));
  } else if (userInput < randomNumber) {
    console.log(chalk.bgCyan("Your guess is too Low"));
  } else {
    console.log(chalk.bgGreen("Your guess is to high"));
  }
} while (userAnswer);
