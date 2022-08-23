 require('dotenv').config()
 const mongoose= require('mongoose');

 const connectionStr=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.faozt.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`

 mongoose.connect(connectionStr ,{useNewUrlparser: true})
 .then(()=>console.log("connected to mongoDb") )
 .catch(err => console.log(err))


 mongoose.connection.on('error', err=>{
    console.log('err')
 })