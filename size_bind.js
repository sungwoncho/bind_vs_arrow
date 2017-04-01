var process = require('process');

this.name = 'node.ninjas';

var before = process.memoryUsage();

// Allocate arrow function
var fn = (function () {
  return this.name;
}).bind(this);

var after = process.memoryUsage();

console.log("#### Arrow function")
console.log("## heap delta:", after.heapUsed - before.heapUsed)

