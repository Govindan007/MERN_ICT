// importing
var express = require("express");
// initialize port
var port = 3004;
// initialize express
var app = express();
// api
app.get('/',(req,res)=>{
    res.send("Welcome to node");
})
app.get('/login',(req,res)=>{
    res.send("Welcome to login");
})






// listening mode
app.listen(port, ()=>{
    console.log(`Server is runnin in ${port}`);
});