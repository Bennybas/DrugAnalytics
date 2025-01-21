import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import metricsData from '../data/metrics.json'


const Patients = ({accountId}) => {

  const accountMetrics = metricsData.find(account => account.AccId === accountId);
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl w-full h-60 px-4 py-3">
      <span className="text-gray-700 text-sm mb-2">SMA Patients</span>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={accountMetrics.pats_data}
          margin={{ top: 20, right: 20, bottom: 2, left: 0 }}
        >
          <CartesianGrid stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#666' }}
            domain={['2020', '2025']}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: '#666' }}
            tickCount={6}
            width={25}
          />
          <Tooltip
            contentStyle={{ fontSize: '10px', background: '#fff', border: '1px solid #ccc' }}
            cursor={{ fill: 'rgba(0, 136, 212, 0.1)' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#056a9c"
            fill="#b3ddfc"
            strokeWidth={2}
            dot={{ fill: '#FFFFFF', r: 3 }}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Patients;