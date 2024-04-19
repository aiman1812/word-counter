#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta("Welcome....to Word counter project....."));

const answer :{
 sentence:string
} = await inquirer.prompt([
  {
    name : "sentence",
    message : (chalk.green("Enter your sentence to count the word")),
    type : "input",
  }
]);
const words = answer.sentence.trim().split(" ")

//print the array of word to the console
console.log(words);

//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);

console.log(chalk.yellow("*****Thank you*****"));