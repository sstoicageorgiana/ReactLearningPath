import express from 'express';
import authRouter from './API/auth.js'; //pot sa customizez numele cum doresc
import postsRouter from './API/posts.js';
import userRouter from './API/users.js';

import 'dotenv/config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();

app.use(bodyParser.json());

//#region Routes
app.get('/', (req, res)=> res.send('Hello social-media-app')); //test route
app.use('/api/auth', authRouter);                              // =>>I want when having '/api/auth' to use authRouter(if we have in auth.js GET, POST, PUT, DELETE it will go to the " ('/') " and use the "/" and then come back and added the following path: '/api/auth'(this is not about the pathfile) to fo forewword )
app.use('/api/posts',postsRouter);
app.use('/api/users', userRouter);
//#endregion

//#region ListeningToPort
app.listen(process.env.PORT ||5000) 
//#endregion

//#region Connect to MongoDB
// console.log(process.env.MONGO_URI);
// mongoose.connect(process.env.MONGO_URI, () => console.log("connected to mongodb"))

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('MongoDB connected!!');
	} catch (err) {
		console.log('Failed to connect to MongoDB', err);
	}
};
connectDB();
//#endregion



/**
 * JavaDoc
 * 
 * app.js is the principle file to start the app
 * a good practice is to create a var app witch is the result of the running of principle express function 
 * in app we will have access to everything that express provides
 * start the server -listen on port 3000
 * 
 * express has method listen => receives a number that is a port, is is a number, is a mechanism of communication
 * port = ex:protocols http, ssh, ftp??
 * 
 * we want to listen on the port, but also i need to tell what to "serve", to "see", with express we use routes
 * routes should be placed under folder :api, routes, controllers, 
 * 
 * install mongoose (read-me pct 6)
 * 
 * we want to publish app somewhere, and the port should not be fixed ,on server we use : "process.env.PORT" 
 *                                                          to choose the port by deploy on cloud,  heroku
 */

//mecanism de comunizare, un nr care indentifica un serviciu/protocol - thhp, ssh, etc

//get, post,put, delete
// app.get('path pp /index', (fct de callback cu : req, res)=> this call back function will return what i want);

