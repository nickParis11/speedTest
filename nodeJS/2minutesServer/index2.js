// deliver a form
// log what the user sent w/o any safety check

const express = require('express');
var bodyParser = require('body-parser');
const log = console.log;

const app = express();

app.get('/test',(req,res)=>{
	res.send('<H1>test</h1>')
})

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use('/public', express.static(__dirname + '/public'));

app.post('/submission',(req,res)=>{
	log('user input = ',req.body.userInput);
	log('user input2 = ',req.body);
	res.send('received post');
})

app.get('/',(req,res)=>{
	res.send("use /test /public for something to happen")
})

const port = 4000;

app.listen(port,()=>{
	log('listening on port '+port);
})