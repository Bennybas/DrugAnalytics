import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const AccSplit = () => {
  const chartDom = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartDom.current, null, {
          renderer: 'canvas',
          devicePixelRatio: window.devicePixelRatio * 2
        });
  
    const option = {
      color: ['#447f9c', '#79b8d2'], // Custom colors for the pie chart
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)' // Tooltip with percentage
      },
      series: [
        {
          name: 'Account Split by Settings',
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
            position: 'outside', // Label outside
            formatter: '{b}: {d}%', // Percentage display in the label
            textStyle: {
              fontSize: 10 
            }
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
            { value: 400, name: 'Academic' },
            { value: 400, name: 'Community' }
          ]
        }
      ],
      graphic: [ // Move graphic to the top level
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
            text: '800', 
            fontSize: 18,
            fontWeight: 600,
            fill: '#c98b27',
          }
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
    <div className="flex flex-col items-start justify-between border border-gray-300 rounded-xl w-full h-56 p-2 " style={{zIndex:2}}>
      <div className="flex flex-col justify-start w-full py-1 ml-4">
        <span className="text-gray-700 text-sm mb-4">Account Split by Settings</span>
      </div>
      {/* ECharts Pie Chart */}
      <div className='-mr-16' ref={chartDom} style={{ width: '100%', height: '80%' }} />
    </div>
  );
};

export default AccSplit;
