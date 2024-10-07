'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "banks",
                data: [1250, 4567, 1286],
                backgroundColor: ['#0747b6', '#3365d8', '#2f91fa']
            }
        ],
        labels: ['Bank A', 'Bank B', 'Bank C'],
    }
  return <Doughnut 
        data={data}
        options={{
            cutout: '50%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
        />
 
  
}

export default DoughnutChart