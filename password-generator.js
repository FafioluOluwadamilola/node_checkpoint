//4  Create a file named password-generator.js and generate a random password

const generatePassword = require('generate-password')

const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
})


console.log("generatePassword: ", password)