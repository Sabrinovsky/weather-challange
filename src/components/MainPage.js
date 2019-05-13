import React, {  useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import Loader from 'react-loader-spinner'

import WeatherDay from './WeatherDay' 
import Chart from './Chart'
import getData from '../utils/WeatherData'


const  MainPage = () => { 
  
  const [data, setData] = useState(null);

  useEffect(() => {
    getData.then(res=>{
      setData(res)
    })
  });

  if (!data) return(
    <Loader 
         type="Puff"
         color="#00BFFF"
         height="100"	
         width="100"
      />  
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