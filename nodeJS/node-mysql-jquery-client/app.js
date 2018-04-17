// initg and modules
const log = console.log;
const express= require("express");
const body = require("body-parser");
const pwd = require("./config");

// create app
const app = express();

// middlewares
app.use(body.json());
//app.use(body.json({ type: 'application/*+json' }))
app.use(express.static(__dirname + '/public'));

// connection
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: pwd.pwd,
  database : 'MISC'
});

// routing
app.post("/",(req,res)=>{
	const r = req.body; // user input
	log('request = ',r);
	connection.query(
	  'insert into test (col1,col2,col3,col4) VALUES (?,?,?,?)', [r.col1,r.col2,r.col3, r.col4],
	  function(err, results, fields) {
	  	if ( err ) return log('error inserting '+err)
	      res.status(200).send('Good to go');
	  }
	);	
});

app.get("/results",(req,res)=> {
	connection.query( "SELECT * FROM test"
	  ,
	  function(err, results, fields) {
	  	if ( err ) return log('error inserting '+err)
	    res.send(results);
	  }
	);	
})

const port = 5000;
app.listen(port,()=>{
	log ("listening on port",port);
});


