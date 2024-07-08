const express = require('express');
// import the port number serverconfig file
const serverConfig = require('./config/serverConfig')
//import the db file to connect server file to database
const connectDB = require('./config/dbConfig');

const app = express();
// use middleware for the deserialization/ data parsing
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.listen(serverConfig.PORT,async()=>{
    await connectDB()
    console.log(`Server started at port ${serverConfig.PORT}`)
})

