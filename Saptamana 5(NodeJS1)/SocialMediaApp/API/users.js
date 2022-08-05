import express from 'express';
import {check , validationResult} from 'express-validator'
import gravatar from 'gravatar';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import config from 'config';

import User from '../models/User.js';

const router = express.Router();


//#region testRoute

// @router          GET API/user
// @description     Test router
// @access          public

router.get(('/'), (req, res) => res.send("Test router for user !"));

//#endregion


//#region  userRegistrationSetep

// @router          POST API/user
// @description     Registrer User
// @access          Public 
//Postman           http://localhost:5000/API/user

router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please use a valid e-mail').isEmail(),
    check('password', 'The password must contain at list 4 characters').isLength({min:4}),
], async(req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        console.log("winter is coming!")
        return res.status(400).json({errors:errors})
    }else{
        console.log("winter is not coming!")
        res.send('winter is not coming');
        const {name, email, password} = req.body;
        console.log(`name: ${name}  email: ${email}  password: ${password}`)
        
        
        try{
            //situations : if the user already exists
            let user = await User.findOne({email: email});
            console.log(`user is : ${null}`);

            if(user){
                return res
                .status(400)
                .json({ errors: [{msg : 'User exists'}] });
            }

            //get avatar 
            const avatar = gravatar.profile_url(email,{
                s: '200',
                r: 'pg',
                d: 'mm', 
            })
            console.log(avatar);

            user = new User({
                name : name, 
                email : email, 
                password : password
            });
            console.log("after user is filled: ", user);

            await user.save();
            return res.status(201).json(user);

        }catch(error){
                console.log(error);
        }
    }
})

//[] => set of verifications we can do with npm install express-validator(install and import)
//a POST means i have a request => STEP 1 in Postman




//#endregion




export default router;

/**JAvaDoc
 * 
 *  express.Router() =>  is the package that will create the endpoint
 * 
 * STEP 1
 * create new request with POST Method, Body => Raw=> Json
 * {
 *      "name" :"Stefania"
 * }
 *  STEP 2
 * npm install body-parser
 * import and use it in app.js
 * 
 * npm install gravatar
   npm install bcrypt
   npm install bcryptjs
   npm install config
   npm install jsonwebtoken
 * 
 * communication with the db is async
 * 
 */