import { Fragment, useState,useEffect } from "react";
import SearchArea from "./search";
import Button from './Button'
import './today.css'
import  './search.css'
import axios from "axios";
import nuvem from './nuvem.png'
import tempConvert from './tempConvert'

export default function Today({Weather,setWeather,getWeather,current,temp,setTemp}){
    const[cidade,setCidade] = useState('')
    const{lat,long} = current
    const maxT = (temp ? tempConvert(Math.round(Weather && Weather.data.consolidated_weather[0].the_temp)) + 'ºF' : Math.round(Weather && Weather.data.consolidated_weather[0].the_temp) + 'ºC')

    

    const[pageview,setPageView] = useState(true)
    const handleClickPageView = () => {
setPageView(false)
    }
    const Backpage = () => {
        setPageView(true)
            }
               
 const searchCity = async () => {
     try{

    console.log(cidade)
    let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${cidade}`)
    

    let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}/`)

    
    setWeather(req) 
    setPageView(true)  
     } catch(e) {
         console.log('erro')
         
         
     }

 } 


 const getPresetCity = async (label) => {
    let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${label}`)
    

    let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}/`)

    
    setWeather(req) 
    setPageView(true)  
    console.log(res)




 }
 
 
 

return(
    <div className="today">

        {pageview ?
    <Fragment>
        <div className="wrapper-left">
            <img className="nuvem"   src={nuvem}/>
            <img className="nuvem1"   src={nuvem}/>
            <img className="nuvem2"   src={nuvem}/>
            <img className="nuvem3"   src={nuvem}/>
            <div className="botao">
            <Button className="search" onClick={handleClickPageView} label="search for places" />
            <button className="simbolo" onClick={() => getWeather(lat,long)}> <span class="material-icons">gps_fixed</span></button> 
            
            </div>
            <div className="infos">
            <img className="icone" src={`https://www.metaweather.com/static/img/weather/${Weather && Weather.data.consolidated_weather[0].weather_state_abbr}.svg`}/>
            <p className="graus">{`${maxT} º`}</p>
            <p className="clima">{`${Weather && Weather.data.consolidated_weather[0].weather_state_name}`}</p>
           <div className="baixo">
            <span className="mini">today</span>
            <span className="mini">-</span>
            <span className="mini">{`${Weather && Weather.data.consolidated_weather[0].applicable_date.slice(5)}`}</span>
            <div className="ponto">
            <span class="material-icons">place</span>
            <p className="cidade">{`${Weather && Weather.data.title}`}</p>
            
            </div>
            
            </div>

 </div>          
</div>




    </Fragment>
        :
        <div className="hoje">
        <div className="search-area">
        <Button className="voltar" onClick={Backpage} label="x"></Button>
<label>
    <input type="text" className="procura" placeholder="search location" onChange={event => setCidade(event.target.value)}></input>

    <Button label="search " className="botsearch" onClick={searchCity}>Search</Button>

    <div className="preset">
    <Button label="london" className="presetb" onClick={getPresetCity}>Search</Button>
    <Button label="seoul" className="presetb" onClick={getPresetCity}>Search</Button>
    <Button label="berlin" className="presetb" onClick={getPresetCity}>Search</Button>



    </div>



</label>






    </div>
    </div>
    
    
    
    
    }



    </div>



)
}