import './App.css';

let currentOffset = 0;
let currentLimit = 10;

function App() {

  const numberClicked = event.target.attributes["data-num"].nodeValue;

  const fetchData = aysnc () => {
    try {
      const response = await fetch ("https://pokeapi.co/api/v2/pokemon/" + numberClicked + "/")
    }
  }


  return (
    <div className="app">
      <header className="app-header">
        Next Project
      </header>
      <body>
      <div className="main">
        <table id="">
          <thead>
            <tr>
              <th>Numbers</th>
              <th>Letters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>abcd</td>
            </tr>
            <tr>
              <td>1234</td>
              <td>abcd</td>
            </tr>
            <tr>
              <td>1234</td>
              <td>abcd</td>
            </tr>
            <tr>
              <td>1234</td>
              <td>abcd</td>
            </tr>
          </tbody>
        </table>
      </div>
      </body>
    </div>
  );
}


export default App;
