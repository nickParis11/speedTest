
const log = console.log;

const http = require('http');

const port = 3000;

const app = http.createServer((req,res)=>{

	log('req = ',req.headers.host);
	
	res.end('reached Server');

}).listen(port,()=> { 
	log('listening on port '+port)
});



