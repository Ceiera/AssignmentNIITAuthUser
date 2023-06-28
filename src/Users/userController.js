const userService = require('./userService')
//import userService


function findUser(email,done){
    //call userService findUser method and pass the parameters
   userService.findUser(email,(err, result)=>{
       if (err) {
           done(err)
       }
       done(null, result)
   })
}

module.exports = {
    findUser
}