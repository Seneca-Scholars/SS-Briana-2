import './App.css';

function App() {
  return (
   <div className="App">
      <header>
        <h1 className="title">
          Welcome
        </h1>
      </header>
      <div className="table">
        <div>
          <table>
            <caption>
              Top Five Countries by Coffee Consumption - Annually
            </caption>
            <br></br>
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">Kilograms per Capita</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Findland</th>
                <td>12</td>
              </tr>

              <tr>
                <th scope="row">Norway</th>
                <td>9.9</td>
              </tr>

              <tr>
                <th scope="row">Iceland</th>
                <td>9</td>
              </tr>

              <tr>
                <th scope="row">Denmark</th>
                <td>8.7</td>
              </tr>

              <tr>
                <th scope="row">Sweden</th>
                <td>8.2</td>
              </tr>

            </tbody>
          </table>
        </div>
        <br></br>
        <div>
          <img className="img" src="coolpic.png"></img>
        </div>
      </div>
      <br></br>
      <div className="button1">
        <a href="https://cssgridgarden.com/">
          <button>CLICK HERE</button>
        </a>
        </div>
        <div className="button2">
          <a href="https://cssgridgarden.com/">
            <button>OR HERE</button>
          </a>
        </div>
        <span className="groceries">
          <ol> 
            <li>chicken nuggets</li>
            <li>milk</li>
            <li>apples</li>
          </ol>
        </span>
      </div>
      

  )
}

export default App;
