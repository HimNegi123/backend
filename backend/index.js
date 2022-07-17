const express =require("express");
const app=express();
app.get('',(req,res)=>{
    res.send("hellow babes");
})
app.listen(process.env.PORT||4000);