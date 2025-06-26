var mongoose = require("mongoose");
// mongoose.connect("uri").then(()=>{}).catch(()=>{})
mongoose.connect("mongodb+srv://sgovindan077:igov1234@cluster0.9itc27j.mongodb.net/studentapp?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("db connected")
    })
    .catch((error)=>{
        console.log(error);
    })