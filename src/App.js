import React from 'react';
import './App.css';

import Week from './Week'

const weekDay = ['Sábado','Domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta']

function App() {
  return (
    <div className="container">
      {
        weekDay.map(day => <Week day={day} weatherData='' />)
      }
    </div>
  );
}

export default App;
