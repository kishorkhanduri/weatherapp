import React from "react";
import {useWeather} from "../context/Weather";

const Input = () => {

  const weather = useWeather();
  return (
    <input
      className="input-field"
      value={weather.searchCity}
      placeholder="search here"
      onChange={(e)=> weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;