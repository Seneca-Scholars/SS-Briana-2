import './App.css';


function App() {
  return (
    <div className="App">
        <header> 
        <h1>
          Welcome
        </h1>
       <p>
         <table>
          <caption>
             Top Five Countries by Coffee Consumption - Annually
          </caption>
          <br></br>
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Kilograms per Capita</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Findland</th>
              <td>12</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Norway</th>
              <td>9.9</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Iceland</th>
              <td>9</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Denmark</th>
              <td>8.7</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Sweden</th>
              <td>8.2</td>
            </tr>
          </tbody>
          </table>
    </p>
      </header>
    </div>
  );
}

export default App;
