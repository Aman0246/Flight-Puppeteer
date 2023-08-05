const { routes } = require("./Routes/routes")
const express=require('express')
require('dotenv').config()
const app =express()

app.use(express.json())
var cors = require('cors')
app.use(cors({origin: true, credentials: true}));
app.use('/',routes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
