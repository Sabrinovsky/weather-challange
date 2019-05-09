import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Scatter,LabelList
} from 'recharts';

const data = [
  {
    name: 'Segunda', max: 590, min: 800, umi: 1400, cnt: 490,
  },
  {
    name: 'Terça', max: 868, min: 967, umi: 1506, cnt: 590,
  },
  {
    name: 'Quarta', max: 1397, min: 1098, umi: 989, cnt: 350,
  },
  {
    name: 'Quinta', max: 1480, min: 1200, umi: 1228, cnt: 480,
  },
  {
    name: 'Sexta', max: 1520, min: 1108, umi: 1100, cnt: 460,
  },
  {
    name: 'Sabado', max: 1400, min: 680, umi: 1700, cnt: 380,
  },
];

export default class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';

  render() {
    return (
      <div className='' >
        <ComposedChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="min" barSize={40} fill="rgb(32, 93, 163)" >
            <LabelList dataKey='name' ></LabelList>
          </Bar>
          <Line type="monotone" dataKey="max" stroke="rgb(45, 136, 255)" />
          <Line type="monotone" dataKey="umi" stroke="rgb(204, 83, 83)" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
      </div>
    );
  }
}
