import { createContext, useContext, useState } from "react";
import { getWeatherData, getUserLocation } from "../api/index";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const fetchData = async () => {
    const response = await getWeatherData(searchCity);
    setData(response);
  };

  const fetchDataByLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      await getUserLocation(latitude, longitude).then((data) =>
        setData(data)
      );
    });
  };

  return (
    <WeatherContext.Provider
      value={{ data, searchCity, setSearchCity, fetchData, fetchDataByLocation }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
