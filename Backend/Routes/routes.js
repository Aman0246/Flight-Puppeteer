const express=require('express')
const { scrappigData } = require('../Controller/flight')
const routes=express.Router()

routes.post('/scrappigData',scrappigData)

module.exports={routes}