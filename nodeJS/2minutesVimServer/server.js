const express = require('express');

const app = express();

app.get("/",(r,rs)=>{
rs.send('good to go');
});

app.listen(3000);

