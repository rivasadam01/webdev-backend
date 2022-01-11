const app=require('express')();
const port=require('./startup/config').server_port;

require('./startup/routes')(app);

app.listen(port,()=>console.log(`Webdev server started on port ${port}`));