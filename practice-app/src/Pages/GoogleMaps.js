import React from 'react';
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const apiKey = 'AIzaSyC1HOdITdS-2b4X5L_nV9-Ziyg0sErFkzA'

export const MapComponent = () => {
    return (
      <div className='map-container'>
        {/* provides this section with the api + logs the success */}
        <APIProvider apiKey={apiKey} onLoad={() => console.log('Map successfully loaded!')}>
            <Map className='map'

              //intial settings of the map when the page is loaded
              defaultZoom={15}
              defaultCenter={ {lat:41.881832, lng:-87.623177 } }

              //logs changes made to map view + zoom
              onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom', ev.detail.zoom)
              }
            />
        </APIProvider>
      </div>
    )
}
