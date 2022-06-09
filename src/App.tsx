import React from "react";
import "./App.scss";
import Cards from "./components/cards/Cards";

export interface CardProps {
  id?: any;
  card_name?: string;
  card_last_four?: string;
  expiry?: string;
  colour?: string;
}

function App() {
  return (
    <section className="App">
      <h3 className="title">Cards</h3>
      <Cards />
    </section>
  );
}

export default App;
