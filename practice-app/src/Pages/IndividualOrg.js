import React, { useEffect, useState } from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import Button from '@mui/material/Button';

export const IndividualOrg = () => {

    return (
        <div>
            <div className='ind-header'>
                <h3>Name of Organization</h3>
            </div>

            <div className='ind-info'>
                <div className='ind-overall-info'>
                    <div>
                    <div className='ind-mission'>
                        <h4>Mission Statement</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>

                    <div className='ind-services'>
                        <h4>Services</h4>
                        <p>Lorem ipsum dolor sit amet<br /> consectetur adipiscing elit <br />  sed do eiusmod tempor incididunt ut <br />  labore et dolore magna aliqua.</p>
                    </div>
                    </div>

                    <div className='ind-address'>
                        <CropOriginalIcon className="icons" style={{ fontSize: '280px' }} />
                        <p>Address:<br />1234 S Street St City, State 12345</p>
                    </div>
                </div>

                <div className='opportun-available'>
                    <div>
                    </div>
                </div>

                <div className='ind-add-info'>
                    <div className='hours'>
                        <h4>Hours of Operation</h4>
                        <p>
                            Sunday: 10:00am - 4:00pm <br />
                            Monday: 10:00am - 4:00pm <br />
                            Tuesday: 10:00am - 4:00pm <br />
                            Wednesday: 10:00am - 4:00pm <br />
                            Thursday: 10:00am - 4:00pm <br />
                            Friday: 10:00am - 4:00pm <br />
                            Saturday: 10:00am - 4:00pm
                        </p>
                    </div>

                    <div className='contact'>
                        <h4>Contact</h4>
                        <p>
                            Mailing Address: 1234 S Street St <br /> City, State 12345 <br />
                            Phone: 222-222-2222 <br />
                            Email: perrysnumber1fan@gmail.com <br />
                            Social Media: @hiperrytheplatypus
                        </p>
                    </div>

                    <div className='additional'>
                        <h4>Additional Info</h4>
                        <a href="https://phineasandferb.fandom.com/wiki/Perry_the_Platypus"><Button className="nav-btn" variant="contained" color='warning' style={{ fontSize: '30px', marginBottom: '50px' }}>Org Home Page</Button></a><br />
                        <Button className="nav-btn" variant="contained" color='warning' style={{ fontSize: '30px' }}>Donate</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}