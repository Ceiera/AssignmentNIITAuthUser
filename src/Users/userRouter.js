const router = require('express').Router()

//import the required module

//This get method will get the user with token
router.get('/',(req,res)=>{
       //retrive userdata from req claims
       

        //Calling controller findUser method return the error or result
        try {
                const userData = req.claims
                console.log(userData)
                if (!userData.email) {
                    return res.status(400).send({ error: 'User email not avaible' })
                }
                userController.findUser(userData.email, (err, result) => {
                    if (err) {
                        return res.status(400).send({ error: 'error while getting a user' })
                    }
                    return res.status(200).send(result)
                })
            } catch (err) {
                return res.status(500).send({ error: 'Unexpected ERROR' })
            }
   
})


module.exports = router