
import React, {Component} from 'react'
import NumberList from "./NumberList";


const numeri = [1, 2, 3, 4, 5, 7, 8, 9, 10];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
    
          <h1 className="App-title">Stampare in pagina i numeri da 1 a 10 in colonna</h1>
        </header>

        <NumberList numeri={numeri} />,
      </div>
    );
  }
}
export default App;