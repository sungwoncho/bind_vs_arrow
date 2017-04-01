var process = require('process');
var json2csv = require('json2csv');
var fs = require('fs');

this.name = 'node.ninjas';

// warmup
for (var i = 1; i < 10000; i++) {
  var fn = () => {
    return this.name;
  }
}

var diffs = [];
var n = 5000;
for (var i = 1; i < n; i++) {
  var start = process.hrtime();

  var fn = function() {
    return this.name;
  }.bind(this);

 // var fn = () => {
 //   return this.name;
 // }

  var diff = process.hrtime(start)[1];
  diffs.push(diff)
}

var data = diffs.map(function(d) {
  return { time: d };
});
var csv = json2csv({ data: data, fields: [ 'time' ]})

fs.writeFile('speed_bind.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
});


