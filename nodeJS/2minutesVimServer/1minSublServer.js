const express = require ("express");

const app = express();

app.get('/',(r,rs)=>{
	rs.send('ok');
})

app.listen(3001);


// 90 seconds // 120418