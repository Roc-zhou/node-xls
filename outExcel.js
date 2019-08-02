const fs = require('fs');
const xlsx = require('node-xlsx');


const data = JSON.stringify(xlsx.parse(fs.readFileSync(`${__dirname}/demo.xlsx`)))
console.log(data);