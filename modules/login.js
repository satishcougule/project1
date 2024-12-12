function login(emailid,password){
    var userdata = [
        {email:'a@a.com',password:1234},
        {email:'a@a1.com',password:12345},
        {email:'a@a2.com',password:123456},
        {email:'a@a3.com',password:1234567}
    ];

    // console.log(emailid,password);

    var fans = userdata.filter(rec=> rec.email==emailid && rec.password==password);
    // console.log(fans);
    
    return fans.length;
}

module.exports = login;