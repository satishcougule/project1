var fs = require('fs');

console.log('reading started');

var ans = fs.readFileSync('hello.html','utf-8')
console.log(ans);

console.log('reading End');
