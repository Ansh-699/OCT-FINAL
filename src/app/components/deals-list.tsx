"use client"

import { Badge } from "./ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Progress } from "./ui/progress"

interface Deal {
  id: string | number;
  date: string;
  crypto: string;
  amount: string | number;
  price: string | number;
  total: string | number;
  status: 'completed' | 'pending';
  progress: number;
}

interface BadgeClassProps {
  status: Deal['status'];
}

interface ProgressClassProps {
  status: Deal['status'];
}

export default function DealsList({ deals }: { deals: Deal[] }) {
  return (
    <div>
      <div>
        <Table>
          <TableBody>
            {deals.map((deal: Deal) => (
              <TableRow key={deal.id} className="hover:bg-gray-50">
                <TableCell className="text-sm">{deal.date}</TableCell>
                <TableCell className="text-sm">{deal.crypto}</TableCell>
                <TableCell className="text-sm">{deal.amount}</TableCell>
                <TableCell className="text-sm">{deal.price}</TableCell>
                <TableCell className="text-sm">{deal.total}</TableCell>
                <TableCell>
                  <Badge 
                    className={getBadgeClass({ status: deal.status })}
                  >
                    {deal.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Progress 
                    value={deal.progress} 
                    className={getProgressClass({ status: deal.status })}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
function getBadgeClass(arg0: { status: "completed" | "pending"; }): string | undefined {
  throw new Error("Function not implemented.");
}

function getProgressClass(arg0: { status: "completed" | "pending"; }): string | undefined {
  return arg0.status === "completed" ? "bg-green-500" : "bg-yellow-500";
}

