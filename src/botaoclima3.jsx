import './botaoclima3.css'

export default function BotClima3({className,label,description}){


    return(

    <div className="dias3">
          <span className={className}>{description}</span>
            <span className="numero">{label}</span>
            
            
            </div>

    )

}