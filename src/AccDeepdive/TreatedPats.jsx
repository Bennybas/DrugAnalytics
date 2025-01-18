import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import metricsData from '../data/metrics.json'



const TreatedPats = ({accountId}) => {
  const accountMetrics = metricsData.find(account => account.AccId === accountId);
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl w-[395px] h-60 px-4 py-3">
      <span className="text-gray-700 text-sm mb-2">SMA Treated Patients</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={accountMetrics.treated_pats} margin={{ top: 20, right: 20, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#666' }} 
          />
          <YAxis 
            allowDecimals={false} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: '#666' }}
            width={30} 
          />
          <Tooltip 
            contentStyle={{ fontSize: '10px', background: '#fff', border: '1px solid #ccc' }} 
            cursor={{ fill: 'rgba(0, 136, 212, 0.1)' }} 
          />
          <Bar 
            dataKey="value" 
            fill="#e39d34" 
            radius={[10, 10, 5, 5]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TreatedPats;
