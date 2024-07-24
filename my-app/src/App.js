import './App.css';

function App() {

  const shoppinglist = {
    important1: "coffee grounds",
    important2: "milk",
    important3: "creamer",
    important4: "sugar",
    important5: "super cool mugs",

  }

  function listenForInput () {
    const emailInput = document.getElementById=("email-input");
    emailInput.addEventListener ('change',isEmailValid);
  }

  function isEmailValid () {
    const emailInput = document.getElementById=("email-input");
    console.log (emailInput.value);
  }
  
  return (
    <div className="App">
      <span>
        <header className="title">
          Welcome
        </header>
      </span>

      <span>
        <table className="table">
            <caption>
              Top Five Countries by Coffee Consumption - Annually
            </caption>
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
      </span>

      <div>
        <h2>Leave your email below for updates</h2>
        <forms>
          <input type="text" id="email-input" placeholder="Enter email" ></input>
          <button>Submit</button>
        </forms>
      </div>

      <div className="moreinfo">
        <h2>Want to learn more about coffee (of course you do) </h2>
        <h3>Click the article you wish to read</h3>
            <div>
            <a target="_blank" href="https://www.medicalnewstoday.com/articles/270202">
              <button className="button1"> Coffee's health benefits</button>
            </a>
            </div>
            <div>
            <a target="_blank" href="https://www.bbc.com/future/bespoke/made-on-earth/how-the-world-came-to-run-on-coffee/">
              <button className="button2">Coffee's rise to popularity</button>
            </a>
            </div>
      </div>

      <div>
        <img className="coolpic" src="coolpic2.png"></img>
      </div>

      <div>
        <select>
          <option>
            Select One
          </option>
            <option value="https://www.target.com/c/ground-coffee-beverages-grocery/-/N-x2hqv">
            {shoppinglist.important1}
            </option>
          <option value="https://www.target.com/c/milk-dairy-grocery/-/N-5xszh">
            {shoppinglist.important2}
          </option>
          <option>
            {shoppinglist.important3}
          </option>
          <option>
            {shoppinglist.important4}
          </option>
          <option>
            {shoppinglist.important5}
          </option>
        </select>
      </div>
      <h2>{shoppinglist.important1}{shoppinglist.important2}</h2>
    </div>

  )
}

export default App;
