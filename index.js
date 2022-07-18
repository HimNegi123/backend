const express =require("express");
require('./base');
const product=require('./models');
const app=express();
app.use(express.json());
app.get('',async(req,res)=>{
    let data=await product.find();
    console.log(data);
    res.send(data);
});
app.post('',async(req,res)=>{
    
    let data=new product(req.body);
    await data.save();
res.send('hellow ');
});

app.delete('/:item_name',async(req,res)=>{
console.log(req.params);
    let data=await product.deleteOne(req.params)
res.send(data);
})
app.listen(process.env.PORT||5000);