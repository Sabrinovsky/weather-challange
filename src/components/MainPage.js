import React from 'react'
import { Container } from 'react-bootstrap' 

import WeatherDay from './WeatherDay' 
import Chart from './Chart'
import data from '../utils/WeatherData'


const MaintPage = () =>
    <Container className='center-div' style={{width:'100%',height:"16em"}} >
            {
              Object.keys(data).map((key)=>{
                return(
                  <WeatherDay data={data[key]} />
                )
              })
            }
            <Chart data={data}/>
    </Container>

export default MaintPage