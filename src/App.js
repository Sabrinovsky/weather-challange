import React from 'react';
import './App.css';
import { Container,Row } from 'react-bootstrap' 

import Week from './Week' 
import Chart from './Chart'

const data = [{day:'Domingo',max:'25',min:'16',umi:'20'},
              {day:'Segunda',max:'28',min:'11',umi:'20'},
              {day:'Terça',max:'28',min:'17',umi:'40'},
              {day:'Quarta',max:'30',min:'20',umi:'65'},
              {day:'Quinta',max:'25',min:'11',umi:'99'},
              {day:'Sexta',max:'32',min:'19',umi:'100'},
              {day:'Sábado',max:'28',min:'16',umi:'10'}]

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
            <Chart data={data}/>
          </Row>
        </Container>
      </>    
  );  
}

export default App;
