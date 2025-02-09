"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const allAccounts = [
  {
    id: 1,
    name: "Bank Account",
    balance: 5000,
    todaysChange: 250,
    currency: "USD",
  },
  {
    id: 2,
    name: "Credit Card",
    balance: -1000,
    todaysChange: -50,
    currency: "USD",
  },
  {
    id: 3,
    name: "Savings",
    balance: 10000,
    todaysChange: 500,
    currency: "USD",
  },
  {
    id: 4,
    name: "Bitcoin Wallet",
    balance: 2.5,
    todaysChange: 0.1,
    currency: "BTC",
  },
  {
    id: 5,
    name: "Dubai Account",
    balance: 25000,
    todaysChange: 1000,
    currency: "AED",
  },
  {
    id: 6,
    name: "Ethereum Wallet",
    balance: 15.7,
    todaysChange: -0.5,
    currency: "ETH",
  },
  {
    id: 7,
    name: "Saudi Account",
    balance: 30000,
    todaysChange: -2000,
    currency: "SAR",
  },
  {
    id: 8,
    name: "Kuwait Account",
    balance: 4000,
    todaysChange: 300,
    currency: "KWD",
  },
];

const profit = 7500;
const expenses = 2500;

export function BalanceBoxes() {
  const [selectedAccounts, setSelectedAccounts] = useState(
    allAccounts.map((acc) => acc.id)
  );
  const toggleAccountSelection = (id: number): void => {
    setSelectedAccounts((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((accId: number) => accId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Profit & Expense Overview */}
      <section className="row">
  <div className="col-12 col-lg-4">
    <div className="card">
      <div className="card-body px-4 py-5">
        <div className="row">
          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
            <TrendingUp className="stats-icon green mb-2" />
          </div>
          <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
            <h6 className="text-muted font-semibold">Total Profits</h6>
            <h6 className="font-extrabold mb-0">USD {profit.toLocaleString()}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="col-12 col-lg-4">
    <div className="card">
      <div className="card-body px-4 py-5">
        <div className="row">
          <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
            <TrendingDown className="stats-icon red mb-2" />
          </div>
          <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
            <h6 className="text-muted font-semibold">Total Expenses</h6>
            <h6 className="font-extrabold mb-0">USD {expenses.toLocaleString()}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Account Selection Buttons */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 px-2 sm:px-0 mt-4">
  {allAccounts.map((account) => (
    <button
      key={account.id}
      onClick={() => toggleAccountSelection(account.id)}
      className={`${
        selectedAccounts.includes(account.id)
          ? "bg-primary text-white hover:bg-primary/90"
          : "bg-secondary/10 hover:bg-secondary/20"
      } px-3 py-2 text-sm rounded-lg transition-colors duration-200 w-full truncate font-medium`}
    >
      {account.name}
    </button>
  ))}
</div>

<section className="row mt-4">
  {allAccounts.filter(account => selectedAccounts.includes(account.id)).map((account, index) => (
    <div key={account.id} className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body px-4 py-5">
          <div className="row">
            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
              <DollarSign className="stats-icon blue mb-2" />
            </div>
            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
              <h6 className="text-muted font-semibold">{account.name}</h6>
              <h6 className={`font-extrabold mb-0 ${account.balance >= 0 ? 'text-success' : 'text-danger'}`}> 
                {account.currency} {account.balance.toLocaleString()}
              </h6>
              <span className={account.todaysChange >= 0 ? "text-success small" : "text-danger small"}>
                {account.todaysChange >= 0 ? '+' : ''}{account.currency} {account.todaysChange.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
    </section>
    </div>
  );
}
