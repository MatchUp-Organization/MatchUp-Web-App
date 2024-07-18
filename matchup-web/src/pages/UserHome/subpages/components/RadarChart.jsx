import React, { useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [20, 10, 4, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 20,
      },
    },
  };

  return <Radar ref={chartRef} data={data} options={options} />;
};

export default RadarChart;
