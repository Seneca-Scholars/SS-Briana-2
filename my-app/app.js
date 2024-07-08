import './App.css';

function App() {
    const bri = {
        height: "5'3",
        hairColor: "brown",
        shoeSize: "8.5",
    }

    return (
        <div className="App">
            <body>
                <table>
                <caption>
                    Top Five Countries by Coffee Consumption - Annually
                </caption>
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
            </body>
        </div>

    )
}