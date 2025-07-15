// William Keilsohn
// July 7 2025

// Import Packages
const fs = require('fs');
const csv = require('csv-parser');
// const { console } = require('inspector'); // Why does this break the output?

// Declare Variables
var loc = process.cwd();
var doc_loc = loc + "\\data.csv";

// Declare Functions

function sortTickets(ticket)
{
    for (let i = 0; i < ticket.length; i++)
    {
        console.log(ticket[i]);
    }
}

function readTickets(file)
{
    fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {console.log(row)})
    .on('end', () => {console.log('End of Tickets')});
}

function getCSVData(file)
{
    let vals = ''
    fs.createReadStream(file)
    .pipe(csv())
    .on('data', (row) => {vals += row})
    .on('end', () => {console.log('End of Tickets')})
    console.log(vals);
}

// Run Program
getCSVData(doc_loc);
