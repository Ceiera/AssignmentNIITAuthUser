const jsonwebtoken = require('jsonwebtoken')
const config = require('../config')

//import jsonwebtoken and config

//This function verifyToken will verify the token coming from headers 
const verifyToken = (req, res, next) => {
  // Getting the authorization header
  const token = req.headers["authorization"];
  if(!token){
    return res.status(403).send({message:"No token provided!"})
  }
  try {
    const decoded = jsonwebtoken.verify(token, config.AUTH_Secret)
    req.claim = decoded
  } catch (error) {
    return res.status(401).send({ error: 'Invalid Token' })
  }
 
//Synchronously verify given token using a secret or a public key to get a decoded token 
 
  //return next
  return next();
};

module.exports = verifyToken;