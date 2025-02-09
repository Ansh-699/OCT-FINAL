"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export function FinancialCharts() {
  const options = {
    chart: { 
      type: "line" as "line",
      background: "transparent",
      fontFamily: 'Nunito, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
    },
    xaxis: { 
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: {
        style: {
          colors: "#607080"
        }
      }
    },
    theme: {
      mode: 'light' as const,
      palette: 'palette1'
    },
    grid: {
      borderColor: "#f1f1f1",
    }
  }

  const profitSeries = [{ name: "Profit", data: [5000, 7000, 8000, 6000, 9000] }]
  const expenseSeries = [{ name: "Expenses", data: [3000, 4000, 3500, 4500, 5000] }]
  const cashFlowSeries = [{ name: "Cash Flow", data: [2000, 3000, 4500, 1500, 4000] }]

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-0">
            <CardTitle className="text-primary">Profit & Loss Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={options} series={profitSeries} type="line" height={300} />
          </CardContent>
        </Card>
      </div>
      <div className="col-12 col-lg-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-0">
            <CardTitle className="text-primary">Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={options} series={expenseSeries} type="bar" height={300} />
          </CardContent>
        </Card>
      </div>
      <div className="col-12 col-lg-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-0">
            <CardTitle className="text-primary">Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={options} series={cashFlowSeries} type="area" height={300} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
