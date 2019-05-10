import React from 'react';
import {
  ComposedChart, Line,
  Bar, XAxis,
  YAxis, CartesianGrid,
  Tooltip, LabelList, ResponsiveContainer
} from 'recharts';

const renderCustomizedLabel = ({x, width,value}) => {
  return (
    <g>
      <text x={x + width / 2} y={330} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value+'%'}
      </text>
    </g>
  );
};

const Chart = ({ data }) => 

          <ResponsiveContainer width='100%' >
            <ComposedChart
              data={data}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="day" />
              <YAxis  />
              <Tooltip />
              <Bar dataKey="umi" barSize={40} fill="rgb(32, 93, 163)" >
                <LabelList dataKey='umi' content={renderCustomizedLabel} ></LabelList>
              </Bar>
              <Line type="monotone" dataKey="min"  stroke="rgb(45, 136, 255)" />
              <Line type="monotone" dataKey="max" stroke="rgb(204, 83, 83)" />
            </ComposedChart>
          </ResponsiveContainer>

export default Chart