/* disclaimer *********
this is a speed test
trying to implement and test :
 **a node server with sign up / authentification and route protection using JWT 
 ** in less than an hour

thus, nothing here is optimized for performance or code reusability. Also there is barely any good practices implemented

for a better implemntation of this problem please visit : 
https://github.com/nickParis11/Node-Simple-Auth

//**********************/

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

const app = express();
const log = console.log;


// connection
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  log('connected to db');
});


// middleware
	// parse application/json
	app.use(bodyParser.json());

// schema

var userSchema = mongoose.Schema({
  name: String,
  pass : String,
  email : String
});

var User = mongoose.model('User', userSchema);

// route 

app.post('/login', function(req,res) {
	log('request = ',req.body);
	//res.send('got the message');

	var token = jwt.sign({ data: req.body.pass }, 'very-sercret_phares4512');

	// create instance
	var testUser = new User({ 
		name: req.body.name,
		pass : req.body.pass,
		email : req.body.email 
	});

	// save to db
	testUser.save(function (err, user) {
	    if (err) return console.error(err);
	    log('saved to db : ', user);
	    log('provided with ',user);
	    if ( err ) {
	    	return res.send('error ')
	    } 
	    return res.send(token);
	  });
})

app.use((req,res,next)=> {
	log("in the control middleware")

	jwt.verify(req.get('token'), 'very-sercret_phares4512', function(err, decoded) {
		if ( err ) {
			return res.send('error authentificating w/ JWT '+err)
		}
	  console.log('in decoded ',/*decoded.data*/)
	  next();
	});
})


app.get('/app',function(req,res){
	res.send('succesfully connected to the app using JWT')
})

const port = 5000;


app.listen(port,()=>{
	log('server listening on port : ',port);
})

