// William Keilsohn
// July 7 2025

// Import Packages
const fs = require('fs');
const csv = require('csv-parser');

// Declare Variables
var loc = process.cwd();
var doc_loc = loc + "\\data.csv";

// Declare Functions

fs.createReadStream(doc_loc)
    .pipe(csv())
    .on('data', (row) =>{console.log(row)})
    .on('end', () => {console.log('End of Tickets')});

// Run Program
//console.log(doc_loc);

