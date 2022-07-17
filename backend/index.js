const express =require("express");
const app=express();
app.get('',(req,res)=>{
    res.send("hellow babeskjs");
})
app.listen(process.env.PORT||4500);