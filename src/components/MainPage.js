import React, {  useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'

import WeatherDay from './WeatherDay' 
import Chart from './Chart'
import getData from '../utils/WeatherData'
import Loader from '../Loader'


const  MainPage = () => { 
  
  const [data, setData] = useState(null);

  useEffect(() => {
    getData.then(res=>{
      setData(res)
    })
  });

  if (!data) return(
      <Loader/>
  )
  return(
    <>
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
    </>
  )
}
    
export default MainPage