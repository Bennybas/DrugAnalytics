import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Architype = () => {
  const chartDom = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartDom.current);
    const option = {
      color: ['#c98b27', '#9bc0e2', '#004567', '#8295ae'],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)' 
      },
      series: [
        {
          name: 'Account Archetype',
          type: 'pie',
          radius: ['40%', '70%'], // Donut chart
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside',
            formatter: (params) => {
              return `{name|${params.name}}\n{percentage|${params.percent}%}`;
            },
            rich: {
              name: {
                fontSize: 8,
                color: '#333', // Text color for name
                fontWeight: 500,
              },
              percentage: {
                fontSize: 8,
                color: '#666', 
                fontWeight: 800,
              },
            },
          },
          
          labelLine: {
            show: true,
            length: 20,
            lineStyle: {
              width: 2,
              type: 'solid'
            }
          },
          data: [
            { value: 381.25, name: 'Affiliated IV Site' },
            { value: 305, name: 'Current IV Site' },
            { value: 457.5, name: 'Expected Referral Center' },
            { value: 381.25, name: 'Probable IT Treatment Site' }
          ]
        }
      ]
    };

    myChart.setOption(option);

    // Cleanup chart on component unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-between border border-gray-300 rounded-xl w-[395px] h-56 p-1 ">
      <div className="flex flex-col justify-start w-full py-1 ml-4">
        <span className="text-gray-700 text-sm mb-4">Account Archetype (# Acc by Archetype)</span>
      </div>
      {/* ECharts Pie Chart */}
      <div  ref={chartDom} style={{ width: '100%', height: '80%' }} />
    </div>
  );
};

export default Architype;
