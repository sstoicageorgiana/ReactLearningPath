import express, { response } from 'express';
import {check , validationResult} from 'express-validator'
import gravatar from 'gravatar';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';


import User from '../models/User.js';
import auth from '../middleware/auth.js'
import Post from '../models/post.js';


const router = express.Router();

// @route               POST API/posts
// @description         Create a new Post 
// @access              private - only auth users cand add new posts 
// Postman              Request : http://localhost:5000/API/posts

//auth => sa avem token adica  sa fim logati
router.post('/', [auth,
    [
        check('text', 'Post content required').not().isEmpty()
    ]

],async(req,res) =>{
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()}) 
    }
    try{
    const user = await User.findById(req.user.id);
    
    const post = new Post({
        text : req.body.text,
        name :user.name,
        avatar : user.avatar,
        user: req.user.id
        });
        
    console.log("post = ", post);
    
    const newPost = await post.save();
    res.status(201).json({post:newPost});

    }catch(error){
        console.log(error);
    }

})

export default router ;


/**JAvaDoc
 * 
 *  express.Router() =>  is the package that will create the endpoint
 * 
 */