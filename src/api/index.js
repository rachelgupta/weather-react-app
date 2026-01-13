const baseURL = "https://api.weatherapi.com/v1/current.json?key=12d7551e592c49a0bc2103816261201";

export const getWeatherData = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`); 
    return await response.json();
};

export const getUserLocation = async(lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`); 
    return await response.json();
};