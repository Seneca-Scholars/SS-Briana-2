import React from 'react';
import { Link } from 'react-router-dom';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='directory'>
                <div className='footer-home'>
                    <Link to="/"><h4>Home</h4></Link>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </div>

                <div className='footer-maps'>
                    <Link to="/maps"><h4>Maps</h4></Link>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </div>

                <div className='footer-table'>
                    <Link to="/table"><h4>Table</h4></Link>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </div>

                <div className='footer-events'>
                    <Link to="/events"><h4>Events</h4></Link>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </div>

                <div className='footer-contact-pages'>
                    <h4>Contact Pages</h4>
                    <Link to="/Phineas"><p>Phineas</p></Link>
                    <Link to="/Ferb"><p>Ferb</p></Link>
                    <Link to="Doofenshmirtz"><p>Doofenshmirtz</p></Link>
                    <Link to="/MajorMonogram"><p>Major Monogram</p></Link>
                </div>

            </div>

            <div className='footer-site-info'>
                    <h4>Perry's Secret Lair</h4>
                    <CropOriginalIcon className="icons" style={{ fontSize: '50px' }} />
                    <p>Danville Tri-state area</p>
                    <p>222-222-2222</p>
                </div>
        </div>
    )
}