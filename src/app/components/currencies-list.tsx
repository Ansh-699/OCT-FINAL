"use client"

import { Badge } from "./ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const currencies = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$45,000",
    change: "+5.2%",
    volume: "$1.2B",
    type: "crypto",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,300",
    change: "-2.1%",
    volume: "$800M",
    type: "crypto",
  },
]

export function CurrenciesList() {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Currencies</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <Table className="table table-hover mb-0">
            <TableHeader>
              <TableRow>
                <TableHead className="text-bold-500">Name</TableHead>
                <TableHead className="text-bold-500">Symbol</TableHead>
                <TableHead className="text-bold-500">Price</TableHead>
                <TableHead className="text-bold-500">24h Change</TableHead>
                <TableHead className="text-bold-500">Volume</TableHead>
                <TableHead className="text-bold-500">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currencies.map((currency) => (
                <TableRow key={currency.id}>
                  <TableCell>{currency.name}</TableCell>
                  <TableCell>{currency.symbol}</TableCell>
                  <TableCell>{currency.price}</TableCell>
                  <TableCell className={`${
                    currency.change.startsWith("+") ? "text-success" : "text-danger"
                  } font-bold`}>
                    {currency.change}
                  </TableCell>
                  <TableCell>{currency.volume}</TableCell>
                  <TableCell>
                    <Badge className="bg-light-primary text-primary px-2 py-1 rounded">
                      {currency.type}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
