"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { MoreHorizontal } from "lucide-react"

const contacts = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    balance: "$1,234.56",
    lastTransaction: "2024-02-01",
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    balance: "$2,345.67",
    lastTransaction: "2024-02-02",
    status: "Active",
  },
]

export function ContactsList() {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Contacts</h4>
      </div>
      <div className="card-body">
        <Table className="table table-hover">
          <TableHeader>
            <TableRow className="text-[#25396f] bg-[#f2f7ff]">
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Email</TableHead>
              <TableHead className="font-bold">Balance</TableHead>
              <TableHead className="font-bold">Last Transaction</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} className="border-b hover:bg-gray-50">
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.balance}</TableCell>
                <TableCell>{contact.lastTransaction}</TableCell>
                <TableCell>
                  <span className="badge bg-success">{contact.status}</span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="btn btn-light-primary">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="dropdown-menu">
                      <DropdownMenuLabel className="dropdown-header">Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="dropdown-item">View details</DropdownMenuItem>
                      <DropdownMenuItem className="dropdown-item">View transactions</DropdownMenuItem>
                      <DropdownMenuItem className="dropdown-item">Edit contact</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
