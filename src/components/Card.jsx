import React from "react";
import styles from "./Card.module.css";
//import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card(props) {
  // acá va tu código
  // origen imagen "http://openweathermap.org/img/wn/${props.img}@2x.png"
  //Alt 0176 para símbolo de grados
  const { max, min, name, img, onClose, primary } = props;

  console.log(max);

  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <span className={styles.name}>
        {name}
        {!primary && (
          <button className={styles.button} onClick={onClose}>
            {/*  <IoCloseCircleOutline /> */}
          </button>
        )}
      </span>

      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="imagen clima"
      />

      <div className={styles.temps}>
        <Temp label="Min  " temp={min} />
        <Temp label="Max  " temp={max} />
      </div>
    </div>
  );
}

//debería estar en un archiv aparte, mala práctica
function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{Math.round(temp / 10)} °C</span>
    </div>
  );
}
