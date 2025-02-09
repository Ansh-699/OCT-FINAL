"use client"

import { Badge } from "./ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const expenses = [
  {
    id: "1",
    date: "2024-02-03",
    description: "Office Rent",
    amount: "$2,500",
    category: "Rent",
    status: "paid",
  },
  {
    id: "2",
    date: "2024-02-02",
    description: "Employee Salaries",
    amount: "$12,000",
    category: "Salaries",
    status: "pending",
  },
]

export function ExpensesList() {
  return (
    <div className="table-responsive">
      <Table className="table table-striped mb-0">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="text-center">{expense.date}</TableCell>
              <TableCell className="text-center">{expense.description}</TableCell>
              <TableCell className="text-center">{expense.amount}</TableCell>
              <TableCell className="text-center">{expense.category}</TableCell>
              <TableCell className="text-center">
                <Badge 
                  className={`badge ${
                    expense.status === "paid" 
                      ? "bg-success" 
                      : "bg-warning"
                  }`}
                >
                  {expense.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
