import express from 'express';

const router = express.Router();

// @route         GET  api/auth
// @description   TEST route 
// @access        Public
// Postman        Request : http://localhost:5000/API/auth

router.get('/',(req, res) => res.send('Test auth route'));

export default router;

/**JAvaDoc
 * 
 *  express.Router() =>  is the package that will create the endpoint
 * 
 * export default router 
 *      => when using export default it will take the exported object
 *      => when the router is imported it can be imported with the same name or a different name
 */



 