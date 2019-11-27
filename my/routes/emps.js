var express=require("express");
var empRouter=express();
var mysql=require("mysql");
var config=require("config");
empRouter.use(express.json());
var connection=mysql.createConnection({
    host:config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
})
connection.connect();
empRouter.get("/",(request,response)=>{
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
empRouter.get("/:No",(request,response)=>{
    var No=request.params.No;
    var queryText=`select * from Emp where No=${No}`;
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
empRouter.post("/",(request,response)=>{
    var No=request.body.No;
    var Name=request.body.Name;
    var Age=request.body.Age;
    var queryText=`insert into Emp values(${No},'${Name}',${Age})`;
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
empRouter.put("/:No",(request,response)=>{
    var No=request.params.No;
    var Name=request.body.Name;
    var Age=request.body.Age;
    var queryText=`update Emp set Name='${Name}',Age=${Age} where No=${No}`;
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
empRouter.delete("/:No",(request,response)=>{
    var No=request.params.No;
    var queryText=`delete from Emp  where No=${No}`;
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
module.exports=empRouter;
