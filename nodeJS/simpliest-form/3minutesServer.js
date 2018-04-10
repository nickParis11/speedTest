// 3 minutes old fashion form w/ post action
// it reminds me i m old  :)
// Know your basics they say ...

const express = require("express");
const body = require('body-parser');

const log = console.log;

const app = express();

app.use(body.urlencoded({ extended: false }));


const template = "Make whatever you want of me, i m only a webp page afterall"

app.get('/',(req,res)=> {

	res.send('<h1>'+template+'</h1> <form action="/" method="post"><input name="say" value="Hi"><input name="to" value="Mom"><button> Send data to server</button></form>');
})

app.post('/',(req,res)=>{
 res.send('<h1> CONGRATS </h1> <br> you just submited :'+req.body.say+'<br> <br>to :'+req.body.to);
})

const port = 5001;

app.listen(port,() => {
log("app listening on port ",port);
});
