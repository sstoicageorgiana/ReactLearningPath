import express, { response } from 'express';

const router = express.Router();

// @route               GET API/posts
// @description         TEST route 
// @access              public 
router.get(('/'), (req,res) => res.send("Test posts route !"))

export default router ;


/**JAvaDoc
 * 
 *  express.Router() =>  is the package that will create the endpoint
 */