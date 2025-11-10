import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Tier 1', value: 38 },
  { name: 'Tier 2', value: 27 },
  { name: 'Tier 3', value: 35 },
  { name: 'Tier 4', value: 24 },
  { name: 'Tier 5', value: 22 },
];

const AccountTierChart = () => {
  return (
    <div className="flex flex-col items-start justify-between border border-gray-300 rounded-xl w-full h-56 p-2">
      <div className="flex flex-col justify-start w-full py-1 ml-4">
        <span className="text-gray-700 text-sm mb-4">Account Tier (# Acc by Tier)</span>
      </div>

      <BarChart
        width={390}
        height={180}
        data={data}
        margin={{ top: 5, right: 10, bottom: 5, left: -15 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
        />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#0d365e"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default AccountTierChart;
