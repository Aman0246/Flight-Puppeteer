import { Box } from '@mui/material'
import React from 'react'

export default function CardDetail({item}) {
    // console.log("item",item)
  return (
    <Box sx={{background:'#ffdae199'}}>
      <Box sx={{padding:1,display:'flex',gap:2,}}>
        <Box>
        <img style={{width:"3rem",height:'3rem',borderRadius:'50%'}} src={item.flightimg[0]||"https://imgs.search.brave.com/sqlzSg7DDHpuG8dcUIxlx7U-RbE6G6BlMtGXW2OYhEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzAxLzQ3LzI4/LzM2MF9GXzE0NzI4/MjFfa01qY1UwRWw4/TmtjVTBrN3pOdGxW/VFUwRmw4VzJsLmpw/Zw"} alt="Logo"/>
        </Box>
        <Box>

        <Box sx={{fontSize:"20px",color:'Black'}}>{item.flightname}</Box>
        <Box sx={{fontSize:"18px",color:'green'}}>{item.ticketPrice}</Box>
        <Box sx={{fontSize:"16px",color:'#717070'}}>{item.flightinfo}</Box>
        
        </Box>

      </Box>
    </Box>
  )
}
