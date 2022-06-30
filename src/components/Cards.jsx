import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  // acá va tu código
  //Cards nos manda data en un atributo que se llama cities, linea 23 de App.js, si se pudiera modificar la linea 4 se sustituye props por cities y es más facil
  console.log(props); // vemos que trae un array de cities
  //podria destructurarse así:
  const { cities } = props;
  //console.log(cities);

  return (
    <div className={styles.cards}>
      {cities.map((city) => (
        <Card
          key={city.name}
          name={city.name}
          min={city.main.temp_min}
          max={city.main.temp_max}
          /*en el archivo data vemos de dónde vienen los datos y el nombre  */
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  );

  // otra forma es copiando todos los datos que nos piden de APP.js sustituyendo Cairns por el nombre de la función
  // return <div>Cards Component</div>;
  /*   props.cities?.map(c => (
    <Card
      key={c.id}
      max={c.main.temp_max}
      min={c.main.temp_min}
      name={c.name}
      img={c.weather[0]}.icon}
      onClose={() => alert(c.name)}
  ) */
}
