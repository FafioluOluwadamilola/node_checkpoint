// //1 Program to print HELLO WORLD
// console.log("Hello World")


// //2  Create a server that runs on port 3000 and responds with '<h1>Hello Node!!!!</h1>\n'
// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('<h1>Hello, World!</h1>\n')
// })

// server.listen(3000, () =>{
//     console.log('Server running at http://localhost:3000/')
// })


//3  Create and read a file using the File System module

const fs = require('fs');
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been saved!');
  
  // Read and console.log data from "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});



//4   Create a file named password-generator.js and generate a random password

