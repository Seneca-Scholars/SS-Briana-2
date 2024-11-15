import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const FerbContact = () => {

    const [time, setTime] = React.useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className='contact-page'>
            <h3>Fill out this form to contact Ferb but only contact if it is an EMERGENCY!</h3>

            <div className='contact-form'>
                <div className='form-topic'>
                    <h4>Topic</h4>
                    <input placeholder='Enter the topic here'></input>
                </div>

                <div className='current-location'>
                    <h4>Current Location</h4>
                    <input placeholder='Enter current location'></input>
                </div>

                <div className='time-needed'>
                    <h4>Time Needed</h4>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-label" sx={{ color: 'white', fontSize: '20px' }}>Time</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={time}
                            label="Time"
                            onChange={handleChange}
                            sx={{ color: 'white', fontSize: '20px', width: '200px', borderColor: 'white'}}
                            >
                            <MenuItem value={10}>9:00 am</MenuItem>
                            <MenuItem value={20}>10:00 am</MenuItem>
                            <MenuItem value={30}>11:00 am</MenuItem>
                            <MenuItem value={40}>12:00 pm</MenuItem>
                            <MenuItem value={50}>1:00 pm</MenuItem>
                            <MenuItem value={60}>2:00 pm</MenuItem>
                            <MenuItem value={70}>3:00 pm</MenuItem>
                            <MenuItem value={80}>4:00 pm</MenuItem>
                            <MenuItem value={90}>5:00 pm</MenuItem>
                            <MenuItem value={100}>6:00 pm</MenuItem>
                            <MenuItem value={110}>7:00 pm</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className='form-details'>
                    <h4>Details</h4>
                    <input placeholder='Enter the specific details here'></input>
                </div>
            </div>
        </div>
    )
}