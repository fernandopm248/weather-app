
import './botaoclima.css'

export default function BotClima({label,className,icone,temperatura,clima,onClick}){
    const dias = ['segunda','terça','quarta','quinta','sexta']


    return(

    <div className="dias">
        <p>{label}</p>
            <img className="icones" src={`https://www.metaweather.com/static/img/weather/${icone}.svg`}/>
            <p>{temperatura}</p>
            </div>

    )

}

