const express =require("express");
require('./base');
const product=require('./models');
const app=express();
app.get('',async(req,res)=>{
    let data=await product.find();
    console.log(data);
    res.send(data);
})
app.listen(process.env.PORT||5000);