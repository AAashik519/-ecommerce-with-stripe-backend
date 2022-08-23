 require('dotenv')
 const mongoose= require('mongoose');
 const connectionStr=''
 mongoose.connect(connectionStr ,{useNewParser:true })
 .then(()=>console.log("connected to mongoDb") )
 .catch((err)=> console.log(err))