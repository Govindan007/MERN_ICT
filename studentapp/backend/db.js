var mongoose = require("mongoose");
// mongoose.connect("uri").then(()=>{}).catch(()=>{})
mongoose.connect("uri")
    .then(()=>{
        console.log("db connected")
    })
    .catch((error)=>{
        console.log(error);
    })
