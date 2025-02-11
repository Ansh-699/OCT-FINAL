"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import dynamic from "next/dynamic";
import { ExpensesChart } from "../components/expenses-chart";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function FinancialCharts() {
  const options = {
    chart: {
      type: "line" as "line",
      background: "transparent",
      fontFamily:
        'Nunito, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto',
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: {
        style: { colors: "#607080" },
      },
    },
    theme: { mode: "light" as const, palette: "palette1" },
    grid: { borderColor: "#f1f1f1" },
  };

  const profitSeries = [{ name: "Profit", data: [5000, 7000, 8000, 6000, 9000] }];
  const cashFlowSeries = [{ name: "Cash Flow", data: [2000, 3000, 4500, 1500, 4000] }];

  return (
    <div className="row m-5">
      {/* Profit & Loss Chart */}
      <div className="col-lg-4 col-md-12 mb-4">
        <Card className="shadow-sm h-100">
          <CardHeader>
            <CardTitle className="text-primary">Profit & Loss Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Chart options={options} series={profitSeries} type="line" height={300} />
          </CardContent>
        </Card>
      </div>

      {/* Expenses Pie Chart - Properly Centered */}
      <div className="col-lg-4 col-md-12 mb-4 d-flex justify-content-center align-items-center">
        <Card className="shadow-sm w-100 h-100">
          <CardContent className="d-flex justify-content-center align-items-center ">
            <ExpensesChart />
          </CardContent>
        </Card>
      </div>

      {/* Cash Flow Chart */}
      <div className="col-lg-4 col-md-12 mb-4">
        <Card className="shadow-sm h-100">
          <CardHeader>
            <CardTitle className="text-primary">Cash Flow</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Chart options={options} series={cashFlowSeries} type="area" height={300} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
