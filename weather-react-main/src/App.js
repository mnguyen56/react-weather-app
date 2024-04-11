import React, { useState } from 'react'
import sunset from './assets/sunset.jpg'
import Weather from './Components/Weather';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6f962a13ad54244b1caacafed48d160e`) //replace the appid with your own please!
        .then(res => setData(res.data))
        .catch(err => console.log(err));
        setLocation('');
    }
  }
  
  return (
    <div className='bg-cover bg-center h-screen w-full fixed' style={{ backgroundImage: `url(${sunset})` }}>
      <h1 className='pt-5 text-center text-5xl text-white font-sans font-semibold drop-shadow-lg'>Weatherly</h1>
      <div className='max-w-4xl m-auto text-center pt-5 opacity-85'>
        <input
          value={location}
          onKeyPress={searchLocation}
          onChange={event => setLocation(event.target.value)}
          type='text' placeholder='Search for City' className='pl-4 py-1.5 w-full drop-shadow-md rounded-full text-lg placeholder:text-black'></input>
      </div>
    <Weather data={data}/>
    </div>
  );

}

export default App;
