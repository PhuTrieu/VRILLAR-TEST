import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function PolarAreaChart({ chartData }) {
    return (
        <PolarArea 
            data={chartData}
            width={700}
            height={700}
            options={{ responsive: false }}
        />
    )
}
