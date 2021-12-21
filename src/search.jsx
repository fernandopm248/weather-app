import React,{Fragment, useState} from "react";
import Button from "./Button";
import  './search.css'

export default function SearchArea(){
const[cidade,setCidade] = useState('')
console.log(cidade)

return(
    <div className="search-area">
        <Button className="voltar"  label="x"></Button>
<label>
    <input type="text" className="procura" placeholder="search location" onChange={event => setCidade(event.target.value)}></input>

    <Button label="search" className="botsearch">Search</Button>



</label>






    </div>




)

}