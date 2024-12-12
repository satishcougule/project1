var fs = require('fs');

console.log('reading started');

 fs.readFile('hello.html','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data); 
});


console.log('reading End');
