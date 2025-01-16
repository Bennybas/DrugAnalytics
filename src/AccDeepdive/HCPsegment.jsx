import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'HCP1', value: 50 },
  { name: 'HCP2', value: 25 },
  { name: 'HCP3', value: 35 },
  { name: 'HCP4', value: 80 },
];

const HCPsegment = () => {
  return (
    <div className="flex flex-col justify-between border border-gray-300 rounded-xl w-[395px] h-60 px-4 py-3">
      <span className="text-gray-700 text-sm mb-2">SMA by HCP Segment</span>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: -25
          }}
          barSize={50}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
          />
          <YAxis
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#666' }}
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{ fontSize: '12px', background: '#fff', border: '1px solid #ccc' }}
            cursor={{ fill: 'rgba(136, 132, 216, 0.1)' }}
          />
          <Bar 
            dataKey="value" 
            fill="#377999" 
            radius={[10, 10, 5, 5]} 
            background={{ fill: '#e0e0e0', radius: [10, 10, 0, 0] }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HCPsegment;