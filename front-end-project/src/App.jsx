import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  //state variables + the functions to update w/ initial value
  const [data, setData] = useState([]);
  const [error, setError] = useState (null);
  
  useEffect(() => {
    //async so the data is there before state is updated
    const fetchData = async () => {
      //url w/ the data being used
      const url = 'http://localhost:3000/api/items'

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
 
//displays only 7 rows of data
const limitItems = data.slice (0, 7);

return (
  <div className="app">
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
{/*makes rows + columns for each object*/}
          {limitItems.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}


export default App;
