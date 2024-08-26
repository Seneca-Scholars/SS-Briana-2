import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  //state variables + the functions to update w/ initial value
  const [data, setData] = useState([]);
  const [form, setForm] = useState([]);
  const [error, setError] = useState (null);
  
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
        console.log ('error')
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

const formEdit = (event) => {

}

const formDelete = (event) => {

}
 
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
          </tr>
        </thead>
        <tbody>
{/*makes rows + columns for each object*/}
          {limitItems.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form>
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
            placeholder='Enter Phone #'
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
      </form>

      <div>
        <button onClick= {() => formEdit(item)}>Edit</button>
        <button onClick= {() => formDelete(item.id)}>Delete</button>
      </div>
    </div>
  </div>
);
}

export default App;
