import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { airports } from './data'
import Calendar from './Calande'
import Button from '@mui/material/Button';
import dayjs from 'dayjs'; // Import dayjs library
import axios from 'axios';
import Switch from '@mui/material/Switch';
import CircularProgress from '@mui/material/CircularProgress';
import toast from 'react-hot-toast';
import CardDetail from './CardDetail';
export default function Topsection({ setDateData, DateData, fromd, setformd, tod, settod }) {
    const [visible, setvisible] = useState(false)
    const [loading, setloading] = useState(false)
    const [backendData, setbackendData] = useState([])
    const change = () => {
        setvisible(!visible);
    }
    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const handlechange = (e) => {
        setformd(e.target.value)
    }
    const handlechange2 = (e) => {
        settod(e.target.value)
    }

    const handleSubmit = async () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (currentYear > dayjs(DateData).format('YYYY')) return toast("wrong Date")
        let dattoSend = { from: fromd, to: tod, months: currentYear < dayjs(DateData).format('YYYY') ? monthsArray[parseInt(dayjs(DateData).format('MM'))] + " " + dayjs(DateData).format('YYYY') : monthsArray[parseInt(dayjs(DateData).format('MM'))], date: dayjs(DateData).format('DD'), visible: visible }
        setloading(true)
        await axios.post('/scrappigData', dattoSend).then((e) => {
            if (e.data.status == false) {setloading(false) 
                toast.error(e.data.message)}
            if (e.data.status == true) {
                // console.log("hellow")
                setloading(false)
                setbackendData(e.data.data)
            }

        })
    }
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 2, alignItems: 'center' }} >
                <Box sx={{ width: '40%', margin: 'auto', marginTop: '5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <Box >

                        <Box sx={{ padding: 1 }} >
                            <FormControl fullWidth>
                                <InputLabel id="menu">From</InputLabel>
                                <Select onChange={handlechange} labelId="menu" id="menu-list" label="cources">
                                    {airports.map(e => <MenuItem value={e}>{e}</MenuItem>)}
                                </Select>
                            </FormControl>


                        </Box>
                        <Box sx={{ padding: 1 }} >
                            {loading ? 
                        <CircularProgress color="secondary" sx={{position:'absolute',right:'50%'}} />:""
                            }
                            <FormControl fullWidth>
                                <InputLabel id="menu">To</InputLabel>
                                <Select onChange={handlechange2} labelId="menu" id="menu-list" label="cources">
                                    {airports.map(e => <MenuItem value={e}>{e}</MenuItem>)}
                                </Select>
                            </FormControl>

                        </Box>

                        <Box sx={{ padding: 1 }}>
                            <Calendar setDateData={setDateData} DateData={DateData} />
                        </Box>
                        <Box sx={{ padding: "2px", display: 'flex', justifyContent: 'space-between' }} >
                            <Button sx={{ marginRight: "0px" }} onClick={handleSubmit} variant="contained">Find</Button>
                            <Switch onClick={change} title={visible ? "off to get Data only" : "on to see Process"} />
                        </Box>

                    </Box>
                </Box>

                {backendData.length > 0 && backendData.map(item => (
                    <Box sx={{ width: '40%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: "10px" }}>
                        <CardDetail item={item}></CardDetail>
                    </Box>
                ))}


            </Box>
        </Box>
    )
}
