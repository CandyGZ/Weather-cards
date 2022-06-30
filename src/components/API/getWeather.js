export const getWeather = async (ciudad) => {
  //Acá habría que hacer el llamado a la API para obtener los data de la ciudad
  //pero de momento agregaremos una ciudad por default para ver que funcione

  //const apiKey = process.env.REACT_APP_APIKEY;
  //o solo:  si es api key publica
  //const apiKey = "f75ab1978f916f7eefa3f6efc3c7d35b";

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${"f75ab1978f916f7eefa3f6efc3c7d35b"}&units=metric`
  );
  const data = await response.json();

  if (data.main !== undefined) {
    return {
      min: Math.round(data.main.temp_min),
      max: Math.round(data.main.temp_max),
      img: data.weather[0].icon,
      id: data.id,
      wind: data.wind.speed,
      temp: data.main.temp,
      name: data.name,
      weather: data.weather[0].main,
      clouds: data.clouds.all,
      latitud: data.coord.lat,
      longitud: data.coord.lon,
    };
  } else {
    return null;
  }
};
