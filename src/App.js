import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={(ciudad) => alert(ciudad)} />
        </div>
        <div className={styles.citiesContainer}>
          <Card
            primary
            max={270}
            min={220}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />

          <Cards cities={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
