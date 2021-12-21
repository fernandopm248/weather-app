
import { Fragment } from 'react'
import './botaoclima2.css'

export default function BotClima2({label,className,description,symbol,complementh}){


    return(

    <div className="dias2">
          <span className="descricao">{description}</span>
            <span className="numero">{label}</span>
            <div className="detalhes">
           
            <Fragment>
              {complementh}
            </Fragment>
            <span >{symbol}</span>
            </div>
            
            </div>

    )

}

