import { Paper } from '@mui/material';
import react from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  return (
    <div style={{boxShadow: "0px 0px 20px rgb(171 171 171)",height:"100%"}}>
        <Calendar/>
    </div>
  )
}

export default Calender
