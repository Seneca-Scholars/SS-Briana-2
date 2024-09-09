import React, { useState, useEffect } from 'react';
import './App.css';
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const apiKey = 'AIzaSyC1HOdITdS-2b4X5L_nV9-Ziyg0sErFkzA'

function App() {
  //state variables + the functions to update w/ initial value
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    //async so the data is there before state is updated
    const fetchData = async () => {
      //url w/ the data being used
      const url = '/api/items'

      try {
        //requests data from url + waits for response
        const response = await fetch(url);

        //checks if response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        //changes response to json
        const result = await response.json();
        //updates data to json
        setData(result);

        //handles any errors + shows in console + updates error
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
  //calls function
  fetchData ();
}, []) //runs once

//handles changes in the form
const formChange = (event) => {

  //only affects the specfic field that changes
  const { name, value } = event.target; 

  //existing data is copied into new object + sets new value 
  setForm (prevFormData => ({
    ...prevFormData, 
    [name]:value
  })); 
};

// handles editing an individual item
const formEdit = (item) => {
  setForm({
    id: item.id,
    name: item.name,
    phone: item.phone,
    address: item.address
  });
};

// handles the delete button
const formDelete = (id) => {
  //makes sure that there aren't duplicates
  const newData = data.filter(item => item.id !== id);

  //updates data displayed
  setData(newData);
};

//handles form submission
const formSubmit = async (event) => {
  event.preventDefault();
  const url = '/api/items';

  //only updates it the id exists
  try {
    if (form.id) {
      //updates id found in the url
      const response = await fetch(`${url}/${form.id}`, {
        //update existing item
        method: 'PUT',
        //json format
        headers: { 'Content-Type': 'application/json' },
        //changes new data into json
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address
        })
      });

      //checks if response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      //changes response to json
      const updateItem = await response.json();

      //if a certain item is edited it's replaced
      setData(data.map(item => (item.id === form.id ? updateItem : item)));


    } else {
      const newData = {
        //spreads out the data entered in the form (name, phone, address)
        ...form,

        //makes sure the arrary of data entered is formatted correctly (new id # is +1 of previous or just 1)
        id: data.length ? Math.max (...data.map(item => item.id)) +1 : 1
      };

      setData([...data, newData]);
    } 
          
      //resets the form
      setForm({});

  } catch (error) {
    console.log(error);
    setError(error);
  }

};
 
//displays only 7 rows of data
const limitItems = data.slice (0, 7);

  return (
    <div className="app">
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {limitItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <button onClick={() => formEdit(item)}>Edit</button>
                  <button onClick={() => formDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <div className='input-box'>
      <form onSubmit={formSubmit}>
        <div>
          <label>Name:
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={formChange}
              placeholder='Enter Name'
            />
          </label>
        </div>

        <div>
          <label>Phone:
            <input
              type='text'
              name='phone'
              value={form.phone}
              onChange={formChange}
              placeholder='Enter Phone'
            />
          </label>
        </div>

        <div>
          <label>Address:
            <input
              type='text'
              name='address'
              value={form.address}
              onChange={formChange}
              placeholder='Enter Address'
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    <div className=''>
        {/* provides this section with the api + logs the success */}
        <APIProvider apiKey={apiKey} onLoad={() => console.log('Map successfully loaded!')}>
            <h3>Google Maps</h3>

            <div className='map-container'>
            <Map className='map'

              //intial settings of the map when the page is loaded
              defaultZoom={15}
              defaultCenter={ {lat:41.881832, lng:-87.623177 } }
            
              //logs changes made to map view + zoom
              onCameraChanged={(ev) => 
              console.log('camera changed:', ev.detail.center, 'zoom', ev.detail.zoom) 
              }
            />
            </div>
        </APIProvider>
      </div>
    </div>
  );
}

export default App;
