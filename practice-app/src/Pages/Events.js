import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Link } from 'react-router-dom';

export const Events = () => {
    return (
        <div className='events-page'>
            <h3>"-Inators" Being Built by Doofenshmirtz</h3>
            <div className='calendar'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{
                        color: ' #24a7a1',
                        borderRadius: '80px',
                        borderColor: '#2196f3',
                        border: '1px solid',
                        backgroundColor: 'white',
                        width: '1800px',
                        height: '600px',
                        padding: '400px',

                    }}>
                        <DateCalendar sx={{
                            transform: 'scale(3.5)',
                            '& .MuiDayPicker-day': {
                                fontSize: '1.5rem'
                            },
                            '& .MuiDayPicker-weekdayLabel': {
                                fontSize: '1.25rem',
                            }
                        }} />
                    </Box>
                </LocalizationProvider>
                <div className='inator-selected'>
                    <h3>"-Inator" Selected</h3>
                    <p>
                        Address: 123 S Street St <br />
                        Time: 3pm-5pm <br />
                        Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div className='inator-list'>
                <div className='inator-item'>
                    <CropOriginalIcon className="icons" style={{ fontSize: '100px' }} />

                    <div>
                    <h3>Destruct-inator</h3>
                    <p>Organization's name</p>
                    <p><Link to="/IndividualOrg">More Info</Link></p>
                    </div>
                </div>

                <div className='inator-item'>
                    <CropOriginalIcon className="icons" style={{ fontSize: '100px' }} />

                    <div>
                    <h3>Deflate-inator</h3>
                    <p>Organization's name</p>
                    </div>
                </div>

                <div className='inator-item'>
                    <CropOriginalIcon className="icons" style={{ fontSize: '100px' }} />

                    <div>
                    <h3>Age-Accelerator-inator</h3>
                    <p>Organization's name</p>
                    </div>
                </div>

                <div className='inator-item'>
                    <CropOriginalIcon className="icons" style={{ fontSize: '100px' }} />

                    <div>
                    <h3>Copy-and-Paste-inator</h3>
                    <p>Organization's name</p>
                    </div>
                </div>

                <div className='inator-item'>
                    <CropOriginalIcon className="icons" style={{ fontSize: '100px' }} />

                    <div>
                    <h3>Monster-Truck-Away-inator</h3>
                    <p>Organization's name</p>
                    </div>
                </div>

                <div className='inator-item'>
                    <CropOriginalIcon className="icons" style={{ fontSize: '100px' }} />

                    <div>
                    <h3>Freez-inator</h3>
                    <p>Organization's name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}