import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Architype = () => {
  const chartDom = useRef(null);

  useEffect(() => {
    // Initialize with higher resolution settings
    const myChart = echarts.init(chartDom.current, null, {
      renderer: 'canvas',
      devicePixelRatio: window.devicePixelRatio * 2
    });
    
    const option = {
      color: ['#c98b27', '#9bc0e2', '#004567', '#8295ae'],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
        textStyle: {
          fontSize: 12
        }
      },
      series: [
        {
          name: 'Account Archetype',
          type: 'pie',
          radius: ['40%', '70%'],
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
                color: '#333',
                fontWeight: 500,
                padding: [0, 0, 2, 0] // Added padding between name and percentage
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
              width: 1,
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
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '40%',
          style: {
            text: 'Total',
            fontSize: 10,
            fontWeight: 300,
            fill: '#0f0f0f',
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '50%',
          style: {
            text: '1525',
            fontSize: 18,
            fontWeight: 600,
            fill: '#c98b27',
          }
        }
      ]
    };
  
    myChart.setOption(option);
    
    // Handle window resize for maintaining clarity
    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener('resize', handleResize);
  
    // Cleanup chart on component unmount
    return () => {
      myChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-between border border-gray-300 rounded-xl w-full h-56 p-1 ">
      <div className="flex flex-col justify-start w-full py-1 ml-4">
        <span className="text-gray-700 text-sm mb-4">Account Archetype (# Acc by Archetype)</span>
      </div>
      {/* ECharts Pie Chart */}
      <div ref={chartDom} style={{ width: '100%', height: '80%' }} />
    </div>
  );
};

export default Architype;