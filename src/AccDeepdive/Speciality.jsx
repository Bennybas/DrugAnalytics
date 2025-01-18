import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import metricsData from '../data/metrics.json';

const Specialty = ({accountId}) => {
  const chartDom = useRef(null);
  const accountMetrics = metricsData.find(account => account.AccId === accountId);

  useEffect(() => {
    if (!accountMetrics || !chartDom.current) return;

    const myChart = echarts.init(chartDom.current, null, {
      renderer: 'canvas',
      devicePixelRatio: window.devicePixelRatio * 2 
    });
  
    const totalSpecialty = accountMetrics.speciality.reduce((sum, item) => 
      sum + parseInt(item.value), 0);

    const option = {
      color: ['#c98b27', '#9bc0e2', '#004567', '#8295ae'], 
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Specialty Distribution',
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
            formatter: '{b}\n{c} ({d}%)',
            textStyle: {
              fontSize: 9,
              fontWeight: 500
            }
          },
          labelLine: {
            show: true,
            length: 20,
            length2: 12,
            smooth: true,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          data: accountMetrics.speciality
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '42%',
          style: {
            text: 'Total',
            fontSize: 12,
            fontWeight: 400,
            fill: '#666'
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '52%',
          style: {
            text: totalSpecialty.toString(),
            fontSize: 20,
            fontWeight: 600,
            fill: '#333'
          }
        }
      ]
    };
  
    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener('resize', handleResize);
  
    return () => {
      myChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [accountMetrics]);
  
  return (
    <div className="flex flex-col justify-between border border-gray-300 rounded-xl w-[395px] h-60 px-4 py-3">
      <span className="text-gray-700 text-sm mb-2">SMA Pats by Specialty</span>
      <div ref={chartDom} style={{ width: '100%', height: '90%' }} />
    </div>
  );
};

export default Specialty;