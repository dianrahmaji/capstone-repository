import React from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

function BaseBarChart() {
  const data = [
    {
      name: 'Page A',
      value: 4000,
    },
    {
      name: 'Page B',
      value: 3000,
    },
    {
      name: 'Page C',
      value: 2000,
    },
    {
      name: 'Page D',
      value: 2780,
    },
    {
      name: 'Page E',
      value: 1890,
    },
    {
      name: 'Page F',
      value: 2390,
    },
    {
      name: 'Page G',
      value: 3490,
    },
  ];
  return (
    <BarChart width={730} height={350} data={data}>
      <CartesianGrid />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  );
}

export default BaseBarChart;
