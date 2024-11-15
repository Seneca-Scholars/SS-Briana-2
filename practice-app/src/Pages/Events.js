import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';

export const Events = () => {
    return (
        <div className='events-page'>
            <div className='calendar'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{
                        color: ' #24a7a1',
                        borderRadius: '10px',
                        borderColor: '#2196f3',
                        border: '1px solid',
                        backgroundColor: 'white',
                        width: '600px',
                        height: '600px',
                    }}>
                        <DateCalendar sx={{

                        }} />
                    </Box>
                </LocalizationProvider>
                <div className='event-selected'>
                    <h3>Event Selected</h3>
                    <p>
                        Address: 123 S Street St <br></br>
                        Time: 3pm-5pm <br></br>
                        Short Description:
                    </p>
                </div>
            </div>
        </div>
    )
}