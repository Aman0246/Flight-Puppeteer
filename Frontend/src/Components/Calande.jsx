import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function Calander({setDateData,DateData}) {
  
  const handleDateChange = (date) => {
    setDateData(date ? date.$d : null); // Store the selected date in the state
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['Select date']}>
        <DatePicker value={DateData} onChange={handleDateChange} label="Select date" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
