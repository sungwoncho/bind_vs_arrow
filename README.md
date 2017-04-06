# Arrow function vs bound function

Compare arrow function and bound function for:

* Memory usage
* Speed
  * allocation
  * invocation

Used for a talk:

[Bind vs. Arrow Functions in Node.js](https://sungwoncho.github.io/presentations/20170406-bind-vs-lambda.html#/)


## Files

### size_arrow.js

Outputs the memory usage of an arrow function

### size_bind.js

Outputs the memory usage of a bound function

### speed_arrow_alloc.js

Creates a csv file `speed_arrow_alloc.csv` containing allocation speed of an arrow function.

Feed the csv file to `hist.py` to get the statistics ('min,' 'max,' 'mean,' 'standard deviation').

### speed_arrow_invocation.js

Creates a csv file `speed_arrow_alloc.csv` containing invocation speed of an arrow function.

### speed_bind_alloc.js

Creates a csv file `speed_bind_alloc.csv` containing allocation speed of a bound function.

### speed_bind_invocation.js

Creates a csv file `speed_bind_alloc.csv` containing invocation speed of a bound function.

### hist.py

Outputs statistics for a given csv.

**Argument**

* [filename] {String} - name of the file

**Example**

    hist.py speed_bind_alloc.csv

**Required**

* numpy


## Try

1. Have [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) installed to run files in different node.js versions
2. Run files and see the output.
3. For files that output csv files, feed the csv file to `hist.py`. e.g.
    node speed_arrow_alloc.js && python3 hist.py speed_arrow_alloc.csv && node speed_bind_alloc.js && python3 hist.py speed_bind_alloc.csv

## Tip

* You might need `--harmony` flag for older version of node if you want to run files involving arrow functions.

---

[sung](https://sungwoncho.io)
