const http = require('node:http');
const fs = require('fs');
// console.log(http);

const server =http.createServer((req, res)=>{
    fs.readFile('hello.html' , 'utf-8' , (err,data)=>{
        if(err) throw err;
        res.end(data);
    })
});

server.listen(5100);
//http://localhost:5100