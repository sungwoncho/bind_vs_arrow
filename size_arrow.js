var process = require('process');

this.name = 'node.ninjas';

var before = process.memoryUsage();

// Allocate arrow function
var fn = (() => {
  return this.name;
})

var after = process.memoryUsage();

console.log("#### Arrow function")
console.log("## heap delta:", after.heapUsed - before.heapUsed)

