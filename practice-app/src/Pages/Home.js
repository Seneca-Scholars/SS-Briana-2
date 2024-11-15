import React, { useState, useEffect } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import GiteIcon from '@mui/icons-material/Gite';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export const HomePage = () => {
  const carouselData = ["1", "2", "3", "4"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // handles when the carousel scrolls
  const carouselScroll = () => {
    //updates what is shown based on what was previously shown/what is after that box + loops back to index 1 at the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  // automatically goes to the next box every 4 seconds
  useEffect(() => {
    const interval = setInterval(carouselScroll, 4000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="home-container">
      <h3>Welcome to Perry's Secret Lair...</h3>

      <div className="perry-life">
        {carouselData.map((item) => ( // carousel loops over each step
          <div
            key={item}
            className={`step-${item}`} // sets class name based on which item it is
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move to the next step + make it 100% visible
            }}>
            {item === "1" && (
              <><h3>Step 1: Break into Doofenshmirtz's Evil Inc.</h3>
                <ApartmentIcon className="icons" style={{ fontSize: '200px' }} />
              </>)}

            {item === "2" && (
              <><h3>Step 2: Stop him from using his new invention</h3>
                <CancelScheduleSendIcon className="icons" style={{ fontSize: '200px' }} />
              </>)}

            {item === "3" && (
              <>
                <h3>Step 3: Escape with style</h3>
                <AirlineStopsIcon className="icons" style={{ fontSize: '200px' }} />
              </>
            )}
            {item === "4" && (
              <>
                <h3>Step 4: Return home and take off fedora immediately</h3>
                <GiteIcon className="icons" style={{ fontSize: '200px' }} />
              </>
            )}
          </div>
        ))}
      </div>

      <div className='upcoming-events'>
        <h3>Upcoming Events</h3>
        <div  className='events'>

          <div className='row-1'>
            <div className='event'>
            <CropOriginalIcon className="icons" style={{ fontSize: '200px' }} />
            <h4>Event 1 @ 4pm</h4>
            <p>At this event you will be ....</p>
            </div>
            <div className='event'>
            <CropOriginalIcon className="icons" style={{ fontSize: '200px' }} />
            <h4>Event 1 @ 4pm</h4>
            <p>At this event you will be....</p>
            </div>
          </div>

          <div className='row-2'>
            <div className='event'>
            <CropOriginalIcon className="icons" style={{ fontSize: '200px' }} />
            <h4>Event 1 @ 4pm</h4>
            <p>At this event you will be....</p>
            </div>
            <div className='event'>
            <CropOriginalIcon className="icons" style={{ fontSize: '200px' }} />
            <h4>Event 1 @ 4pm</h4>
            <p>At this event you will be....</p>
            </div>
          </div>

          <div className='row-3'>
            <div className='event'>
            <CropOriginalIcon className="icons" style={{ fontSize: '200px' }} />
            <h4>Event 1 @ 4pm</h4>
            <p>At this event you will be....</p>
            </div>
            <div className='event'>
            <CropOriginalIcon className="icons" style={{ fontSize: '200px' }} />
            <h4>Event 1 @ 4pm</h4>
            <p>At this event you will be....</p>
            </div>
          </div>

        </div>
      </div>

      <div className="spotlight">
        <div className="spotlight-logo">
          <CropOriginalIcon className="icons" style={{ fontSize: '600px' }} />
        </div>

        <div className="spotlight-text">
          <h3>November's Spotlight: Disney Channel</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
