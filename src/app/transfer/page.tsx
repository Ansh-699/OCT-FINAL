"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Calendar } from "../components/ui/calendar";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import "bootstrap/dist/css/bootstrap.min.css";

const accounts = [
    { id: "1", name: "Main Account", currency: "USD" },
    { id: "2", name: "Trading Account", currency: "USD" },
    { id: "3", name: "Savings Account", currency: "EUR" },
    { id: "4", name: "Expense Account", currency: "USD" },
    { id: "5", name: "Crypto Wallet", currency: "BTC" },
    { id: "6", name: "Investment Fund", currency: "USD" },
];

export default function TransferPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [currency, setCurrency] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [fromAccount, setFromAccount] = useState<string>("");
    const [toAccount, setToAccount] = useState<string>("");
    const [toAccountOptions, setToAccountOptions] = useState<any[]>([]);
    const [remarks, setRemarks] = useState<string>("");

    useEffect(() => {
        if (fromAccount) {
            const selectedAccount = accounts.find(acc => acc.id === fromAccount);
            if (selectedAccount) {
                const filtered = accounts.filter(acc => acc.currency === selectedAccount.currency && acc.id !== fromAccount);
                setToAccountOptions(filtered);
            }
        } else {
            setToAccountOptions([]);
        }
    }, [fromAccount]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with data:", {
            date,
            currency,
            amount,
            fromAccount,
            toAccount: toAccount || "Not Selected",
            remarks,
        });
        // Here you would add your actual form submission logic (e.g., API call)
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <div className="card-header bg-primary text-white text-center py-3">
                    <h3 className="fw-bold">Transfer Money</h3>
                    <p className="text-light mb-0">Transfer funds between your accounts</p>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3 align-items-start">
                            <div className="col-md-4">
                                <Label className="form-label">Date</Label>
                                <div className="border rounded-md p-2">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="w-full"
                                    />
                                </div>
                                {date && (
                                    <p className="text-sm text-muted mt-2">{format(date, "PPP")}</p>
                                )}
                            </div>

                            <div className="col-md-8">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <Label className="form-label">Currency</Label>
                                        <Select onValueChange={setCurrency} defaultValue={currency}>
                                            <SelectTrigger className="form-control">
                                                <SelectValue placeholder="Select Currency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from(new Set(accounts.map((acc) => acc.currency))).map((curr) => (
                                                    <SelectItem key={curr} value={curr}>{curr}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-md-6">
                                        <Label className="form-label">Amount</Label>
                                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <Label className="form-label">Transfer From</Label>
                                        <Select onValueChange={setFromAccount} defaultValue={fromAccount}>
                                            <SelectTrigger className="form-control">
                                                <SelectValue placeholder="Select Account" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {accounts.map((acc) => (
                                                    <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-md-6">
                                        <Label className="form-label">Transfer To</Label>
                                        <Select onValueChange={setToAccount} defaultValue={toAccount}>
                                            <SelectTrigger className="form-control">
                                                <SelectValue placeholder="Select Account" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {toAccountOptions.map((acc) => (
                                                    <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="col-md-12">
                                        <Label className="form-label">Remarks</Label>
                                        <Textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="col-12 text-center mt-3">
                                        <Button type="submit" className="btn btn-primary w-100">Transfer</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}