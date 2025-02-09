"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts"

// Mazer theme colors
const COLORS = [
  "#435ebe", // primary
  "#56c2e6", // info
  "#ffc107", // warning
  "#198754", // success
  "#dc3545", // danger
  "#6c757d", // secondary
  "#7c8db5", // purple
  "#f3f4f6"  // light
]

const data = [
  { name: "Rent", value: 2500 },
  { name: "Salaries", value: 12000 },
  { name: "Utilities", value: 800 },
  { name: "Equipment", value: 1500 },
  { name: "Marketing", value: 2000 },
  { name: "Insurance", value: 1000 },
  { name: "Travel", value: 1200 },
  { name: "Others", value: 1000 },
]

export function ExpensesChart() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Expenses Distribution</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie 
              data={data} 
              cx="50%" 
              cy="50%" 
              labelLine={false} 
              outerRadius={100} 
              fill="#435ebe"
              dataKey="value"
              strokeWidth={2}
              stroke="#ffffff"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
