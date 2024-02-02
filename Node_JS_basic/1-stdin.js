// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user input
process.stdin.on('data', (data) => {
    // Remove the trailing newline character
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    // End the process after displaying the name
    process.exit();
});

// Listen for the process to exit and display the closing message
process.on('exit', () => {
    console.log('This important software is now closing');
});
