import './App.css';

function App() {
    const bri = {
        height: "5'3",
        hairColor: "brown",
        shoeSize: "8.5",
    }

    return (
        <div className="App">
            <header>
                <h1> My App</h1>
            </header>
            <p>
                <ol>
                    <li> {bri.hairColor} </li>
                    <li> {bri.height} </li>
                    <li> {bri.shoeSize} </li>
                </ol>
            </p>
        </div>

    )
}

export default App;