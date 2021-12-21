
import { Fragment } from 'react'
import BotClima from './botaoclima'
import BotClima2 from './Botaoclima2'
import BotClima3 from './botaoclima3'
import Button from './Button'
import React from 'react'
import './general.css'
import Today from './today'
import HumidityBar from './humidity'
import styled from 'styled-components'
import tempConvert from './tempConvert'





export default function General({ Weather,setWeather,getWeather,current,setTemp,temp }){

    const f = () => {
        setTemp(true)



    }
    const c = () => {
        setTemp(false)



    }
    const dias = Weather.data?.consolidated_weather



    const WindDirection = styled.div `
        width: 15px;
        height: 15px;
        clip-path: polygon(100% 50%, 0% 100%, 25% 50%, 0% 0%);
        background-color: white;
        transform: rotate(${Weather&&Weather.data.consolidated_weather[0].wind_direction.toFixed(0)}deg);
        margin-left:78px;
        padding:5px;
        margin-right:10px;
        background-color: white;
        margin-bottom:6px;
        

        
        `
    
    return(
        <div className="pai">


            
            <Today Weather={Weather} setWeather={setWeather} getWeather={getWeather} current={current} temp={temp} setTemp={setTemp}/>
            
                
   
<div className="wrapper-right">
    <div className="infos-right">
        <div className="botao2">
        <Button className="f" onClick={f} label="ºF"></Button>
        <Button className="c" onClick={c} label="ºC"></Button>
        </div>
        <div className="paibotao">

        
{dias?.map((atribute,key) => {
    
    const maxT = (temp ? tempConvert(Math.round(atribute.max_temp)) + 'ºF' : Math.round(atribute.max_temp) + 'ºC')
    const minT = (temp ? tempConvert(Math.round(atribute.min_temp)) + 'ºF' : Math.round(atribute.min_temp) + 'ºC')
    if (key >= 1){
        return(
            <Fragment>
            <BotClima label={`${atribute.applicable_date.slice(5)}`} temperatura={`${maxT}   ${minT} `}  icone={atribute.weather_state_abbr}/>
          
            </Fragment>
        )


    }
    



})}
      
       </div>
       <div className="textotoday">
       <p className="todayhigh">today´s highlights</p>
       </div>
       <div className='paibotao2'>
           <div className="compasso">
           
           <BotClima2  className="wind-status" label={`${Math.round(Weather && Weather.data.consolidated_weather[0].wind_speed)} mph`}  description="Wind Status" complementh={<WindDirection/>} symbol={`'${(Weather && Weather.data.consolidated_weather[0].wind_direction_compass)}'`}/>
           
            </div>
           <BotClima2 className="wind-status" label={`${Weather && Weather.data.consolidated_weather[0].humidity}%`} description="Humidity" complementh={<HumidityBar p={`${Weather && Weather.data.consolidated_weather[0].humidity}`}/>} />
           <BotClima3 className="wind-status" description="Visibility" label={`${Weather && Weather.data.consolidated_weather[0].visibility.toFixed(1)} miles `} />
           <BotClima3 className="wind-status" description="Air Pressure" label={`${Weather && Weather.data.consolidated_weather[0].air_pressure}mb`} />
       </div>
          <footer className='creator'>created by fernando moreira</footer>
            
            </div>
            


</div>
</div>

       


    )
}