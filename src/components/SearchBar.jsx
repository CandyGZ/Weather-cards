import React from "react";
import { IoAdd } from "react-icons/io5"; //npm install react-icons
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  // onSearch={(ciudad) => alert(ciudad)}
  //destructuring:
  const { OnSearch } = props;
  const searchCity = document.getElementById("search_ciudad".value); //OJO, no es parte de la tarea, es solo una prueba
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="text"
        id="searchInput"
        placeholder="Ciudad..."
      />
      {/*  <button
        classNAme={styles.button}
        id="searchButton"
        onClick={() => OnSearch(searchCity)}
      >
        <IoAdd />
      </button>{" "}
      {/* sin parentesis se ejecutaria al ejecutarse el código */}{" "}
      */}
    </div>
  );
  //return <div>Search Bar Component</div>;
}
