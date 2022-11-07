import logo from "./bjlogo.png";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Random Quote Generator</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = { quote: "" };
  }

  componentDidMount() {
    this.getNewQuote();
  }
  getNewQuote = () => {
    this.setState({ quote: "" });

    fetch("http://localhost:3000/quotes")
      .then((res) => res.json())

      .then((quote) => {
        this.setState({ quote });
      });
  };

  render() {
    const { quote } = this.state;
    // console.log("QUOTES: ", quote);

    return (
      <div className="app">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="header">Quotes from the show</h1>
        <div className="box">
          <p className="quote">
            {quote[Math.floor(Math.random() * quote.length)]}
          </p>
        </div>
        <button onClick={this.getNewQuote}>New Quote</button>
      </div>
    );
  }
}

export default App;
