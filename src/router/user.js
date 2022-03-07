const express = require("express")
const router = express.Router()

router.get("/user", async(req,res, next)=>{
   try {
       res.status(200).json({msg:"you can use this"})
   } catch (error) {
       res.status(400).json(error)
   }
})

module.exports= router