"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 1700 },
  { name: "Jun", total: 2900 },
  { name: "Jul", total: 3100 },
  { name: "Aug", total: 2600 },
  { name: "Sep", total: 2200 },
  { name: "Oct", total: 2500 },
  { name: "Nov", total: 3000 },
  { name: "Dec", total: 3400 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis 
          dataKey="name" 
          stroke="#25396f" // Mazer text color
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis
          stroke="#25396f" // Mazer text color
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar 
          dataKey="total" 
          fill="#435ebe" // Mazer primary color
          radius={[4, 4, 0, 0]} 
          className="hover:fill-primary-400 transition-colors duration-200"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
