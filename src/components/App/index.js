import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <form>
        <input type="checkbox" name="Category" value="Isekai"/> Isekai
        <input type="checkbox" name="Category" value="Fantasy"/> Fantasy 
        <input type="checkbox" name="Category" value="Ecchi"/> Ecchi 
        <input type="checkbox" name="Category" value="Comedy"/> Comedy
        <input type="checkbox" name="Category" value="Romance"/> Romance 
        <input type="checkbox" name="Category" value="Drama"/> Drama 
        <input type="checkbox" name="Category" value="SliceOfLife"/> Slice Of Life
        <input type="checkbox" name="Category" value="Chinese"/> Chinese 
        <input type="checkbox" name="Category" value="Korean"/> Korean 
        </form>
      </body>
    </div>
  );
}

export default App;
