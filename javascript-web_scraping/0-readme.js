const fs = require('fs');

// Function to read and print file content
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Printing the error object if an error occurs
            console.error(err);
        } else {
            // Printing the content of the file
            console.log(data);
        }
    });
}

// Getting the file path from command line arguments
const filePath = process.argv[2];

// Calling the function with the provided file path
readFileContent(filePath);
