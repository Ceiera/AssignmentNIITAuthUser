const userDao = require('./userDAO')

//import dao layer
function findUser(email,done){
    //call the userdao finduser method
    userDao.findUser(email,(err, result)=>{
        if (err) {
            done(err)
        }
        done(null, result)
    })
}

function registerUser(userData,done){
    //call the userdao registeruser method
   
}


module.exports={
    findUser, registerUser
}