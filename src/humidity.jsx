import React from 'react'
import styled from 'styled-components'
import humiditybar from './humiditybar.css'



export default function HumidityBar(props) {


    const Humidity = styled.div`
        width: ${props.p + "%"};
`

    return(
        <div className="humidity">
            <div className="barPercents">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className="bar">
                <Humidity></Humidity>
            </div>
        </div>
    )
}

