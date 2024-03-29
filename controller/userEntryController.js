const userEntry=require("../models/userModels");
const bcrypt=require("bcrypt");
const log=console.log;
const logIn=async function(req,res){
try{
    const emailCheck=req.body.email;
    const password=req.body.password;
    const userEmail= await userEntry.findOne({email:emailCheck});
    log(userEmail.password);
    log(password);
    const isMatch=await bcrypt.compare(password,userEmail.password);
    log(isMatch);
    if(isMatch){
        const token= await userEmail.generateToken();
        res.set('Authorization',token);
        res.status(201).send({"value":true});
    }
    else res.status(400).send({"value":false});
}catch(e){
res.status(500).send({"value":false});
}
};

const SignIn=async function(req,res){
    try{ 
        const rawData=await req.body;

        const userData = new userEntry({
            name:rawData.name,
            email: rawData.email,
            password: rawData.password
          });
       
          const token= await userData.generateToken();
          log(token);
          res.set('Authorization', token);

          // Save the user entry to the database
          await userData.save();
          
          res.status(201).send({"value":true});
    }catch(e){
        log(e);
        res.status(500).send({"value":false});
    }
    };

module.exports={logIn,SignIn};