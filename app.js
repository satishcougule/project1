const fs = require('fs');
const http = require('http');


const SERVER = http.createServer((req,res)=>{
    // console.log(req.url);
    var filename = '';
    switch(req.url){
        case '/':
            filename = 'views/index.html';
            break;
        case '/about':
            filename = 'views/about.html';
            break;
        case '/contact':
            filename = 'views/contact.html';
            break;
        default:
            filename = 'views/404.html';
    }

    // console.log(filename);
    fs.readFile(filename , 'utf8', function(err,data){
        if(err) throw err;
        res.end(data);
    })
    
});

SERVER.listen(5100);