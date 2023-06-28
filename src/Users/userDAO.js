//import users.json file and fs module
const users = require('./users.json')
const fs = require('fs');

//This method will findUser
function findUser(email, done){
    //use filter method to find the user from json file
   const user = users.filter(user => user.email === email)[0]
   if (!user) {
       done('User not found')
   }
   done(null, user)
}

//This method will register user
function registerUser(userData,done){
    //call fileWrite method and write the user in json file  
}

module.exports = {
    findUser,registerUser
}