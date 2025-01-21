import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import metricsData from '../data/hcp_data.json'

const data = [
  { name: 'Age <2', Zolgensma: 50, Evrysdi: 25, Spinraza: 25 },
  { name: 'Age 2-17', Zolgensma: 30, Evrysdi: 35, Spinraza: 35 },
  { name: 'Age 18-40', Zolgensma: 20, Evrysdi: 40, Spinraza: 40 },
  { name: 'Age >40', Zolgensma: 10, Evrysdi: 20, Spinraza: 70 },
];

const AgevsProduct = ({Hcp_Id}) => {
  const HcpMetrics = metricsData.find(HCP => HCP.HCP_id === Hcp_Id);
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl w-full h-60 px-4 py-3">
      <span className="text-gray-700 text-sm mb-2">Age vs Product Distribution</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={HcpMetrics.age_vs_prod} margin={{ top: 20, right: 20, left: 0 }}>
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
          <Legend 
            wrapperStyle={{ fontSize: '10px' }} 
            verticalAlign="bottom" 
          />
          <Bar dataKey="Zolgensma" stackId="a" fill="#e39d34" />
          <Bar dataKey="Evrysdi" stackId="a" fill="#0f90d1" />
          <Bar dataKey="Spinraza" stackId="a" fill="#9bc0e2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgevsProduct;
