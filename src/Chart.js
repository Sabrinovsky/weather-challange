import React from 'react';
import {
  ComposedChart, Line,
  Bar, XAxis,
  YAxis, CartesianGrid,
  Tooltip, LabelList
} from 'recharts';

const renderCustomizedLabel = (props) => {
  const { x, width, value } = props;
  return (
    <g>
      <text x={x + width / 2} y={315} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value+'°'}
      </text>
    </g>
  );
};

const Chart = ({ data }) => 

      <div className='' >
        <ComposedChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="umi" barSize={40} fill="rgb(32, 93, 163)" >
            <LabelList dataKey='umi' content={renderCustomizedLabel} ></LabelList>
          </Bar>
          <Line type="monotone" dataKey="min"  stroke="rgb(45, 136, 255)" />
          <Line type="monotone" dataKey="max" stroke="rgb(204, 83, 83)" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
      </div>

export default Chart