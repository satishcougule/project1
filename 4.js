const http = require('node:http');
// console.log(http);

const server =http.createServer((req, res)=>{
    res.end('Server created');
});

server.listen(5100);
//http://localhost:5100