import React from 'react';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap' 

import Week from './Week' 
import Chart from './Chart'

// const weekDay = ['Sábado','Domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta']
const data = [{day:'Domingo',max:'25',min:'16',umi:'18'},
              {day:'Domingo',max:'25',min:'16',umi:'18'},
              {day:'Domingo',max:'25',min:'16',umi:'18'},
              {day:'Domingo',max:'25',min:'16',umi:'18'},
              {day:'Domingo',max:'25',min:'16',umi:'18'},
              {day:'Domingo',max:'25',min:'16',umi:'18'},
              {day:'Domingo',max:'25',min:'16',umi:'18'}]

function App() {
  return (
      <>
        <Container className='center-div'>
          <Row>
            {
              Object.keys(data).map((key,index)=>{
                return(
                  <Week data={data[key]} />
                )
              })
            }
          </Row>
          <Row style={{display:'inline-flex'}}>
            <Chart/>
          </Row>
        </Container>
      </>    
  );  
}

export default App;
