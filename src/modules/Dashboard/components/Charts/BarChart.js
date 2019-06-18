import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Colors from '../../../../constants/Colors';

const data = [
  {
    name: 'Small', prs: 12, pv: 2400, amt: 2400,
  },
  {
    name: 'Medium', prs: 51, amt: 2210,
  },
  {
    name: 'Large', prs: 115, amt: 2290,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={1200}
        height={450}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="prs" fill={Colors.cornflowerBlue} />
      </BarChart>
    );
  }
}
