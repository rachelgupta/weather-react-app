import "./App.css";
import { useEffect } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();

  useEffect(() =>{
    weather.fetchDataByLocation();
  },[]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
    </div>
  );
} 

export default App;
