
const User = require("../models/user.model");

const create = async (req, res) => {
  const { name, email } = req.body;
  console.log("satyam");
  console.log(req.body);
  try {
    const newUser = new User({ name, email });
    await newUser.save()
    res.json(newUser)
  } catch (e) {
    console.error(e.message);
    res.status(500).send("resource not found");
  }
};

const index = async(req, res) =>{
  try {
    const users = await User.find();
    res.json(users);
  }
  catch(e){
    console.log(e.message);
    res.status(500).send("resource not found");
  }
};

const update = async(req, res) =>{
   const {name, email} = req.body;
   try {
    let user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({msg: "User not found"});
    }
    user.name = name;
    user.email = email;
    await user.save();
    res.json(user);
   }
   catch(e){
    console.error(e.message);
    res.status(500).send("Server Error");
   }
};

const show = async(req,res) => {
  try{
    let user = await User.findById(req.params.id)
    if(!user){
      return res.status(500).send({meg: "record not found"});
    }
    return res.json(user)
  }
  catch(e){
    console.log(e.message);
    res.status(500).send("Server Error");
  }
};

const delete_user = async(req, res) => {
  console.log(req.params.id)
  try{
   
    let user = await User.findByIdAndRemove(req.params.id);
    res.json({meg : "user deleted"});
  }
  catch(error){
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {create,index,update,show,delete_user};