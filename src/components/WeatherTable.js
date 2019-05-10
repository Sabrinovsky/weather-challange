import React from 'react'
import { Container,Row } from 'react-bootstrap' 

import WeatherDay from './WeatherDay' 
import Chart from './Chart'
import data from '../utils/WeatherData'


const WeatherTable = () =>
    <Container className='center-div'>
        <Row>
            {
              Object.keys(data).map((key)=>{
                return(
                  <WeatherDay data={data[key]} />
                )
              })
            }
        </Row>
        <Row style={{display:'inline-flex'}}>
            <Chart data={data}/>
        </Row>
    </Container>

export default WeatherTable