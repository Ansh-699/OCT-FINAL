"use client"

import { Badge } from "./ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const transactions = [
  {
    id: "1",
    date: "2024-02-03",
    description: "BTC Purchase",
    amount: "+$1,234.56",
    status: "completed",
    type: "crypto",
  },
  {
    id: "2",
    date: "2024-02-02",
    description: "ETH Sale",
    amount: "-$2,345.67",
    status: "pending",
    type: "crypto",
  },
  {
    id: "3",
    date: "2024-02-01",
    description: "DOGE Transfer",
    amount: "-$567.89",
    status: "failed",
    type: "crypto",
  },
  {
    id: "4",
    date: "2024-01-31",
    description: "SOL Purchase",
    amount: "+$890.12",
    status: "completed",
    type: "crypto",
  },
  {
    id: "5",
    date: "2024-01-30",
    description: "ADA Sale",
    amount: "-$432.10",
    status: "processing",
    type: "crypto",
  }
]

export function TransactionsList() {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="card">
      <Table className="table table-hover">
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead className="font-bold">Date</TableHead>
            <TableHead className="font-bold">Description</TableHead>
            <TableHead className="font-bold">Amount</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="font-bold">Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="hover:bg-gray-50">
              <TableCell className="py-3">{transaction.date}</TableCell>
              <TableCell className="py-3">{transaction.description}</TableCell>
              <TableCell className={`py-3 ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.amount}
              </TableCell>
              <TableCell className="py-3">
                <Badge className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass(transaction.status)}`}>
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell className="py-3">
                <Badge className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {transaction.type}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
