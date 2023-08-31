import React from "react"

import ChartBar from "./ChartBar"

import "./Chart.css"

const Chart = (props) => {
  const chartDataValues = props.chartData.map(data => data.value)
  const totalMaximum = Math.max(...chartDataValues)
  
  return <div className="chart">
    {props.chartData.map(data => 
      (<ChartBar
        key={data.label}
        value={data.value}
        maxValue={totalMaximum}
        label={data.label}
      />
    ))}
  </div>
}

export default Chart
