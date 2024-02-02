// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
    try {
        // Attempt to read the file synchronously
        const data = fs.readFileSync(path, { encoding: 'utf8' });
        
        // Split the data into lines and filter out any empty lines
        const lines = data.split('\n').filter(line => line.trim());

        // Remove the header row
        lines.shift();

        const students = lines.map(line => {
            const [firstName, , field] = line.split(',');
            return { firstName, field };
        });

        console.log(`Number of students: ${students.length}`);

        // Group students by field
        const fields = {};
        students.forEach(student => {
            if (!fields[student.field]) {
                fields[student.field] = [];
            }
            fields[student.field].push(student.firstName);
        });

        // Log details for each field
        Object.entries(fields).forEach(([field, names]) => {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
