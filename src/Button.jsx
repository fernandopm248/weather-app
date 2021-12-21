import React from 'react'

import { Fragment } from 'react'
import './general.css'
import './button.css'

export default function Button({label,className,onClick,handleClick}){
    function handleClick(){
        onClick(label)
    }




    return(
        
            <button type="submit" onClick={onClick} onClick={handleClick} className={className}>{label}</button>
            



            


            

    


    )
}