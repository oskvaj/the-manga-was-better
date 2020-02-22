import React from "react";
import "./App.css";
import data from "../../data";

let combined = { ...original, ...addThese };
console.log(combined);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {data
        .reduce((acc, item) => {
          let newTags = item.tags.map(tag => {
            return { [tag]: [] };
          });
          return { ...acc, ...newTags };
        }, {})

        .map(item => {
          return <p>{item}</p>;
        })}
      <body>
        <form>
          <input type="checkbox" name="Category" value="Isekai" /> Isekai
          <input type="checkbox" name="Category" value="Fantasy" /> Fantasy
          <input type="checkbox" name="Category" value="Ecchi" /> Ecchi
          <input type="checkbox" name="Category" value="Comedy" /> Comedy
          <input type="checkbox" name="Category" value="Romance" /> Romance
          <input type="checkbox" name="Category" value="Drama" /> Drama
          <input type="checkbox" name="Category" value="SliceOfLife" /> Slice Of
          Life
          <input type="checkbox" name="Category" value="Chinese" /> Chinese
          <input type="checkbox" name="Category" value="Korean" /> Korean
        </form>
      </body>
    </div>
  );
}

export default App;
