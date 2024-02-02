//Execute this script with Node.js whenever you need to update the JSON data from your Excel files:
//node convert-excel-to-json.js

const XLSX = require('xlsx');
const fs = require('fs');

// Path to your Excel file
const excelFilePath = 'questions.xlsx';

// Function to read an Excel file and convert it to JSON
function convertExcelToJson(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Or specify your sheet name
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}

// Convert and save the data as JSON
const jsonData = convertExcelToJson(excelFilePath);
fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2), 'utf8');

console.log('Excel file has been converted to JSON');
