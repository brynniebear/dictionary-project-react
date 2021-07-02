import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <h4>Search for a word</h4>
        </header>
        <main className="App-main">
          <Dictionary defaultTerm="fly" />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/brynniebear/dictionary-project-react" target="_blank" rel="noreferrer">Open-sourced code</a>{" "}by Brynn Williams
        </footer>
      </div>
    </div>
  );
}

export default App;
