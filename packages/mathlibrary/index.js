console.log("PKG MathLibrary Index");

const add = (a, b) => a + b + 1;

import chalk from "chalk";

const colorMsg = (msg) => chalk.green(msg);

export default { add, colorMsg };

console.log("PKG MathLibrary Index Initialized");
console.log("Test" + add(3, 8));
console.log("Test" + colorMsg("Ok!"));
console.log("PKG MathLibrary Index Tested");
console.log(chalk);
