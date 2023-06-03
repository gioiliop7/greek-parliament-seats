
This is a npm library that counts how many seats a party take after elections in Greece

## Installation

    npm install greek-parliament-seats

## Usage

    const { apliAnalogiki,enisximeniAnalogiki } = require("greek-parliament-seats");
    
    // Call the functions from your library 
    const percentages = [41.83, 38.1, 8.15, 5.04, 3.8]; 
    const enisximeniResult = enisximeniAnalogiki(percentages); const apliResult = apliAnalogiki(percentages);
    
    console.log('enisximeniResult:', enisximeniResult); console.log("apliResult:", apliResult);
