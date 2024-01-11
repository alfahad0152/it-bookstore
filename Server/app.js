const express = require('express')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const webRouter = require('./routers/WebRouter')
const authRouter = require('./routers/AuthRouter')
const fileUpload = require('express-fileupload')
const cors = require('cors')

dotenv.config();
const server = express()
server.use(cors())
server.use(express.urlencoded())
server.use(express.json())
server.use(fileUpload())

server.get("/",(request,response)=>{
    response.setHeader('Content-Type','text/html')
    response.send(fs.readFileSync(path.join(__dirname,"apiDocs.html"),'utf-8'))
})

server.use("/store",webRouter)
server.use("/auth",authRouter)

server.listen(process.env.PORT,()=>{
    console.log(`Server Started http://localhost:${process.env.PORT}`)
})