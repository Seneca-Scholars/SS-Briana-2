import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export const DoofenshmirtzContact = () => {

    const [time, setTime] = React.useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div className='contact-page'>
            <h3>Fill out this form to contact Dr Doofenshmirtz. Although, I'm not sure why you would want to.</h3>

            <div className='contact-form'>
                <div className='form-topic'>
                    <h3>Topic:</h3>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '800px', marginBottom: '100px'} }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="Topic" variant="outlined" />
                    </Box>
                </div>

                <div className='form-location'>
                    <h3>Location:</h3>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '800px', color: 'white', marginBottom: '100px' } }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="Location" variant="outlined" />
                    </Box>
                </div>

                <div className='form-time'>
                    <h3>Time:</h3>
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl sx={{ m: 1, width: '800px' }}>
                            <InputLabel id="demo-simple-select-label" sx={{ fontSize: '20px' }}>Time</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={time}
                            label="Time"
                            onChange={handleChange}
                            sx={{ fontSize: '20px', width: '100%', borderColor: 'white', marginBottom: '100px' }}
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
                    <h3>Details:</h3>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '800px', marginBottom: '100px' } }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="Details" variant="outlined" />
                    </Box>
                </div>

            </div>
        </div>
    )
}
