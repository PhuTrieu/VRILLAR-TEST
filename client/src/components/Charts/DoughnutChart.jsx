import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function DoughnutChart({ chartData }) {
    return (
        <Doughnut 
            data={chartData}
            width={700}
            height={700}
            options={{ responsive: false }}
        />
    )
}
