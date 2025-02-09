"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface CurrencyData {
  time: string;
  BTC: number;
  ETH: number;
}

const data: CurrencyData[] = [
  {
    time: "Jan",
    BTC: 45000,
    ETH: 3200,
  },
  {
    time: "Feb",
    BTC: 47000,
    ETH: 3400,
  },
  {
    time: "Mar",
    BTC: 42000,
    ETH: 3100,
  },
  {
    time: "Apr",
    BTC: 51000,
    ETH: 3800,
  },
  {
    time: "May",
    BTC: 49000,
    ETH: 3600,
  },
  {
    time: "Jun",
    BTC: 53000,
    ETH: 4000,
  },
  {
    time: "Jul",
    BTC: 48000,
    ETH: 3500,
  },
]

export function CurrencyChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis 
          dataKey="time" 
          stroke="#6c757d" // Mazer text-secondary color
          fontSize={12} 
          tickLine={false} 
          axisLine={false} 
        />
        <YAxis
          stroke="#6c757d" // Mazer text-secondary color
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#ffffff',
            border: '1px solid #dce7f1', // Mazer border color
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}
          itemStyle={{ color: '#495057' }} // Mazer text color
        />
        <Line 
          type="monotone" 
          dataKey="BTC" 
          stroke="#435ebe" // Mazer primary color
          strokeWidth={2} 
          dot={{ r: 4, stroke: '#ffffff', strokeWidth: 2 }} 
        />
        <Line 
          type="monotone" 
          dataKey="ETH" 
          stroke="#198754" // Mazer success color
          strokeWidth={2} 
          dot={{ r: 4, stroke: '#ffffff', strokeWidth: 2 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
