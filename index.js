const testAddon = require("./build/Release/testaddon.node");

console.log(
  "------------------------CASE 1 - functions usage--------------------"
);
console.log("addon", testAddon);
console.log(testAddon.hello());
console.log(testAddon.add(5, 13));

console.log(
  "--------------------CASE 2 - simple class usage------------------"
);
const classInstance = new testAddon.ClassExample(4.3);
console.log("Testing class initial value: ", classInstance.getValue());
console.log("After adding 3.3: ", classInstance.add(3.3));

console.log(
  "---------------------CASE 3 - extended class usage-----------------------"
);
const prevInstance = new testAddon.ClassExample(14.3);
console.log("Initial value : ", prevInstance.getValue());
console.log("After adding 3.3 : ", prevInstance.add(3.3));

const newFromExisting = new testAddon.ClassExample(prevInstance);

console.log("Testing class initial value for derived instance");
console.log(newFromExisting.getValue()); // expect it to be 17.6

module.exports = testAddon;
