var express=require("express");
var mysql=require("mysql");
var config=require("config");
var app=express();
var empRouter=require("./routes/emps");
var adminRouter=require("./routes/admin");
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/emps",empRouter);
app.use("/admin",adminRouter);
var port=parseInt(config.get("port"));
app.listen(port,()=>{
    console.log("server started");
})

