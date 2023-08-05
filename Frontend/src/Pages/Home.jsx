import { Box } from '@mui/material'
import React, { useState } from 'react'
import Topsection from '../Components/Topsection'
import styled from '@emotion/styled';


export default function Home() {

    
      
    const [DateData, setDateData] = useState(null);
    const [fromd,setformd]=useState(null)
    const [tod,settod]=useState(null)

  return (
    <Box>
        <Box>
      <Topsection fromd={fromd} setformd={setformd} tod={tod} settod={settod}  DateData={DateData} setDateData={setDateData}></Topsection>
     

        </Box>
    </Box>
  )
}
