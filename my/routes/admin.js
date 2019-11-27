var express=require("express");
var adminRouter=express();
var mysql=require("mysql");
var config=require("config");
adminRouter.use(express.json());
var connection=mysql.createConnection({
    host:config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")

})
connection.connect();
adminRouter.get("/",(request,response)=>{
var queryText="select * from Emp";
connection.query(queryText,(err,result)=>{
    if(err==null)
    {
        response.send(JSON.stringify(result));
    }
    else{
        response.send(JSON.stringify(err));
    }
})
})
module.exports=adminRouter;