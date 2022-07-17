const express =require("express");
require('./base');
const product=require('./models');
const app=express();
app.use(express.json());
app.get('',async(req,res)=>{
    let data=await product.find();
    res.send(data);
});
app.post('',async(req,res)=>{
    
    let data=new product(req.body);
    await data.save();
res.send('hellow ');
});
app.listen(process.env.PORT||5000);