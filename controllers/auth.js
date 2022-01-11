const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User =require('../models').User;

const {jwt_key}=require('../startup/config')

module.exports.login=async (req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({
        where:{
            username
        }
    });
    if(!user)
        return res.status(400).send({message:'User not found!'});
    if(!bcrypt.compareSync(password,user.password))
        return res.status(401).send({message:'Invalid credentials!'});
    
    res.send(userWithToken=createUserWithToken(user.get({raw:true})));
}

module.exports.register=async (req,res)=>{
    const user=await User.create(req.body);
    res.send(userWithToken=createUserWithToken(user.get({raw:true})));

}

const createUserWithToken=(user)=>{
    delete user.password;
    const token=jwt.sign(user,jwt_key,{expiresIn:'10m'});
    return {...{user},...{token}}
}