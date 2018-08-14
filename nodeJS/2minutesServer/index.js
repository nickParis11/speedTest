const log = console.log;
var morgan = require('morgan')

const express = require('express');
const app = express();

var logger = morgan('combined')


const logRequestStart = (req, res, next) => {
    console.log(`${req.host} ${req.method} ${req.originalUrl}`);
    next()
}

app.use(logRequestStart);

const port = 8000;

app.get('/',(req,res)=>{
	var testVar="lalalala";
	log(' host = '+req.host);

	res.send('<script> var text="'+testVar+'";console.log("test"); console.log(text)</script><H1> reached SERVER </H1>');
})


app.listen(port,()=> {log('listening on port '+port)});
