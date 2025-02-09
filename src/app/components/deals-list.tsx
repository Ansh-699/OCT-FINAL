"use client";

import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Progress } from "./ui/progress";

interface Deal {
  id: string | number;
  date: string;
  crypto: string;
  amount: string | number;
  price: string | number;
  total: string | number;
  status: "completed" | "pending";
  progress: number;
}

export default function DealsList({ deals = [] }: { deals?: Deal[] }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Crypto</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal) => (
            <TableRow key={deal.id} className="hover:bg-gray-50">
              <TableCell className="text-sm">{deal.date}</TableCell>
              <TableCell className="text-sm">{deal.crypto}</TableCell>
              <TableCell className="text-sm">{deal.amount}</TableCell>
              <TableCell className="text-sm">{deal.price}</TableCell>
              <TableCell className="text-sm">{deal.total}</TableCell>
              <TableCell>
                <Badge className={getBadgeClass(deal.status)}>
                  {deal.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Progress 
                  value={deal.progress} 
                  className={getProgressClass(deal.status)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function getBadgeClass(status: "completed" | "pending"): string {
  return status === "completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800";
}

function getProgressClass(status: "completed" | "pending"): string {
  return status === "completed" ? "bg-green-500" : "bg-yellow-500";
}
