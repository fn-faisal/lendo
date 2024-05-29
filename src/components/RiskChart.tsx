import { ChartData } from 'chart.js';
import React, { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

type RiskChartProps = {
    data: ChartData<'doughnut', any, unknown>
}

export const RiskChart: FC<RiskChartProps> = ({data}) => {
    // Chart options
    const options: any = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            generateLabels: (chart) => {
              const dataset = chart.data.datasets[0];
              const total = dataset.data.reduce((acc, value) => acc + value, 0);
              return chart.data.labels.map((label, index) => {
                const value = dataset.data[index];
                const percentage = ((value / total) * 100).toFixed(2);
                return {
                  text: `${label}: ${percentage}%`,
                  fillStyle: dataset.backgroundColor[index],
                  strokeStyle: dataset.backgroundColor[index],
                  index: index
                };
              });
            },
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const dataset = tooltipItem.dataset;
              const total = dataset.data.reduce((acc, value) => acc + value, 0);
              const currentValue = dataset.data[tooltipItem.dataIndex];
              const percentage = ((currentValue / total) * 100).toFixed(2);
              return `${currentValue} (${percentage}%)`;
            }
          }
        }
      },
      cutout: '70%', // Adjust the cutout percentage to make the center empty
    };
  
    return <Doughnut data={data} options={options} />;
};