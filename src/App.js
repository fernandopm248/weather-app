import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import General from './general';
import axios from 'axios';


function App() {
  const [location, setLocation] = useState(false)
  const [weather,setWeather] = useState(false)
 const [current,setCurrent] = useState({})
 const [temp,setTemp] = useState(false)
 


  let getWeather = async (lat, long) => {
    let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
    

    let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}/`)

    
    setWeather(req)

    console.log(weather)

}

useEffect(()=> {
  navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
      setCurrent({lat:position.coords.latitude,long: position.coords.longitude})
  })
}, [])

if(location == false) {
  return (
      <Fragment>
          Habilite sua localização para melhor uso da aplicação
      </Fragment>
  )
}else{
  return (
      <General Weather={weather}
      setWeather={setWeather} getWeather={getWeather} current={current} setTemp={setTemp} temp={temp}/>  
            
  );
}
}

export default App;
