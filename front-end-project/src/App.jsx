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
      const url = 'https://jsonplaceholder.typicode.com/users';

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
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}


export default App;
