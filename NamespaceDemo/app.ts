/// <reference path="./utilityFunctions.ts" />
// tsc --target ES5 app.ts --outFile out.js
// node out.js

import util = Utility.Fees;

//let fee = Utility.Fees.CalculateLateFee(10);
let fee = util.CalculateLateFee(10);
console.log(`Fee: ${fee}`);
