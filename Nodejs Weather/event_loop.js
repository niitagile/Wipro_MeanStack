import fetch from 'node-fetch';

const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=ddc86edd60cfe92f8626665e2b1b8208');
const data = await response.json();

console.log(data.weather);

