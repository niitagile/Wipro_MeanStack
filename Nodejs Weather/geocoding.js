import fetch from 'node-fetch';

const response = await fetch('https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/37.8267,-122.4233');
const data = await response.json()

if(data)
{
    console.log(data.daily.summary+ ' It is currently ' +data.currently.temperature + ' degrees out. There is a ' +data.currently.precipProbability + '% chance of rain.');

}

else{
    console.log("Network Not found");
}





const response1 = await fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic2hhbGluaTk4IiwiYSI6ImNqejRsZDVlZDAybzEzZW56NXpxYTRwdG0ifQ.V_Oz9BJ972Q9Qvh9wMnpQQ&limit=1');
const data1 = await response1.json();
const latitude = data1.features[0].center[0]
  const longitude = data1.features[0].center[1]
     console.log(latitude, longitude)




