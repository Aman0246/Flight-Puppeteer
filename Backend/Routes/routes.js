const express=require('express')
const { scrappigData } = require('../Controller/flight')
const routes=express.Router()

routes.get('/scrappigData',scrappigData)

module.exports={routes}