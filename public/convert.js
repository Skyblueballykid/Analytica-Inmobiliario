const csvToJson = require('convert-csv-to-json');
 
const input = './treemap-tiny.csv'; 
const output = './treemap-tiny.json';
 
csvToJson.fieldDelimiter(',')
         .formatValueByType()
         .generateJsonFileFromCsv(input, output);
