const mongoose = require("mongoose")
 //creating a schema here
  const userCreateSchema = new mongoose.Schema({
      fname:{
          type:String,
          required:true
      },
      lname:{
        type:String,
        required:true
      },
      email:{
          type:String,
          required:true
      },
      mobile:{
          type:Number,
          required:true
      },
      active:{
          type:Boolean,
          default:true
      },
      user_type:{
        type:String,
        default:"normal_user"
      },
      password:{
        type:String,
        require:true
      },
      date:{
          type:Date,
          default: Date.now()
      }
  })
//create the modal
  const user = new mongoose.model("User", userCreateSchema)

//export to the user module
  module.exports = user