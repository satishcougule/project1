var ans = require('./modules/login');
// console.log(ans);


if( ans('a@a1.com',123451) == 0){
    console.log('Invalid');
}
else{
    console.log('valid');
}